import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import filterContact from "./phoneBookActions";

const filter = createReducer("", {
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  filter,
});
