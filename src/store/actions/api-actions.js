import { findWay } from "./actions";
import { createPolyline } from "../../utils/utils";

export const fetchWay = (url) => (dispatch, _getState, api) => {
  api
    .get(url)
    .then(({ data }) => dispatch(findWay(data.routes[0].geometry)))
    .catch((err) => console.log(err));
};
