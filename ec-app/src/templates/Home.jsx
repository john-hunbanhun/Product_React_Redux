import React from "react";
import { getUserId } from "../reducks/users/selector";
import { useSelector, useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);

  return (
    <div>
      <h2>Home</h2>
      <p>{uid}</p>
      <button onClick={() => dispatch(push("/login"))}>ログイン画面</button>
    </div>
  );
};

export default Home;
