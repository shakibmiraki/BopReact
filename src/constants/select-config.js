import { localeService } from "../services/locale";
import { themeService } from "../services/theme";

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: "12px",
    minHeight: "44px",
    flexDirection: localeService.isLTR() ? "row" : "row-reverse",
  }),
  menu: (provided) => ({ ...provided, overflow: "hidden", padding: 0 }),
  menuList: (provided) => ({ ...provided, padding: 0, lineHeight: "17px", fontSize: "14px", textAlign: "center" }),
  singleValue: (provided) => ({ ...provided, fontSize: "13px" }),
  indicatorSeparator: (provided) => ({}),
  indicatorsContainer: (provided) => ({}),
  dropdownIndicator: (provided) => ({ ...provided, color: themeService.getTheme().primaryColor }),
};
export const selectConfig = {
  customStyles
}