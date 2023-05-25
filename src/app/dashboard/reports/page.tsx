import { personColumns, trainingSourceColumns } from "@lms/utilities/columns/training-source-columns";
import axios from "axios";
import { faker } from "@faker-js/faker";
import { ButtonGroup } from "@lms/components/osprey/ui/button-group/view/ButtonGroup";
import { ButtonItem } from "@lms/components/osprey/ui/button-group/view/ButtonItem";
import { LspDataTable } from "./LspDataTable";

type Pagination<T> = {
  items: T[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
};

export type TrainingSource = {
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  id: string;
  name: string;
};

const getData = async () => {
  const { data } = await axios.get("http://172.20.10.53:5286/api/lms/v1/training-sources");
  return data as Pagination<TrainingSource>;
};

export type Person = {
  photoUrl: string;
  name: string;
  email: string;
  company: string;
  address: string;
  country: string;
};

const getPerson = async () => {
  const personArray: Person[] = [
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

  return personArray;
};

export default async function DashboardReports() {
  const tableData = await getPerson();

  return (
    <div className="p-5">
      <LspDataTable data={tableData} />

      {/* <div className="w-48 mt-5">
        <ButtonGroup size="small">
          <ButtonItem>1</ButtonItem>
          <ButtonItem>2</ButtonItem>
          <ButtonItem>3</ButtonItem>
          <ButtonItem>4</ButtonItem>
          <ButtonItem>5</ButtonItem>
        </ButtonGroup>
      </div> */}
      {/* {JSON.stringify(tableData)} */}
    </div>
  );
}
