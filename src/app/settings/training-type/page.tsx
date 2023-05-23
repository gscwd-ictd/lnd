// "use client";

// import { Button } from "@lms/components/osprey/ui/button/view/Button";
// import { Input } from "@lms/components/osprey/ui/input/view/Input";
// import { Modal, ModalContent, ModalTrigger } from "@lms/components/osprey/ui/modal/view/Modal";
// // import { TrainingType } from "@lms/lib/types/training-type.type";
// import axios from "axios";
// import { FormEvent } from "react";
// import { SubmitHandler, useForm } from "react-hook-form";

// type TrainingType = {
//   name: String;
// };

// export default function TrainingTypes() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<TrainingType>();

//   const onSubmit: SubmitHandler<TrainingType> = async (data) => {
//     const res = await axios.post("http://172.20.10.53:5286/api/lms/v1/training-types", data);
//     console.log(res);
//   };

//   return (
//     <div className="h-full w-full p-5">
//       <header className="flex items-center justify-between">
//         <div className="flex items-center gap-2 m-5">
//           <span className="h-14 w-14 flex items-center justify-center bg-gray-100 rounded"></span>
//           <h1 className="text-3xl font-bold text-gray-600">Training Type</h1>
//         </div>
//         <div>
//           <button>Create +</button>
//         </div>
//       </header>
//       <div>
//         <form className="flex flex-col gap-2 w-1/2" method="post" onSubmit={handleSubmit(onSubmit)}>
//           {/* <input className="border border-3 w-1/2" {...register("name")}></input> */}
//           <Input {...register("name")} />
//           <Button type="submit" fluid>
//             Save
//           </Button>
//           {/* <button className="bg-blue-200 w-1/2" type="submit">
//             Save
//           </button> */}
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";

import { Button } from "@lms/components/osprey/ui/button/view/Button";
import { Provider, Viewport } from "@radix-ui/react-toast";
import { useState } from "react";
import { useToastStore } from "@lms/components/osprey/ui/overlays/toast/utils/store";
import { TabContentWrap, Tabs, TabsContent, TabsList, TabsTrigger } from "@lms/components/osprey/ui/tabs/view/Tabs";
import Image from "next/image";
import TestPic from "../../../lib/img/test.jpg";
// import * as Tabs from "@radix-ui/react-tabs";
import { Toast, ToastProvider, ToastViewport } from "@lms/components/osprey/ui/overlays/toast/view/Toast";
import { Alert } from "@lms/components/osprey/ui/overlays/alert/view/Alert";

export default function TrainingTypeModal() {
  // const [open, setOpen] = useState(false);
  const { setOpen } = useToastStore();
  const [orientation, setOrientation] = useState<"horizontal" | "vertical" | undefined>("vertical");
  const [danger, setDanger] = useState(false);

  return (
    <>
      <ToastProvider duration={2000}>
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          Sample Toast
        </Button>
        <Toast title="Pull Request Review" content="Someone requested your review on" />
        <ToastViewport className="ToastViewport" />
      </ToastProvider>

      <div className="mt-16 p-4">
        <>Success</>
        <Alert title="Success">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod maxime provident tempore quisquam! Facilis
          deleniti mollitia possimus vel repudiandae sit eaque necessitatibus voluptas. Reiciendis expedita, delectus a
          modi maxime nobis?
        </Alert>
        <>Error</>
        <Button onClick={() => setDanger(true)}>Set Alert</Button>
        {danger && (
          <Alert title="Title" color="danger">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod maxime provident tempore quisquam! Facilis
            deleniti mollitia possimus vel repudiandae sit eaque necessitatibus voluptas. Reiciendis expedita, delectus
            a modi maxime nobis?
          </Alert>
        )}
        <>Info</>
        <Alert title="Title" color="info">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod maxime provident tempore quisquam! Facilis
          deleniti mollitia possimus vel repudiandae sit eaque necessitatibus voluptas. Reiciendis expedita, delectus a
          modi maxime nobis?
        </Alert>
        <>Warning</>
        <Alert title="Title" color="warning">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod maxime provident tempore quisquam! Facilis
          deleniti mollitia possimus vel repudiandae sit eaque necessitatibus voluptas. Reiciendis expedita, delectus a
          modi maxime nobis?
        </Alert>
      </div>

      <div className="mt-5 px-3">
        <Tabs defaultValue="tab1" orientation="horizontal">
          <TabsList>
            <TabsTrigger value="tab1">One</TabsTrigger>
            <TabsTrigger value="tab2">Two</TabsTrigger>
            <TabsTrigger value="tab3">Three</TabsTrigger>
          </TabsList>
          <TabContentWrap>
            <TabsContent value="tab1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod maxime provident tempore quisquam! Facilis
              deleniti mollitia possimus vel repudiandae sit eaque necessitatibus voluptas. Reiciendis expedita,
              delectus a modi maxime nobis?
            </TabsContent>
            <TabsContent value="tab2">2</TabsContent>
            <TabsContent value="tab3">3</TabsContent>
          </TabContentWrap>
        </Tabs>
      </div>

      <div className="mt-5 px-3">
        <div className="flex flex-row gap-4">
          {/* <Card></Card> */}
          {/* Card (default) */}
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <h5 className="text-2xl font-bold tracking-tight">Header</h5>
            <h6 className="mb-2">Subheader</h6>
            <p className="text-gray-700 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed in, reprehenderit ipsam odio temporibus
              eaque, non soluta inventore, numquam unde repellat? Laborum, pariatur et ipsam vel sapiente eos amet?
            </p>
          </div>
          {/* Card with button/link */}
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">Header</h5>
            <h6 className="mb-2">Subheader</h6>
            <p className="mb-3 font-normal text-gray-700">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          {/* Card with image */}
        </div>
      </div>
      <div className="mt-5 px-3 pb-3">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
          <div>
            <Image className="rounded-t-lg" src={TestPic} width={500} height={300} alt="Picture of the author" />
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 ">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
