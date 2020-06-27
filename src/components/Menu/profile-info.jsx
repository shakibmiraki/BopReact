/* eslint-disable react-hooks/exhaustive-deps */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { images } from "../../constants/images";
import React from "react";
import { colors } from "../../constants/colors";
import { Dashed } from "./../Form/dashed";
import { TextDirection } from "./../Share/lib";

const styles = css({
  img: {
    maxWidth: "85px",
  },
  padding: "10px 0",
  h6: {
    color: colors.gray,
  },
});

export const ProfileInfo = React.memo(() => {
  return (
    <div css={css(styles)}>
      <div className="profile-info">
        <div className="media position-relative align-items-center">
          <img className="rounded-circle mr-3 ml-3 border bg-white" src={images.avatar} alt="..." />

          <TextDirection>
            <div className="media-body">
              <h6 className="mt-0">شکیب میرکی</h6>
            </div>
          </TextDirection>
        </div>
      </div>
      <div className="p-3">
        <Dashed borderThick={1} />
      </div>
    </div>
  );
});
