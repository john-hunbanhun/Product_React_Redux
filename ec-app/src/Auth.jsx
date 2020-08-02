import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIsSignedIn } from "./reducks/users/selector";
import { useEffect } from "react";
import { listenAuthState } from "./reducks/users/operation";

const Auth = ({ children }) => {
  const selector = useSelector((state) => state);
  const isSignedIn = getIsSignedIn(selector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isSignedIn) {
      dispatch(listenAuthState());
    }
  }, []);

  if (!isSignedIn) {
    return <></>;
  } else {
    return children;
  }
};
export default Auth;
