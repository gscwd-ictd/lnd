import { Input } from "@lms/components/osprey/ui/input/view/Input";
import { FunctionComponent } from "react";

export const TrainingInformation: FunctionComponent = () => {
  return (
    <>
      <div className="mt-1">
        <div className="mb-2">
          <label htmlFor="from" className="block text-xs font-medium text-gray-700">
            Inclusive dates
          </label>
          <p className="text-xs text-gray-500">The specific timeframe during which the training would take place.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-full shrink-1">
            <label htmlFor="from" className="block text-xs text-indigo-700 pl-1 font-medium">
              From
            </label>
            <input
              id="from"
              type="date"
              className="border-gray-200 text-sm rounded text-gray-700 w-full focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="w-full shrink-1">
            <label htmlFor="to" className="block text-xs text-indigo-700 pl-1 font-medium">
              To
            </label>
            <input
              id="to"
              type="date"
              className="border-gray-200 text-sm rounded text-gray-700 w-full focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      <div className="mt-1">
        <div className="mb-2">
          <label htmlFor="hrs" className="block text-xs font-medium text-gray-700">
            No. of hours
          </label>
          <p className="text-xs text-gray-500">The duration or length of the training.</p>
        </div>
        <Input
          id="hrs"
          placeholder="Please indicate the training's duration in hours"
          size="small"
          className="placeholder:text-xs"
        />
      </div>

      <div className="mt-1">
        <div className="mb-2">
          <label htmlFor="course-title" className="block text-xs font-medium text-gray-700">
            Course title
          </label>
          <p className="text-xs text-gray-500">
            A concise and descriptive identifier that reflects the content, focus, or objectives of the training.
          </p>
        </div>
        <Input
          id="course-title"
          placeholder="Please indicate the training's course title"
          size="small"
          className="placeholder:text-xs"
        />
        {/* <textarea
          style={{ resize: "none" }}
          rows={1}
          placeholder="Please indicate the training's course title"
          className="w-full py-3 px-4 placeholder:text-gray-300 placeholder:text-xs block border-gray-200 rounded-md text-sm focus:border-indigo-500 focus:ring-indigo-500"
        /> */}
      </div>

      <div className="mt-1">
        <div className="mb-2">
          <label htmlFor="facilitator" className="block text-xs font-medium text-gray-700">
            Facilitator
          </label>
          <p className="text-xs text-gray-500">The ones responsible for leading and guiding the training process.</p>
        </div>
        <Input
          id="facilitator"
          placeholder="Please indicate the training's designated facilitator"
          size="small"
          className="placeholder:text-xs"
        />
      </div>

      <div className="mt-1">
        <div className="mb-2">
          <label htmlFor="location" className="block text-xs font-medium text-gray-700">
            Location
          </label>
          <p className="text-xs text-gray-500">The designated venue or setting for the training.</p>
        </div>
        <textarea
          id="location"
          style={{ resize: "none" }}
          rows={2}
          placeholder="Please indicate the training's venue"
          className="w-full py-3 px-4 placeholder:text-gray-300 placeholder:text-xs block border-gray-200 rounded-md text-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
    </>
  );
};
