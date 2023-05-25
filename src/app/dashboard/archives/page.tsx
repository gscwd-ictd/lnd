"use client";

import { Button } from "@lms/components/osprey/ui/button/view/Button";
import { SlideOver } from "@lms/components/osprey/ui/overlays/slider-over/view/SliderOver";
import { useState } from "react";

export default function DashboardArchives() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-10 w-96">
          <SlideOver open={open} setOpen={setOpen} size="sm">
            <SlideOver.Header>Header</SlideOver.Header>
            <SlideOver.Body>Body</SlideOver.Body>
            <SlideOver.Footer>Footer</SlideOver.Footer>
          </SlideOver>

          <Button onClick={() => setOpen(true)}>Open</Button>
        </div>
      </div>
    </>
  );
}
