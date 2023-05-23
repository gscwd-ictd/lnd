import { FunctionComponent, ReactNode } from "react";

type CardProps = {
  title?: ReactNode | ReactNode[];
  children?: ReactNode | ReactNode[];
};

export const Card: FunctionComponent<CardProps> = ({ children }) => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <h5 className="text-2xl font-bold tracking-tight">Header</h5>
      <h6 className="mb-2">Subheader</h6>
      <p className="text-gray-700 ">{children}</p>
    </div>
  );
};

Card.displayName = "Card";
