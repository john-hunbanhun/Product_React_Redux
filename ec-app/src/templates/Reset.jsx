import React, { useCallback, useState } from "react";
import { TextInput, PrimaryButton } from "../component/UIkit/index";
import { PasswordReset } from "../reducks/users/operation";
import { useDispatch } from "react-redux";

const Reset = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  //useCallback関数でメモ化(パフォーマンスを良くする)
  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  return (
    <div className="c-section-container">
      <h2 className="u-text_headline u-text-center">パスワードのリセット</h2>
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
      <div className="center">
        <div className="module-spacer--medium" />
        <PrimaryButton
          label={"パスワードのリセット"}
          onClick={() => dispatch(PasswordReset(email))}
        />
      </div>
    </div>
  );
};
export default Reset;
