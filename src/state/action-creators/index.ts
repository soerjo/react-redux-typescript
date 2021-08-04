import { Dispatch } from "react";
import { Action } from "../action";
import { ActionTypes } from "../action-types";

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.WITHDRAW,
      payload: amount,
    });
  };
};

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.DEPOSIT,
      payload: amount,
    });
  };
};

export const bankrupt = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.BANKRUPT,
    });
  };
};
