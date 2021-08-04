import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "./state";
import { bindActionCreators } from "redux";

function App() {
  const dispatch = useDispatch();
  const value = useSelector((state: State) => state.bank);
  const { bankrupt, depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  console.log(value);

  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={() => depositMoney(5000)}>Deposit</button>
      <button onClick={() => (value > 0 ? withdrawMoney(5000) : null)}>
        Withdraw
      </button>
      <button onClick={() => bankrupt()}>bankrupt</button>
    </div>
  );
}

export default App;
