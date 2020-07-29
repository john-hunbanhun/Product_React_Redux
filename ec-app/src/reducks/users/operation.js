import { signInAction } from "./action";
import { push } from "connected-react-router";
import {
  auth,
  db,
  storage,
  functions,
  FirebaseTimestamp,
} from "../../firebase/index";

export const signIn = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;
    if (!isSignedIn) {
      const url = "https://api.github.com/users/deatiger";

      const responce = await fetch(url)
        .then((res) => res.json())
        .catch(() => null);

      const username = responce.login;

      dispatch(
        signInAction({
          isSignedIn: true,
          uid: "00001",
          username: username,
        })
      );
      dispatch(push("/"));
    }
  };
};

export const signUp = (username, email, password, confirmpassword) => {
  return async (dispatch) => {
    //Validation
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmpassword === ""
    ) {
      alert("必須項目が未入力です");
      return false; //signUp関数自体が何もしないままそのまま終了って意味
    }
    if (password !== confirmpassword) {
      alert("パスワードが一致していません。");
      return false;
    }

    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          const uid = user.uid;
          const timestamp = FirebaseTimestamp.now();

          const userInitialData = {
            created_at: timestamp,
            email: email,
            role: "customer",
            uid: uid,
            updated_at: timestamp,
            username: username,
          };

          db.collection("users")
            .doc(uid)
            .set(userInitialData)
            .then(() => {
              dispatch(push("/"));
            });
        }
      });
  };
};
