import { all } from "redux-saga/effects";
import { routeWatcher } from "./routeSaga";

export default function* rootWatcher() {
  yield all([routeWatcher()]);
}
