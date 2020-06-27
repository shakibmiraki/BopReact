/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Print, NoPrint } from "react-easy-print";
import { Card } from "../../components/Form/material-card";

const Receipt = ({ children }) => {
  return (
    <NoPrint>
      <div className="receipt">
        <Print name="receipt-print" single>
          <Card>{children}</Card>
        </Print>
      </div>
    </NoPrint>
  );
};

export default Receipt;
