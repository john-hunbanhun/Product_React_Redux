import React from "react";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import { signInAction } from "../reducks/users/action";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>ログイン</h2>
      <button
        onClick={() => {
          dispatch(signInAction({ uid: "0001", username: "hoge" }));
          dispatch(push("/"));
        }}
      >
        ログイン
      </button>
    </div>
  );
};
export default Login;
