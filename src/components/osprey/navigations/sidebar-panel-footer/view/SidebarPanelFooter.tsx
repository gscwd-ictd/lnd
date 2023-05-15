import { Avatar } from "@lms/components/osprey/ui/avatar/view/Avatar";
import { FunctionComponent } from "react";
import { SidebarPanelFooterProps } from "../utils/props";

export const SidebarPanelFooter: FunctionComponent<SidebarPanelFooterProps> = ({ photoUrl, name, email }) => {
  return (
    <footer className="flex items-center gap-2 p-2 bg-zinc-100">
      <Avatar source={photoUrl} alt="user" />
      <div className="flex flex-col w-36">
        <h3 className="font-semibold text-sm text-zinc-600">{name}</h3>
        <p className="text-xs text-zinc-500 truncate">{email}</p>
      </div>
    </footer>
  );
};
