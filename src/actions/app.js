import * as types from "../actionTypes/app";
import { appService } from "./../services/app";
import { isRequesting, isRequested, errorOccurred } from "./request";

export const menuFetched = (categories) => ({
  type: types.MenuFetched,
  payload: categories,
});

export const fetchMenu = () => async (dispatch) => {
  await dispatch(isRequesting());
  appService
    .fetchMenu()
    .then(async (result) => {
      await dispatch(isRequested());
      await dispatch(menuFetched(result.data.data.categories));
    })
    .catch((error) => {
      dispatch(errorOccurred());
    });
};
