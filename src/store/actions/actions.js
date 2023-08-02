import { createAction } from "@reduxjs/toolkit";

export const ActionType = {
  LOAD_ROUTES: "load routes",
  TOGGLE_POINT: "roogle point",
  FIND_DRIVING_WAY: "find driving way",
};

export const fetchRoutes = (routes) => ({
  type: ActionType.LOAD_ROUTES,
  payload: routes,
});

export const togglePoint = (point) => ({
  type: ActionType.TOGGLE_POINT,
  payload: point,
});

export const findWay = createAction(ActionType.FIND_DRIVING_WAY, (way) => {
  return {
    payload: way,
  };
});
