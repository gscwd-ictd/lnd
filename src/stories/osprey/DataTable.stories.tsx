import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "../../components/osprey/ui/tables/data-table/view/DataTable";
import { Avatar } from "../../components/osprey/ui/avatar/view/Avatar";
import { createColumnHelper } from "@tanstack/react-table";

type Person = {
  photoUrl: string;
  name: string;
  email: string;
  company: string;
  address: string;
  country: string;
};

const personArray: any[] = [
  {
    photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/150.jpg",
    name: "Abel Smith",
    email: "garrick.torphy@yahoo.com",
    company: "Grady and Sons",
    address: "6405 Weimann Fort",
    country: "Bangladesh",
  },
  {
    photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1221.jpg",
    name: "Candice Herzog",
    email: "opal.jones@yahoo.com",
    company: "O'Reilly, Legros and Simonis",
    address: "454 Madelyn Estate",
    country: "Bosnia and Herzegovina",
  },
  {
    photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/803.jpg",
    name: "Ida Stark",
    email: "kolby92@hotmail.com",
    company: "Ebert, Ward and Ruecker",
    address: "6797 Damion Brooks",
    country: "Iran",
  },
  {
    photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/817.jpg",
    name: "Sylvester Reinger",
    email: "cielo.williamson76@hotmail.com",
    company: "Kozey, Satterfield and Terry",
    address: "94647 Von Wall",
    country: "Andorra",
  },
  {
    photoUrl: "https://avatars.githubusercontent.com/u/90071810",
    name: "Dr. Jimmie Langworth",
    email: "anahi_jerde13@gmail.com",
    company: "Wiza - Jakubowski",
    address: "30372 Mellie Key",
    country: "Saint Lucia",
  },
  {
    photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/555.jpg",
    name: "Maryann Torphy",
    email: "alvah50@yahoo.com",
    company: "Schumm, Prosacco and Gottlieb",
    address: "991 Feeney Lake",
    country: "French Polynesia",
  },
  {
    photoUrl: "https://avatars.githubusercontent.com/u/63264889",
    name: "Lloyd Bashirian Jr.",
    email: "frances.spencer58@yahoo.com",
    company: "Hermann - Gleichner",
    address: "502 Kshlerin Underpass",
    country: "Vietnam",
  },
  {
    photoUrl: "https://avatars.githubusercontent.com/u/52962937",
    name: "Wendy Green",
    email: "elliot60@hotmail.com",
    company: "Schamberger - Luettgen",
    address: "719 Morissette Motorway",
    country: "Sudan",
  },
  {
    photoUrl: "https://avatars.githubusercontent.com/u/38796976",
    name: "Todd Sporer",
    email: "madelyn_pollich80@gmail.com",
    company: "Johns Group",
    address: "7660 Willms Branch",
    country: "Iran",
  },
  {
    photoUrl: "https://avatars.githubusercontent.com/u/79149050",
    name: "Gladys Gleichner",
    email: "arthur.brown79@hotmail.com",
    company: "Gleason, Lowe and Effertz",
    address: "804 Douglas Neck",
    country: "Morocco",
  },
  {
    photoUrl: "https://avatars.githubusercontent.com/u/26797297",
    name: "Fredrick Schmeler",
    email: "ali23@hotmail.com",
    company: "Bradtke, Price and Spinka",
    address: "2921 Albin Courts",
    country: "Vietnam",
  },
];

const personHelper = createColumnHelper<Person>();

const meta: Meta<typeof DataTable> = {
  title: "Example/DataTable",
  component: DataTable,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DataTable<Person>>;

// eslint-disable-next-line storybook/prefer-pascal-case
const personColumnsWithAvatar = [
  personHelper.accessor("name", {
    header: "Name",
    // cell: (info) => info.getValue(),
    cell: (info) => (
      <div className="flex items-center gap-2">
        <Avatar size="sm" source={info.row.original.photoUrl} alt="avtr" />
        <div>
          <span className="text-gray-700">{info.getValue()}</span>
          <p className="font-mono text-xs text-gray-400">{info.row.original.email}</p>
        </div>
      </div>
    ),
  }),

  personHelper.accessor("company", {
    header: "Company",
    cell: (info) => info.getValue(),
  }),

  personHelper.accessor("address", {
    header: "Address",
    cell: (info) => info.getValue(),
    // enableSorting: false,
  }),

  personHelper.accessor("country", {
    header: "Country",
    cell: (info) => info.getValue(),
  }),
];

const personColumnsWithoutAvatar = [
  personHelper.accessor("name", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),

  personHelper.accessor("company", {
    header: "Company",
    cell: (info) => info.getValue(),
  }),

  personHelper.accessor("address", {
    header: "Address",
    cell: (info) => info.getValue(),
    // enableSorting: false,
  }),

  personHelper.accessor("country", {
    header: "Country",
    cell: (info) => info.getValue(),
  }),
];

export const WithAvatar: Story = {
  args: {
    title: "DataTable",
    subtitle: "This is a sample of a data table with custom component as a row content.",
    columns: personColumnsWithAvatar,
    data: personArray,
  },
};

export const WithoutAvatar: Story = {
  args: {
    title: "DataTable",
    subtitle: "This is a sample of a data table without custom JSX content.",
    columns: personColumnsWithoutAvatar,
    data: personArray,
  },
};
