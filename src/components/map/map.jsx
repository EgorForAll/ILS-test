import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import polyline from "@mapbox/polyline";
import marker from "../../assets/marker.svg";

export const LeafletParameters = {
  TILE_LAYER: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  ATTRIBUTION: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy`,
};

const Map = ({ route }) => {
  const mapRef = useRef();

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
      const customIcon = L.icon({
        iconUrl: marker,
        iconRetinaUrl: marker,
        iconAnchor: [30, 63],
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(60, 75),
        className: "map-icon",
      });

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
    const createUrl = () => {
      let points = [];
      for (let point of route.way) {
        points.push(`${point.lng},${point.lat}`);
      }
      let coords = points.join(";");

      return `http://router.project-osrm.org/route/v1/driving/${coords}?overview=full`;
    };
    const url = createUrl();
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        L.polyline(polyline.decode(res.routes[0].geometry)).addTo(
          mapRef.current
        );
      });
  }, [route]);

  return (
    <div id="map" ref={mapRef} style={{ width: "100%", height: "700px" }}></div>
  );
};

export default Map;
