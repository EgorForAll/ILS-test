import L from "leaflet";
import icon from "../../assets/marker.svg";

export const customIcon = L.icon({
  iconUrl: icon,
  iconRetinaUrl: icon,
  iconAnchor: [30, 63],
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: "map-icon",
});
