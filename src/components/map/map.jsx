import React, { useEffect, useRef } from "react";
import leaflet from "leaflet";
import polyline from "@mapbox/polyline";
import "leaflet/dist/leaflet.css";
import marker from "../../assets/marker.svg";

export const LeafletParameters = {
  TILE_LAYER: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  ATTRIBUTION: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy`,
};

const Map = ({ route }) => {
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: route.way[1].lat,
        lng: route.way[1].lng,
      },
      zoom: 10,
    });
    return () => {
      mapRef.current.remove();
    };
  }, [route]);

  useEffect(() => {
    leaflet
      .tileLayer(LeafletParameters.TILE_LAYER, {
        attribution: LeafletParameters.ATTRIBUTION,
      })
      .addTo(mapRef.current);

    const markerGroup = leaflet.layerGroup().addTo(mapRef.current);

    route.way.forEach((point) => {
      const customIcon = leaflet.icon({
        iconUrl: marker,
        iconRetinaUrl: marker,
        iconAnchor: [30, 63],
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new leaflet.Point(60, 75),
        className: "map-icon",
      });

      leaflet
        .marker(
          {
            lat: point.lat,
            lng: point.lng,
          },
          {
            icon: customIcon,
          }
        )
        .addTo(markerGroup)
        .bindPopup(route.name);
    });

    return () => {
      markerGroup.clearLayers();
    };
  }, [route]);

  useEffect(() => {
    leaflet.Routing.control({
      waypoints: [
        leaflet.latLng(59.84660399, 30.29496392),
        leaflet.latLng(59.82934196, 30.42423701),
      ],
    }).addTo(mapRef.current);
  });

  return (
    <div id="map" ref={mapRef} style={{ width: "100%", height: "700px" }}></div>
  );
};

export default Map;
