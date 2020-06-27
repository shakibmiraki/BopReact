/* eslint-disable no-control-regex */
import "clientjs";
import { toastService } from "./toast";
import i18next from "i18next";
import { config } from "./../config";
const aesjs = require("aes-js");

const generic_message = () => {
  return i18next.t("share.error.network_access_error");
};

const formatActivationCode = (date) => {
  return date.replace(/[ ]/g, "");
};
const formatNumber = (number) => {
  return number.replace(/٬/g, "");
};

const getOSName = () => {
  // let client = new ClientJS();
  // return client.getOS().name;
  return config.os.value;
};

const getUniqueId = () => {
  // eslint-disable-next-line no-undef
  let client = new ClientJS();
  return client.getFingerprint();
};

const getBrowser = () => {
  // eslint-disable-next-line no-undef
  let client = new ClientJS();
  return client.getBrowser();
};

const getIpAddress = () => {
  return "192.168.0.1";
};

const getRandomDigit = () => {
  return Date.now();
};

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const handleError = (error) => {
  console.log(error);
  console.log(error.response);
  if (!error || !error.response || !error.response.data) {
    toastService.notify(generic_message());
  } else {
    toastService.notify(error.response.data.meta.message);
  }
};

const stringtoUtf8Byte = (value) => {
  return aesjs.utils.utf8.toBytes(value);
};

const stringtoHex = (value) => {
  return Buffer.from(value, "hex");
};

const getOtpTimer = () => {
  return Date.now() + 120000;
};

const getActivationSmsTimer = () => {
  return Date.now() + 60000;
};

export const utilService = {
  formatActivationCode,
  formatNumber,
  getOSName,
  getUniqueId,
  getBrowser,
  getIpAddress,
  getRandomDigit,
  isEmpty,
  handleError,
  stringtoUtf8Byte,
  stringtoHex,
  getOtpTimer,
  getActivationSmsTimer,
};
