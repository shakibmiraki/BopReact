import { css } from "@emotion/core";

const styles = css({
  margin: "auto",

  ".image-size": {
    padding: "18px",
    margin: "auto",
    width: "80px",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ".image-size img": {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  a: {
    ":hover": {
      textDecoration: "none",
    },
  },
  "a span": {
    padding: "6px 0px",
    fontSize: "0.9rem",
    fontWeight: "500",
  },
});

export default styles;
