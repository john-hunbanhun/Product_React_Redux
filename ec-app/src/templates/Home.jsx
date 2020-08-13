import React from "react";
import { getUserId, getUserName } from "../reducks/users/selector";
import { useSelector, useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { signOut } from "../reducks/users/operation";

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
      <button onClick={() => dispatch(signOut())}>ログアウト</button>
      <button onClick={() => dispatch(push("/signup"))}>アカウント登録</button>
      <button onClick={() => dispatch(push("/product/edit"))}>商品編集ページ</button>
    </div>
  );
};

export default Home;
