/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useSelector } from "react-redux";
import { stack as Menu } from "react-burger-menu";
import styles from "./navigation-style";
import { useTranslation } from "react-i18next";
import { GoHome } from "react-icons/go";
import { MdPermContactCalendar } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { localeService } from "../../services/locale";
import { useEffect } from "react";
import { routes } from "../../constants/constant";
import { ProfileInfo } from "./profile-info";
import { MenuLink } from "./menu-link";
import { GiHamburgerMenu } from "react-icons/gi";
import { ThemeColor } from "./../Share/styled-component";
import { colors } from "./../../constants/colors";

export const Navigation = () => {
  const { t } = useTranslation();

  const { ltr } = useSelector((state) => state.language);

  useEffect(() => {}, []);

  return (
    <div css={css(styles)}>
      <div className={localeService.getLocaleClassName(ltr)}>
        <Menu
          disableAutoFocus
          width="100%"
          customBurgerIcon={
            <ThemeColor>
              <GiHamburgerMenu />
            </ThemeColor>
          }
          customCrossIcon={<AiOutlineClose color={colors.gray} />}
          {...(ltr ? { left: true } : { right: true })}
          noOverlay
        >
          <div className="overlay"></div>
          <ProfileInfo />
          <MenuLink
            to={routes.home}
            label={t("navigation.menu.title.home")}
            child={<GoHome className="icon-size" />}
          />

          <MenuLink
            to={routes.components}
            label={t("navigation.menu.title.components")}
            child={<BsPerson className="icon-size" />}
          />

          <MenuLink
            to={routes.sign_up.base}
            label={t("navigation.menu.title.signup")}
            child={<BsPerson className="icon-size" />}
          />

          <MenuLink
            to={routes.about_us}
            label={t("navigation.menu.title.about_us")}
            child={<MdPermContactCalendar className="icon-size" />}
          />
        </Menu>
      </div>
    </div>
  );
};
