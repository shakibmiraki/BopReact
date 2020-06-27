/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useTranslation } from "react-i18next";
import { Header, StickyButton } from "../Share/lib";
import { routes } from "./../../constants/constant";
import history from "./../../services/history";
import { FaCheckCircle } from "react-icons/fa";
import { colors } from "../../constants/colors";
import { FaChevronRight } from "react-icons/fa";

const styles = css({
  marginTop: "30%",
});

const RepresenterSubmitted = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex flex-column flex-grow-1" css={css(styles)}>
      <div className="container flex-grow-1">
        <Header text={t("representer.submitted.title.submitted_successfully")} />
        <div className="mt-4 mb-4 text-center">
          <FaCheckCircle css={css({ fontSize: "40px", color: colors.green_tick })} />
        </div>
      </div>

      <StickyButton onClick={() => history.push(routes.home)}>
        <span>{t("share.button.home")}</span>
        <i>{<FaChevronRight />}</i>
      </StickyButton>
    </div>
  );
};

export default RepresenterSubmitted;
