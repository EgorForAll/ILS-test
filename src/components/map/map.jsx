import React from "react";
import { TileLayer, Marker, MapContainer, Popup } from "react-leaflet";
import { mapIcon } from "../ui/marker";
import { Polyline } from "react-leaflet/Polyline";
import polyline from "@mapbox/polyline";
import "leaflet/dist/leaflet.css";

const Map = ({ route }) => {
  const position = [route.way[1].lat, route.way[1].lng];

  return (
    <MapContainer
      center={position}
      zoom={11}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {route.way.map((point) => (
        <Marker
          key={route.way.indexOf(point)}
          position={[point.lat, point.lng]}
          icon={mapIcon}
        >
          <Popup></Popup>
        </Marker>
      ))}
      <Polyline
        positions={[
          [route.way[0].lat, route.way[0].lng],
          [route.way[1].lat, route.way[1].lng],
          [route.way[2].lat, route.way[2].lng],
        ]}
        color={"red"}
      />
    </MapContainer>
  );
};

export default Map;
