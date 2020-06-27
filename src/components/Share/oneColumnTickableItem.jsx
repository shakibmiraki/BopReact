/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { SelectableItem } from "../Form/selectable-item";
import { Text, ThemeColor } from "./styled-component";
import { AiOutlineCheck } from "react-icons/ai";

const styles = css({});

export const OneColumnTickableItem = ({ text, active, onClick }) => {
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
        {renderCheckIcon()}
        <Text className="d-inline-block">{text}</Text>
      </SelectableItem>
    </div>
  );
};
