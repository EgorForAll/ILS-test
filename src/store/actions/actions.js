import { createAction } from "@reduxjs/toolkit";

export const ActionType = {
  SET_ROUTES: "load routes",
  FETCH_ROUTES: "fetch routes",
  TOGGLE_POINT: "toggle point",
  FIND_DRIVING_WAY: "find driving way",
};

export const setRoutes = (routes) => ({
  type: ActionType.SET_ROUTES,
  payload: routes,
});

export const toggleRoutes = (point) => ({
  type: ActionType.TOGGLE_POINT,
  payload: point,
});

export const fetchDriveRoute = createAction(
  ActionType.FIND_DRIVING_WAY,
  (way) => {
    return {
      payload: way,
    };
  }
);
