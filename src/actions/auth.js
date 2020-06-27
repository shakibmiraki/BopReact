import * as types from "../actionTypes/auth";
import { authService } from "../services/auth";
import { routes } from "../constants/constant";
import history from "./../services/history";
import { isRequesting, isRequested, errorOccurred } from "./request";

export const setStep = (step) => ({
  type: types.SetStep,
  payload: step,
});

export const activateRequest = () => async (dispatch) => {
  await dispatch(isRequesting());
  return authService
    .activate_request()
    .then(async (result) => {
      await dispatch(isRequested(result.data.meta.message));
      history.push(`${routes.sign_up.base}${routes.sign_up.activation}`);
    })
    .catch((error) => {
      dispatch(errorOccurred());
    });
};

export const activate = (model) => async (dispatch) => {
  await dispatch(isRequesting());
  authService
    .activate(model)
    .then(async (result) => {
      authService.setSignedUp();
      await dispatch(isRequested(result.data.meta.message));
      history.push(`${routes.sign_up.base}${routes.sign_up.activated}`);
    })
    .catch((error) => {
      dispatch(errorOccurred());
    });
};
