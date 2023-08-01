import { createReducer } from "@reduxjs/toolkit";
import { fetchRoutes, togglePoint } from "../actions/actions";

const initialState = {
  routes: [],
  currentPoint: 1,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchRoutes, (state, action) => {
    state.routes = action.payload;
  });
  builder.addCase(togglePoint, (state, action) => {
    state.currentPoint = action.payload;
  });
});
