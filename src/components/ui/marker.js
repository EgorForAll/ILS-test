import L from "leaflet";
import marker from "../../assets/marker.svg";

const mapIcon = new L.Icon({
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

export { mapIcon };
