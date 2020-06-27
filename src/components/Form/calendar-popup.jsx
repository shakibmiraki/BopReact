/** @jsx jsx */
import { jsx } from "@emotion/core";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import ReactModal from "react-modal";
import { popupConfig } from "../../constants/popup-config";
import { useFormikContext } from "formik";

export const BopPopup = ({ name, children }) => {
  ReactModal.setAppElement("#root");
  const formik = useFormikContext();
  const field = formik.getFieldProps(name);

  return (
    <div className="form-group">
      <ReactModal
        isOpen={field.value}
        contentLabel="Popup"
        onRequestClose={() => formik.setFieldValue(name, false)}
        style={popupConfig.customStyles}
      >
        {children}
      </ReactModal>
    </div>
  );
};
