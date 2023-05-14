import { Avatar } from "@lms/components/osprey/ui/avatar/view/Avatar";
import { FunctionComponent } from "react";

export const SidebarPanelFooter: FunctionComponent = () => {
  return (
    <footer className="flex items-center gap-2 p-2 bg-zinc-100">
      <Avatar
        source="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        alt="user"
      />
      <div className="flex flex-col w-36">
        <h3 className="font-semibold text-sm text-zinc-600">John Smith J. Doe</h3>
        <p className="text-xs text-zinc-500 truncate">johndoe@gmail.com</p>
      </div>
    </footer>
  );
};
