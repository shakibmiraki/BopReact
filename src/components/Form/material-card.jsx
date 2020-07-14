/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Text } from "../Share/styled-component";
import { AiTwotonePrinter, AiOutlineShareAlt } from "react-icons/ai";

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
});



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
