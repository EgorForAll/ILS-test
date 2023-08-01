import React from "react";
import { TileLayer, Marker, MapContainer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ routes, currentPoint }) => {
  const position = [51.505, -0.09];
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          <span>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </span>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
