import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import polyline from "@mapbox/polyline";
import { customIcon } from "../ui/customIcon";
import { fetchWay } from "../../store/actions/api-actions";
import { useDispatch, useSelector } from "react-redux";
import { createUrl, createPolyline } from "../../utils/utils";

export const LeafletParameters = {
  TILE_LAYER: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  ATTRIBUTION: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy`,
};

const Map = ({ route }) => {
  const mapRef = useRef();
  const dispatch = useDispatch();
  const { drivingWay } = useSelector((state) => state);
  const onFetchDrivingRoute = (url) => dispatch(fetchWay(url));

  useEffect(() => {
    const middlePoint = route.way[Math.floor(route.way.length / 2)];
    mapRef.current = L.map(`map`, {
      center: {
        lat: middlePoint.lat,
        lng: middlePoint.lng,
      },
      zoom: 12,
    });
    return () => {
      mapRef.current.remove();
    };
  }, [route]);

  useEffect(() => {
    L.tileLayer(LeafletParameters.TILE_LAYER, {
      attribution: LeafletParameters.ATTRIBUTION,
    }).addTo(mapRef.current);

    const markerGroup = L.layerGroup().addTo(mapRef.current);

    route.way.forEach((point) => {
      L.marker(
        {
          lat: point.lat,
          lng: point.lng,
        },
        {
          icon: customIcon,
        }
      )
        .addTo(markerGroup)
        .bindPopup(point.lat);
    });

    return () => {
      markerGroup.clearLayers();
    };
  }, [route]);

  useEffect(() => {
    const url = createUrl(route.way);
    onFetchDrivingRoute(url);
  }, [route]);

  useEffect(() => {
    L.polyline(polyline.decode(drivingWay)).addTo(mapRef.current);
  }, [drivingWay]);

  return (
    <div id="map" ref={mapRef} style={{ width: "100%", height: "700px" }}></div>
  );
};

export default Map;
