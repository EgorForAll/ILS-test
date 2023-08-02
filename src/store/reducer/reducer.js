import { createReducer } from "@reduxjs/toolkit";
import { fetchRoutes, togglePoint, findWay } from "../actions/actions";

const initialState = {
  routes: [],
  currentPoint: 1,
  drivingWay: "",
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchRoutes, (state, action) => {
    state.routes = action.payload;
  });
  builder.addCase(togglePoint, (state, action) => {
    state.currentPoint = action.payload;
  });
  builder.addCase(findWay, (state, action) => {
    state.drivingWay = action.payload;
  });
});
