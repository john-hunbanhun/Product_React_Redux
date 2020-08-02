import React, { useCallback, useState } from "react";
import { TextInput, PrimaryButton } from "../component/UIkit/index";
import { signIn } from "../reducks/users/operation";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  //useCallback関数でメモ化(パフォーマンスを良くする)
  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );
  const inputPassword = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  return (
    <div className="c-section-container">
      <h2 className="u-text_headline u-text-center">サインイン</h2>
      <div className="module-spacer--medium" />
      <TextInput
        fullWidth={true}
        label={"メールアドレス"}
        multiline={false}
        required={true}
        rows={1}
        value={email}
        type={"email"}
        onChange={inputEmail}
      />
      <TextInput
        fullWidth={true}
        label={"パスワード"}
        multiline={false}
        required={true}
        rows={1}
        value={password}
        type={"password"}
        onChange={inputPassword}
      />
      <div className="center">
        <div className="module-spacer--medium" />
        <PrimaryButton
          label={"サインイン"}
          onClick={() => dispatch(signIn(email, password))}
        />
      </div>
    </div>
  );
};
export default SignIn;
