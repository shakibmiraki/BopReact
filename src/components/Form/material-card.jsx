/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Text } from "../Share/styled-component";
// import { images } from "./../../constants/images";
import { AiTwotonePrinter, AiOutlineShareAlt } from "react-icons/ai";
import domtoimage from "dom-to-image";

const styles = css({
  maxWidth: "375px",
  margin: "auto",
  ".icon span": {
    fontSize: "25px",
    margin: "5px",
    cursor: "pointer",
  },
  ".label": {
    fontSize: "14px",
  },
  // ".watermark": {
  //   width: "100%",
  //   height: "100%",
  //   padding: "50% 21%",
  //   position: "absolute",
  //   opacity: "0.1",
  //   display: "none",
  // },
});

const _toImage = () => {
  let node = document.getElementById("share-as-image");

  domtoimage
    .toPng(node)
    .then(function (dataUrl) {
      // console.log(dataUrl);
      // console.log(navigator.share);
      if (navigator.share) {
        navigator
          .share({
            title: "رسید",
            text: "رسید ایران کیش",
            url: dataUrl,
            mimeType: "image/png",
          })
          .then(
            () => {},
            (error) => {
              console.log("Error sharing:", error);
            }
          );
      } else {
        console.log(`Your system doesn't support sharing files.`);
      }
    })
    .catch(function (error) {
      console.error("oops, something went wrong!", error);
    });
};

export const Card = ({ children }) => {
  return (
    <div css={styles} id="share-as-image">
      <div className="card shadow-sm">
        <div className="card-body">
          {children}
          <div className="icon text-center">
            <Text>
              <AiOutlineShareAlt onClick={() => _toImage()} />
            </Text>
            <Text>
              <AiTwotonePrinter onClick={() => window.print()} />
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
