/* eslint-disable react-hooks/exhaustive-deps */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useTranslation } from "react-i18next";
import { StickyButton, TextDirection, Header } from "../Share/lib";
import { MaskedInputWithError } from "../Form/input";
import { useDispatch } from "react-redux";
import { useFormikContext } from "formik";
import { utilService } from "./../../services/utils";
import { useEffect, useState } from "react";
import { setStep } from "./../../actions/auth";
import { signup_steps } from "./../../models/steps/signup";
import history from "./../../services/history";
import { SecondaryText } from "./../Share/styled-component";
import { mask } from "./../../constants/masks";
import { FaChevronRight } from "react-icons/fa";
import Countdown, { zeroPad } from "react-countdown";
import { routes } from "../../constants/constant";

const styles = css({
  marginTop: "30%",
  "input:-moz-placeholder": {
    textAlign: "center !important",
  },
  "input:-ms-input-placeholder": {
    textAlign: "center !important",
  },
  "input::-webkit-input-placeholder": {
    textAlign: "center !important",
  },

  ".font-smaller": {
    fontSize: "0.8rem",
  },
});

const Activation = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [showResendSms, setShowResendSms] = useState();
  const { values, submitForm, validateForm, setFieldValue } = useFormikContext();

  const renderer = ({ seconds }) => {
    return (
      <span className="text-left font-smaller">
        {`${t("signup.title.activation.resend_code")} (${zeroPad(seconds)} ${t(
          "signup.title.activation.second"
        )})`}
      </span>
    );
  };

  useEffect(() => {
    setFieldValue("timer", utilService.getActivationSmsTimer());
    dispatch(setStep(signup_steps.activation));
  }, [history.location.pathname]);

  return (
    <div className="d-flex flex-column flex-grow-1" css={css(styles)}>
      <div className="container flex-grow-1">
        <Header text={t("signup.title.activation.activation_code")} />
        <SecondaryText className="text-center p-2">
          {t("signup.title.activation.enter_activation_code")}
        </SecondaryText>

        <MaskedInputWithError
          className="text-center"
          name="activation_code"
          autoComplete="off"
          placeholder={t("share.placeholder.activation_code")}
          mask={mask.activation_code}
        />
        <div className="row text-secondary font-smaller">
          <TextDirection className="col-6">{t("signup.activation.sms.not_received")}</TextDirection>
          <TextDirection className="col-6" reverse>
            {showResendSms ? (
              <div
                className="text-info"
                onClick={() => {
                  setShowResendSms(false);
                  setFieldValue("timer", utilService.getActivationSmsTimer());
                }}
              >
                {t("signup.title.activation.resend_code_again")}
              </div>
            ) : (
              <Countdown
                autoStart={true}
                date={values.timer}
                onStart={() => setShowResendSms(false)}
                onComplete={() => setShowResendSms(true)}
                renderer={renderer}
              ></Countdown>
            )}
          </TextDirection>
        </div>
      </div>
      <StickyButton
        type="button"
        onClick={() => {
          validateForm().then((errors) => {
            submitForm();
            if (utilService.isEmpty(errors)) {
              history.push(`${routes.sign_up.base}${routes.sign_up.activated}`);
            }
          });
        }}
      >
        <span>{t("share.button.continue")}</span>
        <i>{<FaChevronRight />}</i>
      </StickyButton>
    </div>
  );
};

export default Activation;
