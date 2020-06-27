/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FaSpinner } from "react-icons/fa";
import { SolidButton, Text, Line } from "./styled-component";
import { keyframes } from "@emotion/core";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Navigation } from "./../Menu/navigation";
import { ThemeColor } from "./styled-component";
import history from "./../../services/history";
import { useSelector } from "react-redux";
import { GrReactjs } from "react-icons/gr";

export const Spinner = (props) => {
  return (
    <FaSpinner
      css={{
        animation: `${keyframes({
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        })} 1s linear infinite`,
      }}
      aria-label="loading"
      {...props}
    />
  );
};

export const FullPageSpinner = () => {
  const { isRequesting } = useSelector((state) => state.request);

  return (
    <div
      css={{
        position: "fixed",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        fontSize: "3rem",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#00000038",
        opacity: isRequesting ? 1 : 0,
        zIndex: isRequesting ? 0 : -1,
      }}
    >
      <div css={{ alignSelf: "center", color: "#3e3e3e" }}>
        <Spinner />
      </div>
    </div>
  );
};

export const TextDirection = ({ children, className, reverse }) => {
  const { ltr } = useSelector((state) => state.language);
  let classes = "";
  if (reverse) {
    classes = ltr ? "text-right" : "text-left";
  } else {
    classes = ltr ? "text-left" : "text-right";
  }

  return <div className={`${className ? className : ""} ${classes}`}>{children}</div>;
};

export const Back = () => {
  return (
    <span
      css={css({ position: "fixed", left: "10px", top: "9px", fontSize: "27px" })}
      onClick={() => {
        history.goBack();
      }}
    >
      <ThemeColor>
        <IoMdArrowRoundBack />
      </ThemeColor>
    </span>
  );
};

export const Logo = () => {
  return (
    <div className="text-center pb-3 pt-3">
      <ThemeColor>
        <GrReactjs fontSize="1.5rem" />
      </ThemeColor>
    </div>
  );
};

export const Header = ({ image, menu, back, text, pt = "pt-3", pb = "pb-3", align = "text-center" }) => {
  return (
    <div>
      {menu ? <Navigation /> : null}
      {image ? <Logo /> : null}
      {text ? (
        <div className={`${align} ${pt} ${pb} font-weight-bold`}>
          <Text>{text}</Text>
        </div>
      ) : null}
      {back ? <Back /> : null}
    </div>
  );
};

export const CoverImage = ({ url }) => {
  return (
    <div>
      <img
        css={css({
          height: "325px",
          width: "100%",
          zIndex: "-1",
          left: 0,
          right: 0,
          top: 0,
          position: "relative",
        })}
        src={url}
        alt=""
      />
    </div>
  );
};

export const Paragraph = ({ text }) => {
  return (
    <div className="text-center text-secondary">
      <p css={{ fontSize: "13px", lineHeight: "20px", padding: "0px 20px" }}>{text}</p>
    </div>
  );
};

export const Button = ({ type, text, onClick, icon }) => {
  return (
    <div>
      <SolidButton type={type} onClick={onClick} className={`btn btn-block rounded-pill`}>
        <span>{text}</span>
        <i css={css({ float: "right" })}>{icon}</i>
      </SolidButton>
    </div>
  );
};

export const StickyButton = ({ type, children, onClick, bottom, backgroundColor, color, border }) => {
  return (
    <div className="sticky-btn" css={css({ marginBottom: "20px" })}>
      <Line className="line" css={css({ position: "relative", top: "23px", zIndex: "-1" })} />
      <SolidButton
        type={type}
        onClick={onClick}
        className={`btn btn-block`}
        css={css({
          maxWidth: "120px",
          borderTopLeftRadius: "30px",
          borderBottomLeftRadius: "30px",
          borderTopRightRadius: "0",
          borderBottomRightRadius: "0",
          float: "right",
        })}
        backgroundColor={backgroundColor}
        color={color}
        border={border}
      >
        {children}
      </SolidButton>
    </div>
  );
};

export const SquaredBackground = ({ rows = 10, columns = 22, color = "#efefef" }) => {
  let skewX = 0;
  let skewY = 0;
  return (
    <div
      className="fluid-container square-background"
      style={{
        position: "absolute",
        height: "65%",
        top: 0,
        right: 0,
        left: 0,
        overflow: "hidden",
        width: "100%",
        zIndex: "-1",
      }}
    >
      {Array.apply(0, Array(rows)).map(function (x, i) {
        let base = 50;
        let xValue = (base - columns) * 0.1;
        let yValue = (base - columns) * 0.2;
        skewX = skewX - xValue;
        skewY = skewY - yValue;
        let columnWidth = `${100 / columns}%`;
        return (
          <div className="row" key={i}>
            {Array.apply(0, Array(columns)).map(function (x, i) {
              return (
                <div
                  key={i}
                  style={{
                    width: columnWidth,
                    height: "25px",
                    padding: "1px",
                    float: "right",
                    transform: `skew(${skewX}deg, ${skewY}deg)`,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: color,
                      width: "100%",
                      height: "100%",
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export const CardBackgroundPattern = ({ rows, columns, color = "#b7b7b7" }) => {
  return (
    <div className="container" style={{ position: "absolute", top: 0, right: 0 }}>
      {Array.apply(0, Array(rows)).map(function (x, i) {
        let skewX = 0;
        let skewY = 0;
        let base = 50;
        let xValue = (base - columns) * 0.12;
        let yValue = (base - columns) * 0.07;
        return (
          <div className="row" key={i}>
            {Array.apply(0, Array(columns)).map(function (x, i) {
              skewX = skewX - xValue;
              skewY = skewY - yValue;
              return (
                <div
                  key={i}
                  style={{
                    width: "15px",
                    height: "15px",
                    backgroundColor: color,
                    float: "right",
                    margin: "1px",
                    transform: `skew(${skewX}deg, ${skewY}deg)`,
                  }}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
