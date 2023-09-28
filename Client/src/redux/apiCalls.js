import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import { normalAxioRequest } from "../axiosRequests";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await normalAxioRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
