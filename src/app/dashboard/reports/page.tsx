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

export const getPersons = async () => {
  const personArray: Person[] = [
    {
      name: "Elena Brekke",
      company: "Gleason - Erdman",
      address: "Fort Sylvesterstad",
      country: "United Kingdom",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/628.jpg",
      email: "Gloria_OReilly49@gmail.com",
    },
    {
      name: "Beverly Maggio",
      company: "Casper - Pouros",
      address: "Sanford",
      country: "Lao People's Democratic Republic",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1225.jpg",
      email: "Sylvia.Lang40@gmail.com",
    },
    {
      name: "Cheryl Hirthe",
      company: "Prohaska - Bruen",
      address: "Wizastad",
      country: "Eswatini",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/612.jpg",
      email: "Cyrus.Kulas85@yahoo.com",
    },
    {
      name: "Henrietta Howell",
      company: "Dietrich and Sons",
      address: "Jordiworth",
      country: "Malaysia",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1069.jpg",
      email: "Jody.VonRueden@hotmail.com",
    },
    {
      name: "Allan Rempel",
      company: "Kassulke - Cremin",
      address: "Everett",
      country: "Falkland Islands (Malvinas)",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/926.jpg",
      email: "Elouise_Frami@yahoo.com",
    },
    {
      name: "Felipe Tremblay",
      company: "Volkman, Dickens and Wolf",
      address: "Fort Briana",
      country: "Martinique",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/798.jpg",
      email: "Benny.Howe@gmail.com",
    },
    {
      name: "Kristy Hayes",
      company: "Schroeder - Brekke",
      address: "New Jeremy",
      country: "Guernsey",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/492.jpg",
      email: "Lilliana_Kub@yahoo.com",
    },
    {
      name: "Earnest Auer",
      company: "D'Amore - Krajcik",
      address: "Port Khalil",
      country: "Libyan Arab Jamahiriya",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1247.jpg",
      email: "Emmy_Lockman15@gmail.com",
    },
    {
      name: "Leroy Sporer",
      company: "O'Kon - Cruickshank",
      address: "Zulaufstad",
      country: "Benin",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1055.jpg",
      email: "Janet.Roob8@yahoo.com",
    },
    {
      name: "Dr. Elbert Nitzsche II",
      company: "Kemmer, Cassin and McKenzie",
      address: "Mateoport",
      country: "Malta",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/266.jpg",
      email: "Edwardo_Brown5@yahoo.com",
    },
    {
      name: "Opal Kutch",
      company: "Sawayn Inc",
      address: "South Zoraworth",
      country: "Bhutan",
      photoUrl: "https://avatars.githubusercontent.com/u/42119697",
      email: "Hallie29@hotmail.com",
    },
    {
      name: "Wade Gleason",
      company: "Bartoletti - Kub",
      address: "Moline",
      country: "Oman",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/812.jpg",
      email: "Maximus.Dietrich@hotmail.com",
    },
    {
      name: "Kristin Abernathy",
      company: "Blanda Inc",
      address: "Streichbury",
      country: "Timor-Leste",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/393.jpg",
      email: "Letitia.Hessel92@gmail.com",
    },
    {
      name: "Terrence Wiegand",
      company: "Satterfield, Hermiston and Howe",
      address: "Lacey",
      country: "Albania",
      photoUrl: "https://avatars.githubusercontent.com/u/74842303",
      email: "Claudie_Glover-Marquardt9@yahoo.com",
    },
    {
      name: "Elijah Mann",
      company: "Hagenes, Schaefer and Bradtke",
      address: "Virgietown",
      country: "Lesotho",
      photoUrl: "https://avatars.githubusercontent.com/u/52833088",
      email: "Mina_Nader@gmail.com",
    },
    {
      name: "Louis Hahn",
      company: "Rice - Boehm",
      address: "Grimesworth",
      country: "Saint Vincent and the Grenadines",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/121.jpg",
      email: "Lavina70@hotmail.com",
    },
    {
      name: "Doris Lakin",
      company: "Jacobi and Sons",
      address: "Keeblerboro",
      country: "Suriname",
      photoUrl: "https://avatars.githubusercontent.com/u/97776422",
      email: "Erin60@gmail.com",
    },
    {
      name: "Casey Gulgowski",
      company: "Watsica Inc",
      address: "Daytona Beach",
      country: "Bahrain",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/797.jpg",
      email: "Reva5@yahoo.com",
    },
    {
      name: "Eric Bahringer",
      company: "Herzog - Larson",
      address: "Norvalfort",
      country: "Saint Lucia",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1134.jpg",
      email: "Salma.Watsica82@yahoo.com",
    },
    {
      name: "Brooke Haag",
      company: "Blick - Kshlerin",
      address: "Shieldsfield",
      country: "Saint Vincent and the Grenadines",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1200.jpg",
      email: "Simeon25@gmail.com",
    },
    {
      name: "Ross Grant",
      company: "Lakin Group",
      address: "Emardberg",
      country: "Guadeloupe",
      photoUrl: "https://avatars.githubusercontent.com/u/86278673",
      email: "Kamron.Miller16@hotmail.com",
    },
    {
      name: "Amos Mitchell-Kuhic",
      company: "Wolff - Stanton",
      address: "Spencerburgh",
      country: "El Salvador",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/95.jpg",
      email: "Cordelia.Kassulke11@yahoo.com",
    },
    {
      name: "Dr. Daryl Carroll PhD",
      company: "Bode - Balistreri",
      address: "North Rhettberg",
      country: "American Samoa",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1219.jpg",
      email: "Lottie.Heathcote50@gmail.com",
    },
    {
      name: "Hazel Dicki",
      company: "Osinski - Crona",
      address: "Reillybury",
      country: "Netherlands",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/657.jpg",
      email: "Camila.Harvey68@hotmail.com",
    },
    {
      name: "Mario Olson",
      company: "Waters, Shanahan and Schaden",
      address: "Aufderharberg",
      country: "Japan",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/916.jpg",
      email: "Berta_Boehm@yahoo.com",
    },
    {
      name: "Mathew Kiehn",
      company: "Littel, Hills and Anderson",
      address: "Lake Matt",
      country: "Barbados",
      photoUrl: "https://avatars.githubusercontent.com/u/59860455",
      email: "Jonathan.Schmeler@hotmail.com",
    },
    {
      name: "Caroline Konopelski",
      company: "Wolff LLC",
      address: "Sunrise Manor",
      country: "Nauru",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/74.jpg",
      email: "Lurline_Hoppe@hotmail.com",
    },
    {
      name: "Sadie Maggio",
      company: "Friesen, Zulauf and Quitzon",
      address: "Burbank",
      country: "Portugal",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/872.jpg",
      email: "Stuart.Schamberger@gmail.com",
    },
    {
      name: "Marc Crist",
      company: "McCullough LLC",
      address: "Lednerview",
      country: "Spain",
      photoUrl: "https://avatars.githubusercontent.com/u/87535860",
      email: "Mckayla85@yahoo.com",
    },
    {
      name: "Mr. Johnathan Beier",
      company: "Borer, Brown and Hirthe",
      address: "Fort Barneytown",
      country: "Seychelles",
      photoUrl: "https://avatars.githubusercontent.com/u/44021560",
      email: "Elinore_Zemlak28@hotmail.com",
    },
    {
      name: "Lynn Huels",
      company: "Stamm - Koch",
      address: "Jabariport",
      country: "French Polynesia",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/551.jpg",
      email: "Christop.Gleichner75@yahoo.com",
    },
    {
      name: "Mr. David Emard",
      company: "Hoeger, Corwin and Hagenes",
      address: "Alameda",
      country: "Aland Islands",
      photoUrl: "https://avatars.githubusercontent.com/u/17433223",
      email: "Hosea_Wiegand@yahoo.com",
    },
    {
      name: "Violet Heller",
      company: "Aufderhar - Braun",
      address: "North Savion",
      country: "Saint Lucia",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1213.jpg",
      email: "Milo83@yahoo.com",
    },
    {
      name: "Laurie Hilpert",
      company: "Hand - Kling",
      address: "Baileeshire",
      country: "Micronesia",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/771.jpg",
      email: "Jailyn_Dietrich15@hotmail.com",
    },
    {
      name: "Courtney Kiehn",
      company: "Rice - Hessel",
      address: "Naomiebury",
      country: "Canada",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/736.jpg",
      email: "Esperanza.Ortiz@yahoo.com",
    },
    {
      name: "Vicki Christiansen PhD",
      company: "Christiansen Group",
      address: "Camarillo",
      country: "Switzerland",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/838.jpg",
      email: "Lola_Labadie@gmail.com",
    },
    {
      name: "Mrs. Ella Barrows",
      company: "Lemke - Windler",
      address: "Cyrustown",
      country: "Mexico",
      photoUrl: "https://avatars.githubusercontent.com/u/1710183",
      email: "Kiarra.Pollich87@gmail.com",
    },
    {
      name: "Ryan Leffler-Weissnat",
      company: "Bashirian and Sons",
      address: "Fort Brisa",
      country: "Mayotte",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/361.jpg",
      email: "Hillary.Hammes19@yahoo.com",
    },
    {
      name: "Angel Kub",
      company: "Tremblay - Will",
      address: "East Mistyland",
      country: "Sri Lanka",
      photoUrl: "https://avatars.githubusercontent.com/u/45395609",
      email: "Bridgette_Toy@gmail.com",
    },
    {
      name: "Bobby Koch",
      company: "Osinski and Sons",
      address: "Fort Rahsaan",
      country: "Argentina",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/182.jpg",
      email: "Abraham.Schneider@gmail.com",
    },
    {
      name: "Amelia Wisoky",
      company: "Bergnaum, Lubowitz and Bartell",
      address: "Sawaynburgh",
      country: "Guam",
      photoUrl: "https://avatars.githubusercontent.com/u/39140825",
      email: "Wilmer.Rutherford@gmail.com",
    },
    {
      name: "Ida Botsford",
      company: "Bergstrom - Walsh",
      address: "New Zane",
      country: "Palau",
      photoUrl: "https://avatars.githubusercontent.com/u/61715307",
      email: "Lennie.Goldner@hotmail.com",
    },
    {
      name: "Nichole Grant",
      company: "DuBuque Inc",
      address: "Farrellcester",
      country: "Saint Barthelemy",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/861.jpg",
      email: "Issac.Crist90@yahoo.com",
    },
    {
      name: "Roxanne Yost",
      company: "Bogan LLC",
      address: "Watersboro",
      country: "Niue",
      photoUrl: "https://avatars.githubusercontent.com/u/43136501",
      email: "Bria_Kilback@gmail.com",
    },
    {
      name: "Billy Larkin",
      company: "Wilkinson, Schmidt and Doyle",
      address: "East Casimir",
      country: "United Kingdom",
      photoUrl: "https://avatars.githubusercontent.com/u/68922525",
      email: "Johnnie9@yahoo.com",
    },
    {
      name: "Tina Hickle",
      company: "Bruen - Smith",
      address: "West Zoeytown",
      country: "Palestine",
      photoUrl: "https://avatars.githubusercontent.com/u/71854046",
      email: "Frances.Kuphal89@hotmail.com",
    },
    {
      name: "Noel Beatty",
      company: "Halvorson and Sons",
      address: "Green Bay",
      country: "Svalbard & Jan Mayen Islands",
      photoUrl: "https://avatars.githubusercontent.com/u/9108629",
      email: "Ken.Leannon18@yahoo.com",
    },
    {
      name: "Trevor Schultz",
      company: "Bosco - Kirlin",
      address: "New Kenneth",
      country: "Peru",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/925.jpg",
      email: "Kylee.Oberbrunner-Rogahn@gmail.com",
    },
    {
      name: "Mrs. Constance Hoppe",
      company: "Klein and Sons",
      address: "North Llewellynmouth",
      country: "Palau",
      photoUrl: "https://avatars.githubusercontent.com/u/42432671",
      email: "Brando.Gerlach58@hotmail.com",
    },
    {
      name: "Constance Kilback",
      company: "Deckow, Parker and Waelchi",
      address: "Lake Tyrelfield",
      country: "Reunion",
      photoUrl: "https://avatars.githubusercontent.com/u/98584950",
      email: "Jeff.Jenkins91@hotmail.com",
    },
    {
      name: "Dr. Andre Yost-Heidenreich",
      company: "Kozey, Effertz and Buckridge",
      address: "North Little Rock",
      country: "Finland",
      photoUrl: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/827.jpg",
      email: "Kenya84@gmail.com",
    },
  ];

  return personArray;
};

export default async function DashboardReports() {
  const tableData = await getPersons();

  return (
    <div className="p-5">
      <LspDataTable data={tableData} />
    </div>
  );
}
