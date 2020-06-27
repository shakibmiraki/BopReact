/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useTranslation } from "react-i18next";
import { Header, StickyButton } from "../Share/lib";
import { routes } from "./../../constants/constant";
import history from "./../../services/history";
import { FaCheckCircle, FaAngleRight } from "react-icons/fa";
import { colors } from "../../constants/colors";
import { FaChevronRight } from "react-icons/fa";
import { images } from "../../constants/images";
import { SecondaryText } from "./../Share/styled-component";
import { ThemeBorder } from "./../Share/styled-component";

const styles = css({
  marginTop: "10%",
  ".flex-1": {
    flex: 1,
  },
  ".flex-4": {
    flex: 4,
  },
  ".flex-10": {
    flex: 10,
  },
});

const Activated = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex flex-column flex-grow-1" css={css(styles)}>
      <div className="container flex-grow-1">
        <div className="mb-4 text-center">
          <FaCheckCircle css={css({ fontSize: "40px", color: colors.green_tick })} />
        </div>
        <Header text={t("signup.activated.title.success_activated")} />

        <div className="mt-5">
          <div
            className="d-flex flex-row-reverse align-items-center"
            onClick={() => history.push(routes.representer.base)}
          >
            <div className="flex-1">
              <ThemeBorder borderThick={1} borderStyle="solid" borderRadius={10}>
                <img className="w-100 p-2" src={images.icons.team} alt="" />
              </ThemeBorder>
            </div>
            <div className="flex-4 d-flex flex-row-reverse align-items-center justify-content-center border-top p-2">
              <div className="p-2 flex-10">
                <div>
                  <Header
                    align="text-left"
                    text={t("signup.activated.representer.title.enter_representer_code")}
                    pt="pt-1"
                    pb="pb-1"
                  />
                </div>
                <div className="text-right">
                  <SecondaryText>
                    {t("signup.activated.representer.paragraph.enter_representer_code")}
                  </SecondaryText>
                </div>
              </div>
              <div className="flex-1 text-center">
                <FaAngleRight />
              </div>
            </div>
          </div>

          <div className="d-flex flex-row-reverse align-items-center" onClick={() => history.push(routes.profile)}>
            <div className="flex-1">
              <ThemeBorder borderThick={1} borderStyle="solid" borderRadius={10}>
                <img className="w-100 p-2" src={images.icons.profile} alt="" />
              </ThemeBorder>
            </div>
            <div className="flex-4 d-flex flex-row-reverse align-items-center justify-content-center border-top border-bottom p-2">
              <div className="p-2 flex-10">
                <div>
                  <Header
                    text={t("signup.activated.profile.title.complete_profile")}
                    align="text-left"
                    pt="pt-1"
                    pb="pb-1"
                  />
                </div>
                <div className="text-right">
                  <SecondaryText>{t("signup.activated.profile.paragraph.complete_profile")}</SecondaryText>
                </div>
              </div>
              <div className="flex-1 text-center">
                <FaAngleRight />
              </div>
            </div>
          </div>
        </div>
      </div>

      <StickyButton onClick={() => history.push(routes.home)}>
        <span>{t("share.button.home")}</span>
        <i>{<FaChevronRight />}</i>
      </StickyButton>
    </div>
  );
};

export default Activated;
