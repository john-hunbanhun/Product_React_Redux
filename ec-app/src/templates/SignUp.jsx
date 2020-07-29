import React,{useState} from "react";
import { TextInput } from "../component/UIkit/index";

const SignUp = () => {
    const [username,setUsername] =useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const [confirmPassword,setConfirmPassword] =useState("");

  return (
    <div className="c-section-container">
      <h2 className="u-text_headline u-text-center">アカウント登録</h2>
      <div className="module-spacer--medium" />
      <TextInput
        fullWidth={}
        label={}
        multiline={}
        required={}
        rows={}
        value={}
        type={}
        onChange={}
      />
    </div>
  );
};
export default SignUp;
