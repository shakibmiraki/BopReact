/* eslint-disable react-hooks/exhaustive-deps */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useTranslation } from "react-i18next";
import { StickyButton } from "../../components/Share/lib";
import { MaskedInputWithError } from "../../components/Form/input";
import { useFormikContext } from "formik";
import { utilService } from "./../../services/utils";
import { mask } from "./../../constants/masks";
import { SecondaryText } from "./../Share/styled-component";
import { Header } from "./../Share/lib";
import { FaChevronRight } from "react-icons/fa";
import history from "./../../services/history";
import { routes } from "../../constants/constant";
import { FiPhone } from "react-icons/fi";
import { colors } from "./../../constants/colors";

const styles = css({
  marginTop: "30%",
});

const RepresenterBasic = () => {
  const { t } = useTranslation();

  const { submitForm, validateForm } = useFormikContext();

  return (
    <div className="d-flex flex-column flex-grow-1" css={css(styles)}>
      <div className="container flex-grow-1">
        <Header text={t("representer.basic.title.set_representer")} />
        <SecondaryText className="text-center p-2">
          {t("representer.paragraph.enter_representer_mobile")}
        </SecondaryText>

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
              history.push(`${routes.home}`);
            }
          });
        }}
      >
        <span>{t("share.button.save")}</span>
        <i>{<FaChevronRight />}</i>
      </StickyButton>
    </div>
  );
};

export default RepresenterBasic;
