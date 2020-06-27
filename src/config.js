import { themes } from "./constants/theme";

export const config = {
  apiUrl: "http://172.16.66.11:5050/API/PUT",
  paymentUrl: "http://172.16.66.11:6060/API/MPG/GATEWAY",
  animationDuration: 500,
  defaultTheme: themes.maroon.name,
  os: {
    name: "PWA",
    value: "1",
  },
  app_version: "0.1",
  menu_version: "PutNewIOS-2",
  toast_auto_close: 6000,
};
