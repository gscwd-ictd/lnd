import axios from "axios";

async function postTrainingSource() {
  const res = axios.post("");
}

export default function TrainingSource() {
  return (
    <div className="h-full w-full p-5">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2 m-5">
          <span className="h-14 w-14 flex items-center justify-center bg-gray-100 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
              />
            </svg>
          </span>
          <h1 className="text-3xl font-bold text-gray-600">Training Source</h1>
        </div>
        <div>
          <button>Create +</button>
        </div>
      </header>
      <div className="flex flex-col gap-2">
        <input className="border border-3 w-1/2"></input>
        <input className="border border-3 w-1/2"></input>
        <button className="bg-blue-200 w-1/2">Save</button>
      </div>
    </div>
  );
}
