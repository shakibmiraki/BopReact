/* eslint-disable react-hooks/exhaustive-deps */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Field } from "formik";
import MaskedInput from "react-text-mask";
import { ErrorMessage } from "formik";
import { Text } from "../Share/styled-component";
import { mask } from "./../../constants/masks";
import createAutoCorrectedDatePipe from "text-mask-addons/dist/createAutoCorrectedDatePipe";
import { useTranslation } from "react-i18next";

export const InputWithError = ({ type, name, placeholder, className, autoComplete, icon }) => {
  const { t } = useTranslation();
  return (
    <div className="form-group position-relative">
      <Field
        className={`form-control shadow-sm rounded-pill ${className}
        ${icon ? "pl-5" : ""}
        `}
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
      {icon}
      <ErrorMessage name={name} render={(msg) => <div className="text-danger">{t(msg)}</div>} />
    </div>
  );
};

export const MaskedInputWithError = ({
  name,
  placeholder,
  placeholderChar,
  mask,
  guide = true,
  className,
  labelText,
  autoComplete,
  icon,
}) => {
  const { t } = useTranslation();

  return (
    <div className="form-group position-relative">
      {labelText ? (
        <label htmlFor={`${name}`}>
          <Text>{labelText}</Text>
        </label>
      ) : null}
      <Field name={`${name}`}>
        {({ field }) => (
          <MaskedInput
            css={css({ direction: "ltr" })}
            className={`form-control shadow-sm rounded-pill ${className}
            ${icon ? "pl-5" : ""}
            `}
            placeholder={placeholder}
            mask={mask}
            placeholderChar={placeholderChar}
            guide={guide}
            autoComplete={autoComplete}
            {...field}
          />
        )}
      </Field>
      {icon}
      <ErrorMessage name={name} render={(msg) => <div className="text-danger">{t(msg)}</div>} />
    </div>
  );
};

export const MaskedCurrencyWithError = ({ name, placeholder, guide = true, className, labelText }) => {
  const { t } = useTranslation();

  return (
    <div className="form-group">
      {labelText ? (
        <label htmlFor={`${name}`}>
          <Text>{labelText}</Text>
        </label>
      ) : null}
      <Field name={`${name}`}>
        {({ field }) => (
          <MaskedInput
            className={`form-control shadow-sm rounded-pill ${className}`}
            placeholder={placeholder}
            mask={mask.currencyMask}
            placeholderChar="-"
            autoComplete="off"
            guide={guide}
            {...field}
          />
        )}
      </Field>
      <ErrorMessage name={name} render={(msg) => <div className="text-danger">{t(msg)}</div>} />
    </div>
  );
};

export const MaskedExpireDateWithError = ({
  name,
  placeholder,
  guide = true,
  className,
  labelText,
  autoComplete,
}) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="form-group">
        {labelText ? (
          <label htmlFor={`${name}`}>
            <Text>{labelText}</Text>
          </label>
        ) : null}
        <Field name={`${name}`}>
          {({ field }) => (
            <MaskedInput
              className={`form-control shadow-sm rounded-pill ${className}`}
              placeholder={placeholder}
              mask={mask.expire_date}
              pipe={createAutoCorrectedDatePipe("yy/mm")}
              placeholderChar="-"
              guide={guide}
              autoComplete={autoComplete}
              {...field}
            />
          )}
        </Field>
      </div>
      <ErrorMessage name={name} render={(msg) => <div className="text-danger">{t(msg)}</div>} />
    </div>
  );
};
