/** @jsx jsx */
import { jsx } from "@emotion/core";
import { colors } from "./../../constants/colors";
import { useTheme } from "emotion-theming";

export const SolidButton = ({ backgroundColor, color, border, children, className, onClick, type }) => {
  const theme = useTheme();
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
      css={{
        padding: "9px 7px !important",
        backgroundColor: `${backgroundColor ? backgroundColor : theme.primaryColor} !important`,
        color: `${color ? color : theme.gradient[2]} !important`,
        border: `1px solid ${border ? border : theme.primaryColor} !important`,
      }}
    >
      {children}
    </button>
  );
};

export const GradientButton = ({ children, className }) => {
  const theme = useTheme();
  return (
    <button
      className={className}
      css={{
        padding: "9px 7px !important",
        backgroundImage: `linear-gradient(to right, ${theme.primaryColor} 0%, ${theme.gradient[0]} 40%, ${theme.gradient[1]} 100%)`,
        color: `${theme.gradient[2]} !important`,
      }}
    >
      {children}
    </button>
  );
};

export const Line = ({ className }) => {
  const theme = useTheme();
  return (
    <div
      className={className}
      css={{
        width: "100%",
        height: "1px",
        backgroundColor: theme.primaryColor,
      }}
    ></div>
  );
};

export const Text = ({ className, children }) => {
  const theme = useTheme();
  return (
    <span
      className={className}
      css={{
        color: theme.textColor,
      }}
    >
      {children}
    </span>
  );
};

export const CircleIcon = ({ className, children }) => {
  const theme = useTheme();
  return (
    <div
      className={className}
      css={{
        color: theme.textColor,
        textAlign: "center",
        fontSize: "40px",
        border: `2px solid ${theme.textColor}`,
        borderRadius: "90px",
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
      }}
    >
      {children}
    </div>
  );
};

export const ThemeBackgroundColor = ({ className, backgroundColor, color, children }) => {
  const theme = useTheme();
  return (
    <div
      className={className}
      css={{
        backgroundColor: backgroundColor ? backgroundColor : theme.primaryColor,
        color: color,
      }}
    >
      {children}
    </div>
  );
};

export const SecondaryText = ({ className, children }) => {
  const theme = useTheme();
  return (
    <div
      className={className}
      css={{
        color: theme.secondaryTextColor,
        fontSize: "0.9rem",
      }}
    >
      {children}
    </div>
  );
};

export const ThemeColor = ({ className, children }) => {
  const theme = useTheme();
  return (
    <span
      className={className}
      css={{
        color: theme.primaryColor,
      }}
    >
      {children}
    </span>
  );
};

export const MenuItem = ({ className, children, active }) => {
  const theme = useTheme();
  return (
    <div
      className={className}
      css={{
        transition: "0.3s all",
        backgroundColor: active ? theme.primaryColor : "",
        color: active ? colors.white : colors.gray,
      }}
    >
      {children}
    </div>
  );
};

export const StyledTab = ({ className, active, children }) => {
  const theme = useTheme();
  return (
    <div
      className={className}
      css={{
        padding: "3px",
        transition: "0.3s all",
        color: active ? theme.primaryColor : colors.gray,
        borderBottom: active ? `2px solid ${theme.primaryColor}` : `2px solid ${colors.gray}`,
      }}
    >
      {children}
    </div>
  );
};

export const MenuTab = ({ className, active, children }) => {
  const theme = useTheme();
  return (
    <div
      className={className}
      css={{
        padding: "3px",
        transition: "0.3s all",
        maxHeight: "55px",
        color: active ? theme.primaryColor : colors.gray,
        borderBottom: 0,
      }}
    >
      {children}
    </div>
  );
};

export const ThemeBorder = ({ className, borderThick, borderStyle, borderRadius = 0, children }) => {
  const theme = useTheme();
  return (
    <div
      className={className}
      css={{
        border: `${borderThick}px ${borderStyle} ${theme.primaryColor}`,
        borderRadius: borderRadius,
      }}
    >
      {children}
    </div>
  );
};
