/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styles from "./index-style";
import { LanguageSelector } from "../../components/LanguageSelector";
import { ThemeSelector } from "./../../components/ThemeSelector/index";
import { useTranslation } from "react-i18next";
import { StickyButton, SquaredBackground, Header } from "./../../components/Share/lib";
import Zoom from "react-reveal/Zoom";
import { config } from "../../config";
import { routes } from "./../../constants/constant";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { localeService } from "./../../services/locale";
import { themeService } from "../../services/theme";
import history from "./../../services/history";
import { FaChevronRight } from "react-icons/fa";

const Schema = Yup.object().shape({});

const Language = () => {
  const { t } = useTranslation();

  return (
    <div className="container h-100" css={css(styles)}>
      <SquaredBackground />
      <Header image />
      <Zoom duration={config.animationDuration}>
        <div className="form-wrapper">
          <Formik
            initialValues={{}}
            validationSchema={Schema}
            onSubmit={(values) => {
              //set init language
              localeService.setLanguageInitialized();
              //set init theme
              themeService.setThemeInitialized();
              history.push(routes.sign_up.base);
            }}
          >
            {() => (
              <Form>
                <Header text={t("language.title.choose_theme_and_language")} />
                <LanguageSelector />
                <div className="mt-5">
                  <ThemeSelector />
                </div>
                <StickyButton type="submit" bottom="0">
                  <span>{t("share.button.continue")}</span>
                  <i>{<FaChevronRight />}</i>
                </StickyButton>
              </Form>
            )}
          </Formik>
        </div>
      </Zoom>
    </div>
  );
};

export default Language;
