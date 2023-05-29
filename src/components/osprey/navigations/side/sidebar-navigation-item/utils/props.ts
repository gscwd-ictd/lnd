import React, { LiHTMLAttributes } from "react";

export type SidebarNavigationItemProps = Pick<LiHTMLAttributes<HTMLLIElement>, "children"> & {
  path: string;
  selected: boolean;
  tooltip: string;
  onSelect: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
};
