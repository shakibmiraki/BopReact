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

const BillServices = () => {
  const { t } = useTranslation();

  return (
    <div css={css(styles)}>
      <CoverImage url={images.cover.bill_services} />
      <Header menu back />
      <div className="container">
      <Zoom duration={config.animationDuration}>
          <Header text={t("bill_services.title.bill_services")} />

          <div className="row">
            <MenuCircle
              url="/mobile-bill"
              text={t("share.menu.title.mobile_bill")}
              icon={<img src={images.icons.topup} alt="mobile bill icon" />}
            />

            <MenuCircle
              url="/phone-bill"
              text={t("share.menu.title.phone_bill")}
              icon={<img src={images.icons.internet_package} alt="phone bill icon" />}
            />
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default BillServices;
