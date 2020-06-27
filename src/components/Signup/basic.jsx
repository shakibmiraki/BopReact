/* eslint-disable react-hooks/exhaustive-deps */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useTranslation } from "react-i18next";
import { StickyButton } from "../../components/Share/lib";
import { MaskedInputWithError } from "../../components/Form/input";
import { useDispatch } from "react-redux";
import { useFormikContext } from "formik";
import { utilService } from "./../../services/utils";
import { userService } from "./../../services/user";
import { useEffect } from "react";
import { setStep } from "./../../actions/auth";
import { signup_steps } from "./../../models/steps/signup";
import history from "./../../services/history";
import { FiPhone } from "react-icons/fi";
import { mask } from "./../../constants/masks";
import { SecondaryText } from "./../Share/styled-component";
import { Header } from "./../Share/lib";
import { FaChevronRight } from "react-icons/fa";
import { colors } from "../../constants/colors";
import { routes } from "../../constants/constant";

const styles = css({
  marginTop: "30%",
});

const BasicSignUp = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { values, submitForm, validateForm } = useFormikContext();

  useEffect(() => {
    dispatch(setStep(signup_steps.basic));
  }, [history.location.pathname]);

  return (
    <div className="d-flex flex-column flex-grow-1" css={css(styles)}>
      <div className="container flex-grow-1">
        <Header text={t("share.message.welcome")} />
        <SecondaryText className="text-center p-2">{t("signup.title.enter_mobile_number")}</SecondaryText>

        <MaskedInputWithError
          className="text-left"
          name="mobile"
          placeholder={t("share.placeholder.mobile")}
          autoComplete="off"
          mask={mask.mobile}
          icon={<FiPhone className="left-addon" color={colors.gray_light_2} />}
        />
      </div>
      <StickyButton
        type="button"
        onClick={() => {
          validateForm().then((errors) => {
            submitForm();
            if (utilService.isEmpty(errors)) {
              userService.setMobile(values.mobile);
              history.push(`${routes.sign_up.base}${routes.sign_up.activation}`);
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

export default BasicSignUp;
