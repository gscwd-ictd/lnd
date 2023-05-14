import { Fragment, FunctionComponent, useContext } from "react";
import { sidebarItems } from "../../sidebar/constants/sidebar-items";
import { SidebarContext } from "../../sidebar/utils/contexts";
import { SidebarPanelItem } from "../../sidebar-panel-item/view/SidebarPanelItem";
import { SidebarPanelHeader } from "../../sidebar-panel-header/view/SidebarPanelHeader";
import { SidebarPanelFooter } from "../../sidebar-panel-footer/view/SidebarPanelFooter";

export const SidebarPanel: FunctionComponent = () => {
  const { activeNav } = useContext(SidebarContext);

  return (
    <div className="flex-1 bg-white">
      <div className="flex flex-col h-full">
        <SidebarPanelHeader title={sidebarItems[activeNav].header} subtitle={sidebarItems[activeNav].subheader} />

        <main className="flex-1 border-y">
          <ul className="space-y-1">
            {sidebarItems[activeNav].panelItems.map((item, index) => (
              <Fragment key={index}>
                <SidebarPanelItem label={item.label as string} path={item.path}>
                  {item.icon}
                </SidebarPanelItem>
              </Fragment>
            ))}
          </ul>
        </main>

        {/* <footer className="h-14">footer</footer> */}
        <SidebarPanelFooter />
      </div>
    </div>
  );
};
