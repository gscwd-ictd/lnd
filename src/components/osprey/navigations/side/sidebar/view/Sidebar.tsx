"use client";

import { FunctionComponent, useEffect, useMemo, useState } from "react";
import { SidebarContext } from "../utils/contexts";
import { styles } from "../utils/styles";
import { SidebarNavigation } from "../../sidebar-navigation/view/SidebarNavigation";
import { SidebarPanel } from "../../sidebar-panel/view/SidebarPanel";
import { usePathname } from "next/navigation";
import { sidebarItems } from "../constants/sidebar-items";

export const Sidebar: FunctionComponent = () => {
  const [activeNav, setActiveNav] = useState(0);

  const pathname = usePathname();

  useEffect(() => {
    sidebarItems.forEach((item, index) => {
      item.panelItems.forEach((panelItem) => {
        if (panelItem.path === pathname) {
          setActiveNav(index);
        }
      });
    });
  }, [pathname]);

  return (
    <aside className={styles.sidebar()}>
      <SidebarContext.Provider value={{ activeNav, setActiveNav }}>
        <SidebarNavigation />
        <SidebarPanel />
      </SidebarContext.Provider>
    </aside>
  );
};
