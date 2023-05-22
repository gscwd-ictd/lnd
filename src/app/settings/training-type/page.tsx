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
import { Toast, ToastProvider, ToastViewport } from "@lms/components/osprey/ui/overlays/toast/view/toast";
import { useState } from "react";
import { useToastStore } from "@lms/components/osprey/ui/overlays/toast/utils/store";
import { Alert } from "@lms/components/osprey/ui/overlays/alert/view/alert";

export default function TrainingTypeModal() {
  // const [open, setOpen] = useState(false);
  const { setOpen } = useToastStore();

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
        <Toast
          // open={open}
          // onOpenChange={setOpen}
          title="Pull Request Review"
          content="Someone requested your review on"
        />
        <ToastViewport className="ToastViewport" />
      </ToastProvider>

      <div className="mt-16 p-4">
        <Alert title="Title" content="Content" color="danger"></Alert>
        <>Success</>
        <div className="bg-teal-100  text-teal-700 px-4 py-3 rounded relative shadow-md" role="alert">
          <div className="flex">
            <div className="py-1">
              <svg
                fill="#000000"
                viewBox="0 0 24 24"
                className="fill-current h-8 w-8 text-teal-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 Z M15.2928932,8.29289322 L10,13.5857864 L8.70710678,12.2928932 C8.31658249,11.9023689 7.68341751,11.9023689 7.29289322,12.2928932 C6.90236893,12.6834175 6.90236893,13.3165825 7.29289322,13.7071068 L9.29289322,15.7071068 C9.68341751,16.0976311 10.3165825,16.0976311 10.7071068,15.7071068 L16.7071068,9.70710678 C17.0976311,9.31658249 17.0976311,8.68341751 16.7071068,8.29289322 C16.3165825,7.90236893 15.6834175,7.90236893 15.2928932,8.29289322 Z"
                ></path>
              </svg>
            </div>
            <div>
              <p className="font-bold">Success</p>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis cumque magni dignissimos illum,
                possimus consectetur eius odio obcaecati incidunt quas mollitia repudiandae laudantium nobis
                reprehenderit ullam iusto hic fuga nisi?
              </p>
            </div>
            <div className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-6 w-6 text-teal-500 "
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </div>
          </div>
        </div>
        <>Error</>
        <div className="bg-red-100  text-red-700 px-4 py-3 rounded relative shadow-md" role="alert">
          <div className="flex">
            <div className="py-1">
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current h-8 w-8 text-red-500 mr-4"
              >
                <title>error</title>
                <path
                  d="M213.333333,3.55271368e-14 C331.136,3.55271368e-14 426.666667,95.5306667 426.666667,213.333333 C426.666667,331.136 331.136,426.666667 213.333333,426.666667 C95.5306667,426.666667 3.55271368e-14,331.136 3.55271368e-14,213.333333 C3.55271368e-14,95.5306667 95.5306667,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,42.6666667 C119.232,42.6666667 42.6666667,119.232 42.6666667,213.333333 C42.6666667,307.434667 119.232,384 213.333333,384 C307.434667,384 384,307.434667 384,213.333333 C384,119.232 307.434667,42.6666667 213.333333,42.6666667 Z M262.250667,134.250667 L292.416,164.416 L243.498667,213.333333 L292.416,262.250667 L262.250667,292.416 L213.333333,243.498667 L164.416,292.416 L134.250667,262.250667 L183.168,213.333333 L134.250667,164.416 L164.416,134.250667 L213.333333,183.168 L262.250667,134.250667 Z"
                  id="error"
                ></path>
              </svg>
            </div>
            <div>
              <p className="font-bold">Error</p>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis cumque magni dignissimos illum,
                possimus consectetur eius odio obcaecati incidunt quas mollitia repudiandae laudantium nobis
                reprehenderit ullam iusto hic fuga nisi?
              </p>
            </div>
            <div className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-6 w-6 text-red-500 "
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </div>
          </div>
        </div>
        <>Info</>
        <div className="bg-blue-100  text-blue-700 px-4 py-3 rounded relative shadow-md" role="alert">
          <div className="flex">
            <div className="py-1">
              <svg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current h-8 w-8 text-blue-500 mr-4"
                fill="#000000"
              >
                <title>information-circle</title>
                <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2Zm0,40A18,18,0,1,1,42,24,18.1,18.1,0,0,1,24,42Z"></path>{" "}
                <path d="M24,20a2,2,0,0,0-2,2V34a2,2,0,0,0,4,0V22A2,2,0,0,0,24,20Z"></path>
                <circle cx="24" cy="14" r="2"></circle>
              </svg>
            </div>
            <div>
              <p className="font-bold">Information</p>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis cumque magni dignissimos illum,
                possimus consectetur eius odio obcaecati incidunt quas mollitia repudiandae laudantium nobis
                reprehenderit ullam iusto hic fuga nisi?
              </p>
            </div>
            <div className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-6 w-6 text-blue-500 "
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </div>
          </div>
        </div>
        <>Warning</>
        <div className="bg-orange-100  text-orange-700 px-4 py-3 rounded relative shadow-md" role="alert">
          <div className="flex">
            <div className="py-1">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4">
                <path
                  d="M12 15H12.01M12 12V9M4.98207 19H19.0179C20.5615 19 21.5233 17.3256 20.7455 15.9923L13.7276 3.96153C12.9558 2.63852 11.0442 2.63852 10.2724 3.96153L3.25452 15.9923C2.47675 17.3256 3.43849 19 4.98207 19Z"
                  stroke="#f97316"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div>
              <p className="font-bold">Information</p>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis cumque magni dignissimos illum,
                possimus consectetur eius odio obcaecati incidunt quas mollitia repudiandae laudantium nobis
                reprehenderit ullam iusto hic fuga nisi?
              </p>
            </div>
            <div className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-6 w-6 text-orange-500 "
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
