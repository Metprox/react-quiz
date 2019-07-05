import axios from "../../axios/axios-quiz";
import { AUTH_SUCCESS, AUTH_LOGOUT } from "./actionTypes";

export function auth(email, password, isLogin) {
  return async dispatch => {
    const authData = {
      email,
      password,
      returnSecureToken: true
    };
    let url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAxK_fwjAdxm90fgIlzxJ6gsfue5mytYB0";
    if (isLogin) {
      url =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAxK_fwjAdxm90fgIlzxJ6gsfue5mytYB0";
    }
    const response = await axios.post(url, authData);
    const data = response.data;
    const expirationDate = new Date(
      new Date().getTime() + data.expiresIn * 1000
    );

    localStorage.setItem("token", data.idToken);
    localStorage.setItem("userId", data.localId);
    localStorage.setItem("expirationDate", expirationDate);

    dispatch(authSeccess(data.idToken));
    dispatch(authLogout(data.expiresIn));
  };
}

export function authLogout(time) {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, time * 1000);
  };
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expirationDate");
  return {
    type: AUTH_LOGOUT
  };
}

export function authSeccess(token) {
  return {
    type: AUTH_SUCCESS,
    token
  };
}

export function autoLogin() {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSeccess(token));
        dispatch(
          authLogout((expirationDate.getTime() - new Date().getTime()) / 1000)
        );
      }
    }
  };
}
