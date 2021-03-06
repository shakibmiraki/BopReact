/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { SelectableItem } from "../Form/selectable-item";
import { Text, ThemeColor, SecondaryText } from "./styled-component";
import { AiOutlineCheck } from "react-icons/ai";

const styles = css({});

export const TwoColumnTickableItem = ({ firstText, secondText, active, onClick }) => {
  const renderCheckIcon = () => {
    const display = active ? "d-inline" : "d-none";
    return (
      <ThemeColor className={`${display} ml-1 mr-1`}>
        <AiOutlineCheck />
      </ThemeColor>
    );
  };

  return (
    <div css={styles}>
      <SelectableItem padding="p-2" rounded active={active} onClick={onClick}>
        <div className="d-flex flex-row p-2">
          <div className="m-1 item-name">
            <SecondaryText className="flex info">{firstText}</SecondaryText>
          </div>
          <div className="m-1 item-price">
            <Text className="flex">{secondText}</Text>
          </div>
          <div className="m-1 item-icon">{renderCheckIcon()}</div>
        </div>
      </SelectableItem>
    </div>
  );
};
