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
import BasicSignUp from "./../../components/Signup/basic";
import { Switch, Redirect, Route } from "react-router-dom";
import Activation from "./../../components/Signup/activation";
import { useSelector } from "react-redux";
import Activated from "./../../components/Signup/activated";
import { utilService } from "./../../services/utils";

const Schemas = [
  Yup.object().shape({
    mobile: Yup.string()
      .matches(mask.validation.mobile, "share.validation.bad_format")
      .required("share.mobile.validation.required"),
  }),
  Yup.object().shape({
    activation_code: Yup.string()
      .matches(mask.validation.activation_code, "share.validation.bad_format")
      .required("auth.activation_code.validation.required"),
  }),
];

const SignUp = () => {
  const { step } = useSelector((state) => state.auth);

  return (
    <div className="h-100 d-flex flex-column" css={css(styles)}>
      <div className="container">
        <SquaredBackground />
        <Header image back />
      </div>
      <Zoom duration={config.animationDuration}>
        <div className="d-flex flex-grow-1">
          <Formik
            initialValues={{
              mobile: "",
              activation_code: "",
              timer: utilService.getActivationSmsTimer(),
            }}
            validationSchema={Schemas[step]}
            onSubmit={(values, { resetForm }) => {}}
          >
            {() => (
              <Form className="d-flex flex-column flex-grow-1">
                <Switch>
                  <Redirect from={routes.root} exact to={routes.sign_up.base} />
                  <Route exact path={routes.sign_up.base} component={BasicSignUp} />
                  <Route path={`${routes.sign_up.base}${routes.sign_up.activation}`} component={Activation} />
                  <Route path={`${routes.sign_up.base}${routes.sign_up.activated}`} component={Activated} />
                </Switch>
              </Form>
            )}
          </Formik>
        </div>
      </Zoom>
    </div>
  );
};

export default SignUp;
