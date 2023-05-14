import { FunctionComponent } from "react";

export type SidebarPanelHeaderProps = {
  title: string;
  subtitle: string;
};

export const SidebarPanelHeader: FunctionComponent<SidebarPanelHeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="h-16 p-3">
      <h3 className="font-bold text-zinc-700">{title}</h3>
      <p className="text-xs text-zinc-500">{subtitle}</p>
    </header>
  );
};
