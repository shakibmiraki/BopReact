import { localStorageService } from "./localStorage";
import { storage_key } from "../constants/constant";

function setMobile(mobile) {
  localStorageService.setKey(storage_key.mobile, mobile);
  return Promise.resolve();
}

function getMobile() {
  return localStorageService.getKey(storage_key.mobile);
}

function setRepresenterMobile(representer_mobile) {
  localStorageService.setKey(storage_key.representer_mobile, representer_mobile);
  return Promise.resolve();
}

function getRepresenterMobile() {
  return localStorageService.getKey(storage_key.representer_mobile);
}

export const userService = {
  setMobile,
  getMobile,
  setRepresenterMobile,
  getRepresenterMobile,
};
