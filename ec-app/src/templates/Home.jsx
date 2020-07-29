import React from "react";
import { getUserId, getUserName } from "../reducks/users/selector";
import { useSelector, useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const username = getUserName(selector);

  return (
    <div>
      <h2>Home</h2>
      <p>{uid}</p>
      <p>{username}</p>
      <button onClick={() => dispatch(push("/signin"))}>ログイン画面</button>
      <button onClick={() => dispatch(push("/signup"))}>アカウント登録</button>
    </div>
  );
};

export default Home;
