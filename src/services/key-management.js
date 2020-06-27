import { encryption_key } from "../constants/constant";
import { utilService } from "./utils";

const get_aes_static_key = () => {
  return {
    raw: encryption_key.aes_static_key,
    utf8Byte: utilService.stringtoUtf8Byte(encryption_key.aes_static_key),
  };
};

const get_aes_static_iv = () => {
  return {
    raw: encryption_key.aes_static_iv,
  };
};

const get_aes_dynamic_key = () => {
  return {
    raw: encryption_key.aes_dynamic_key,
    utf8Byte: utilService.stringtoUtf8Byte(encryption_key.aes_dynamic_key),
  };
};

const get_tripledes_static_key = () => {
  return {
    raw: encryption_key.tripledes_static_key,
    hex: utilService.stringtoHex(encryption_key.tripledes_static_key),
  };
};

export const keyManagementService = {
  get_aes_static_key,
  get_aes_static_iv,
  get_aes_dynamic_key,
  get_tripledes_static_key,
};
