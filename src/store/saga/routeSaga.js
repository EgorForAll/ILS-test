import { put, takeEvery } from "redux-saga/effects";
import { ActionType } from "../actions/actions";
import { togglePointCreator, fetchRoutesCreator } from "../actions/actions";

function* loadRoutesWorker({ payload: { routes } }) {
  yield put(fetchRoutesCreator(routes));
}

function* togglePointWorker({ payload: { point } }) {
  yield put(togglePointCreator(point));
}

export function* routeWatcher() {
  yield takeEvery(ActionType.LOAD_ROUTES, loadRoutesWorker);
  yield takeEvery(ActionType.TOGGLE_POINT, togglePointWorker);
}
