import { put, takeEvery } from "redux-saga/effects";
import { ActionType } from "../actions/actions";
import { setRoutes, toggleRoutes } from "../actions/actions";

function* loadRoutesWorker({ payload: { routes } }) {
  console.log(routes);
  yield put(setRoutes(routes));
}

function* togglePointWorker({ payload: { point } }) {
  yield put(toggleRoutes(point));
}

export function* routeWatcher() {
  yield takeEvery(ActionType.SET_ROUTES, loadRoutesWorker);
  yield takeEvery(ActionType.TOGGLE_POINT, togglePointWorker);
}
