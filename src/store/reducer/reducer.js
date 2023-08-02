import { ActionType } from "../actions/actions";

const initialState = {
  routes: [],
  currentPoint: 1,
  drivingWay: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ROUTES:
      return { ...state, routes: action.payload };
    case ActionType.TOGGLE_POINT:
      return { ...state, currentPoint: action.payload };
    case ActionType.FIND_DRIVING_WAY:
      return { ...state, drivingWay: action.payload };
    default:
      return { ...state };
  }
};
