/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styles from "./index-style";
import { useTranslation } from "react-i18next";
import { Header, SquaredBackground } from "./../../components/Share/lib";
import { MenuCircle } from "../../components/Menu/menu-circle";
import Zoom from "react-reveal/Zoom";
import { config } from "../../config";
import { images } from "./../../constants/images";
import { TabNavigation } from "./../../components/Menu/tab-navigation";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div css={css(styles)}>
      <div className="container">
        <SquaredBackground />
        <Header image menu />
        <div className="home">
          <Zoom duration={config.animationDuration}>
            <Header text={t("home.menu.header.popular_service")} gray />
            <div className="row">
              <MenuCircle
                url="/transfer"
                text={t("share.menu.title.transfer")}
                icon={<img src={images.icons.transfer} alt="put transfer icon" />}
              />

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

          <Zoom duration={config.animationDuration}>
            <Header text={t("home.menu.header.service")} gray />
            <div className="row">
              <MenuCircle
                url="/bank-services"
                text={t("share.menu.title.bank_service")}
                icon={<img src={images.icons.bank_services} alt="put bank service icon" />}
              />
              <MenuCircle
                url="/mobile-services"
                text={t("share.menu.title.mobile_service")}
                icon={<img src={images.icons.mobile_services} alt="put mobile service icon" />}
              />
              <MenuCircle
                url="/car-services"
                text={t("share.menu.title.car_service")}
                icon={<img src={images.icons.car_services} alt="put car service icon" />}
              />
              <MenuCircle
                url="/bill-services"
                text={t("share.menu.title.bill")}
                icon={<img src={images.icons.bills} alt="put bill icon" />}
              />
              <MenuCircle
                url="/noun_customer"
                text={t("share.menu.title.noun_customer")}
                icon={<img src={images.icons.non_customer_services} alt="put noun_customer icon" />}
              />
              <MenuCircle
                url="/nikokari"
                text={t("share.menu.title.charity")}
                icon={<img src={images.icons.charity} alt="put nikokari icon" />}
              />
            </div>
          </Zoom>

          <TabNavigation />
        </div>
      </div>
    </div>
  );
};

export default Home;
