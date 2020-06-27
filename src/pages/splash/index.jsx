/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useEffect } from "react";
import styles from "./index-style";
import { routes } from "./../../constants/constant";
import { localeService } from "./../../services/locale";
import { authService } from "./../../services/auth";
import history from "./../../services/history";
import Zoom from "react-reveal/Zoom";
import { SquaredBackground, Logo } from "../../components/Share/lib";
import { config } from "../../config";

const navigate = () => {
  setTimeout(() => {
    if (localeService.getLanguageInitialized()) {
      if (authService.getSignedUp()) {
        history.push(routes.home);
      } else {
        history.push(routes.sign_up.base);
      }
    } else {
      history.push(routes.language);
    }
  }, 700);
};

const Splash = () => {
  useEffect(() => navigate());

  return (
    <div className="container" css={css(styles)}>
      <SquaredBackground />
      <Zoom duration={config.animationDuration}>
        <Logo />
      </Zoom>
    </div>
  );
};

export default Splash;
