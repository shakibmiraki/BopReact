/* eslint-disable react-hooks/exhaustive-deps */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useTranslation } from "react-i18next";
import { Header, CoverImage } from "../../components/Share/lib";
import Zoom from "react-reveal/Zoom";
import { config } from "../../config";
import { images } from "../../constants/images";
import { MenuCircle } from "./../Menu/menu-circle";

const styles = css({});

const MobileServices = () => {
  const { t } = useTranslation();

  return (
    <div css={css(styles)}>
      <CoverImage url={images.cover.mobile_services} />
      <Header menu back />
      <div className="container">
        <Zoom duration={config.animationDuration}>
          <Header text={t("mobile_services.title.mobile_services")} />

          <div className="row">
            <MenuCircle
              url="/topup"
              text={t("share.menu.title.topup")}
              icon={<img src={images.icons.topup} alt="put topup icon" />}
            />

            <MenuCircle
              url="/internet-topup"
              text={t("share.menu.title.internet_topup")}
              icon={<img src={images.icons.internet_package} alt="put internet topup icon" />}
            />
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default MobileServices;
