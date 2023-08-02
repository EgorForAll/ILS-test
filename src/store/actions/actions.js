import { createAction } from "@reduxjs/toolkit";

export const ActionType = {
  LOAD_ROUTES: "load routes",
  TOGGLE_POINT: "roogle point",
  FIND_DRIVING_WAY: "find driving way",
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

export const findWay = createAction(ActionType.FIND_DRIVING_WAY, (way) => {
  return {
    payload: way,
  };
});
