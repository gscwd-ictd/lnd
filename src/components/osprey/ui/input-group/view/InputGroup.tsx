export const InputGroup = () => {
  return (
    <>
      <div className="flex rounded-md shadow-sm">
        <input />
        <button
          type="button"
          className="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-r-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
        >
          Button
        </button>
      </div>
    </>
  );
};

InputGroup.displayName = "InputGroup";

//     return (<div>
//         <label>Label</label>
//         <div className="flex rounded-md shadow-sm">
//           <input ref={forwardedRef} type="text" id="hs-trailing-button-add-on" name="hs-trailing-button-add-on" className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-l-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"/>
//           <button type="button" className="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-r-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm">
//             Button
//           </button>
//         </div>
//       </div>);
// }
