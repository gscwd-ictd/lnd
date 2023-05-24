import { ButtonGroup } from "@lms/components/osprey/ui/button-group/view/ButtonGroup";
import { ButtonItem } from "@lms/components/osprey/ui/button-group/view/ButtonItem";
import { Button } from "@lms/components/osprey/ui/button/view/Button";
import { Checkbox } from "@lms/components/osprey/ui/checkbox/view/Checkbox";
import { Input } from "@lms/components/osprey/ui/input/view/Input";

export default function DashboardInsights() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex flex-col gap-4 w-96">
        <div className="">
          <Checkbox />
        </div>
      </div>
    </div>
  );
}
