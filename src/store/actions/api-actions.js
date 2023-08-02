import { fetchDriveRoute } from "./actions";

export const fetchWay = (url) => (dispatch, _getState, api) => {
  api
    .get(url)
    .then(({ data }) => dispatch(fetchDriveRoute(data.routes[0].geometry)))
    .catch(() => alert("Возникла проблема с подключением к сети Интернет"));
};
