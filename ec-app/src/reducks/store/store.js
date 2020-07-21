import { createStore as reduxCreateStore, combineReducers } from "redux";
import { UserReducer } from "../users/reducer";

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      users: UserReducer,
    })
  );
}
