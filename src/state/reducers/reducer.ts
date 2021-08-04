import { Action } from "../action";
import { ActionTypes } from "../action-types";

const initialState: number = 0;

const bankReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.DEPOSIT:
      return state + action.payload;
    case ActionTypes.WITHDRAW:
      return state - action.payload;
    case ActionTypes.BANKRUPT:
      return (state = 0);
    default:
      return state;
  }
};

export default bankReducer;
