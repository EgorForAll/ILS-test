import polyline from "@mapbox/polyline";
import L from "leaflet";

export const createUrl = (arr) => {
  let points = [];
  for (let point of arr) {
    points.push(`${point.lng},${point.lat}`);
  }
  let coords = points.join(";");

  return `${coords}?overview=full`;
};

export const createPolyline = (geometry, map) =>
  L.polyline(polyline.decode(geometry)).addTo(map);
