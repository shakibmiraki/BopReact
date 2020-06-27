/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styles from "./index-style";
import { NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Header } from "./../../components/Share/lib";
import { Text, ThemeBackgroundColor } from "../../components/Share/styled-component";
import { colors } from "../../constants/colors";

const NotFound = () => {
  return (
    <div css={css(styles)}>
      <div className="container">
        <Header image menu back />
        <div className="error-holder">
          <ThemeBackgroundColor color={colors.white} className="box">
            <p className="error-type">
              <Fade bottom cascade>
                <span>4</span>
                <span>0</span>
                <span>4</span>
              </Fade>
            </p>
          </ThemeBackgroundColor>

          <Fade bottom>
            <Text className="error-text">یافت نشد!</Text>
          </Fade>
          <Fade bottom>
            <p className="error-recommendation">
              تمایلی به بازگشت به{" "}
              <NavLink to="/home">
                <Text>صفحه اصلی</Text>
              </NavLink>{" "}
              دارید ؟
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
