/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { useSelector } from "react-redux";
import { Calendar } from "react-modern-calendar-datepicker";
import { themeService } from "../../services/theme";
import { useFormikContext } from "formik";

const styles = css({
  ".Calendar": {
    margin: "auto",
  },
});

export const BopCalendar = ({ name }) => {
  const formik = useFormikContext();
  const field = formik.getFieldProps(name);
  const { locale } = useSelector((state) => state.language);
  const theme = themeService.getTheme();

  return (
    <div css={styles}>
      <div className="form-group">
        <Calendar
          name={name}
          value={field.value}
          onChange={(value) => {
            formik.setFieldValue(name, value);
          }}
          colorPrimary={theme.primaryColor}
          shouldHighlightWeekends
          locale={locale}
        />
      </div>
    </div>
  );
};
