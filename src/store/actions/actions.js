import { createAction } from "@reduxjs/toolkit";

export const ActionType = {
  LOAD_ROUTES: "load routes",
  TOGGLE_POINT: "roogle point",
};

export const fetchRoutes = createAction(ActionType.LOAD_ROUTES, (routes) => {
  return {
    payload: routes,
  };
});

export const togglePoint = createAction(ActionType.TOGGLE_POINT, (point) => {
  return {
    payload: point,
  };
});
