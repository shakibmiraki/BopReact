import { api } from "./api";
import { config } from "./../config";
import { utilService } from "./utils";
import { storage_key } from "../constants/constant";
import { localStorageService } from "./localStorage";

function activate(model) {
  let request = {
    activationCode: "",
  };

  return api
    .post(`${config.apiUrl}/activate`, request)
    .then(async (result) => {
      return Promise.resolve(result);
    })
    .catch((error) => {
      utilService.handleError(error);
      return Promise.reject(error);
    });
}

function setSignedUp() {
  localStorageService.setKey(storage_key.user_signed_up, true);
  return Promise.resolve();
}
function getSignedUp() {
  return localStorageService.getKey(storage_key.user_signed_up);
}

export const authService = {
  activate,
  setSignedUp,
  getSignedUp,
};
