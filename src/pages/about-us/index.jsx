/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styles from "./index-style";
import { useTranslation } from "react-i18next";
import { Header, SquaredBackground, Paragraph } from "./../../components/Share/lib";
import Zoom from "react-reveal/Zoom";
import { config } from "../../config";
import { IoLogoInstagram, IoMdPaperPlane } from "react-icons/io";
import { Logo } from "./../../components/Share/lib";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="container" css={css(styles)}>
      <SquaredBackground />
      <Header text={t("about_us.title.about_us")} menu back />
      <Zoom duration={config.animationDuration}>
        <div className="about-us mt-5">
          <div className="row">
            <div className="col-12 logo">
              <Logo />
            </div>
          </div>
          <div className="row">
            <Paragraph text={t("about_us.copyright.paragraph")} />
          </div>

          <div className="row justify-content-center call-info p-2">
            <span className="text-secondary">تماس با ما</span>
            <span className="text-secondary"> : </span>
            <span>
              <a href="tel:1688">1688</a>
            </span>
          </div>

          <div className="row justify-content-center social-icon p-2">
            <IoLogoInstagram className="text-secondary" css={css({ fontSize: "28px" })} />

            <IoMdPaperPlane className="text-secondary" css={css({ fontSize: "28px" })} />
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default AboutUs;
