/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styles from "./index-style";
import { Header, SquaredBackground } from "../../components/Share/lib";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Zoom from "react-reveal/Zoom";
import { config } from "../../config";
import { mask } from "./../../constants/masks";
import { routes } from "./../../constants/constant";
import { Switch, Redirect, Route } from "react-router-dom";
import RepresenterBasic from "./../../components/Representer/basic";
import { useTranslation } from "react-i18next";
import RepresenterSubmitted from "./../../components/Representer/submitted";

const Schema = Yup.object().shape({
  mobile: Yup.string()
    .matches(mask.validation.mobile, "share.validation.bad_format")
    .required("share.mobile.validation.required"),
});
const Representer = () => {
  const { t } = useTranslation();

  return (
    <div className="h-100 d-flex flex-column" css={css(styles)}>
      <div className="container">
        <SquaredBackground />
        <Header text={t("representer.title.representer")} back />
      </div>
      <Zoom duration={config.animationDuration}>
        <div className="d-flex flex-grow-1">
          <Formik
            initialValues={{
              mobile: "",
            }}
            validationSchema={Schema}
            className="representer"
            onSubmit={(values, { resetForm }) => {}}
          >
            {() => (
              <Form className="d-flex flex-column flex-grow-1">
                <Switch>
                  <Redirect from={routes.root} exact to={routes.representer.base} />
                  <Route exact path={routes.representer.base} component={RepresenterBasic} />
                  <Route
                    path={`${routes.representer.base}${routes.representer.submitted}`}
                    component={RepresenterSubmitted}
                  />
                </Switch>
              </Form>
            )}
          </Formik>
        </div>
      </Zoom>
    </div>
  );
};

export default Representer;
