import { createColumnHelper } from "@tanstack/react-table";
import { Training } from "../types/training-external.type";

const helper = createColumnHelper<Training>();

export const trainingExternalColumns = [
  helper.accessor("lspName", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),
];
