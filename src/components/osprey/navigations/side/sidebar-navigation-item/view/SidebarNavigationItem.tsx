"use client";

import { FunctionComponent } from "react";
import { SidebarNavigationItemProps } from "../utils/props";
import { styles } from "../utils/styles";
import * as Tooltip from "@radix-ui/react-tooltip";
import Link from "next/link";

export const SidebarNavigationItem: FunctionComponent<SidebarNavigationItemProps> = ({
  selected,
  path,
  tooltip,
  children,
  onSelect,
}) => {
  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Link role="button" href={path} className={styles.navItem(selected)} onClick={(e) => onSelect(e)}>
            {children}
          </Link>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            side="right"
            sideOffset={0}
            className="bg-zinc-800 text-zinc-200 p-2 rounded-lg font-semibold text-xs"
          >
            {tooltip}
            <Tooltip.Arrow className="fill-zinc-800" width={13} height={8} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
