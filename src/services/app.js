import { encryptService } from "./encrypt";
import { config } from "./../config";
import { api } from "./api";
import { utilService } from "./utils";
import { localeService } from "./locale";
import { keyManagementService } from "./key-management";
import { userService } from "./user";

const handleMenuResponse = (result) => {
  const aesKey = utilService.stringtoUtf8Byte(
    encryptService.rsaDecryptWithClientPrivateKey(result.data.meta.encryptKey)
  );

  encryptService.decryptRespone(result.data.data, aesKey, ["description", "title", "url", "versionName"]);

  result.data.data.categories.forEach((category) => {
    category.icons.forEach((icon) => {
      encryptService.decryptRespone(icon, aesKey, [
        "categoryId",
        "description",
        "download",
        "id",
        "imageURL",
        "isStatic",
        "scheme",
        "packageName",
      ]);
    });

    category.icons.forEach((icon) => {
      icon.names.forEach((name) => {
        encryptService.decryptRespone(name, aesKey, ["key", "value"]);
      });
      icon.titles.forEach((title) => {
        encryptService.decryptRespone(title, aesKey, ["key", "value"]);
      });
    });

    category.names.forEach((name) => {
      encryptService.decryptRespone(name, aesKey, ["key", "value"]);
    });

    category.titles.forEach((title) => {
      encryptService.decryptRespone(title, aesKey, ["key", "value"]);
    });
  });
};

const fetchMenu = () => {
  let request = {
    imei: encryptService.aesDynamicEncrypt(utilService.getUniqueId()),
    os: encryptService.aesDynamicEncrypt(utilService.getOSName()),
    device: encryptService.aesDynamicEncrypt(utilService.getBrowser()),
    ip: encryptService.aesDynamicEncrypt(utilService.getIpAddress()),
    lang: encryptService.aesDynamicEncrypt(localeService.getActiveLanguage()),
    ver: encryptService.aesDynamicEncrypt(config.app_version),
    phoneNumber: encryptService.aesStaticEncrypt(utilService.formatMobileWithPrefix(userService.getMobile())),
    invoice: encryptService.aesDynamicEncrypt(utilService.getRandomDigit()),
    encryptKey: encryptService.rsaEncryptWithServerPublicKey(keyManagementService.get_aes_dynamic_key().raw),
    sign: "",
    value: {
      versionName: encryptService.aesDynamicEncrypt(config.menu_version),
    },
  };
  console.log("fetchMenu-->");

  console.log(`${config.apiUrl}/GATEWAY/CONFIG/Icon/V1/GetIconsAsync`);
  console.log(JSON.stringify(request));
  return api
    .post(`${config.apiUrl}/GATEWAY/CONFIG/Icon/V1/GetIconsAsync`, request)
    .then(async (result) => {
      handleMenuResponse(result);
      return Promise.resolve(result);
    })
    .catch((error) => {
      utilService.handleError(error);
      return Promise.reject(error);
    });
};

export const appService = {
  fetchMenu,
};
