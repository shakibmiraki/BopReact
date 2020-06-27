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

const BankServices = () => {
  const { t } = useTranslation();

  return (
    <div css={css(styles)}>
      <CoverImage url={images.cover.bank_services} />
      <Header menu back />
      <div className="container">
        <Zoom duration={config.animationDuration}>
          <Header text={t("bank_services.title.bank_services")} />

          <div className="row">
            <MenuCircle
              url="/transfer"
              text={t("share.menu.title.transfer")}
              icon={<img src={images.icons.transfer} alt="put transfer icon" />}
            />
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default BankServices;
