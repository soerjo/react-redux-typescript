import { ActionTypes } from "../action-types";

interface DepositAction {
  type: ActionTypes.DEPOSIT;
  payload: number;
}
interface WithdrawAction {
  type: ActionTypes.WITHDRAW;
  payload: number;
}
interface BankcruptAction {
  type: ActionTypes.BANKRUPT;
}

export type Action = DepositAction | WithdrawAction | BankcruptAction;
