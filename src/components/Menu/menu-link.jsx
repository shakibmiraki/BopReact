/** @jsx jsx */
import { jsx } from "@emotion/core";
import { NavLink, useRouteMatch } from "react-router-dom";
import { MenuItem } from "../Share/styled-component";

export const MenuLink = ({ label, to, activeOnlyWhenExact, child, onClick }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <NavLink onClick={onClick} to={to} className="d-block bm-item menu-item">
      <MenuItem className="menu-wrap" {...(match ? { active: true } : { active: false })}>
        <span className="p-2 d-inline-block">{child}</span>
        {label}
      </MenuItem>
    </NavLink>
  );
};
