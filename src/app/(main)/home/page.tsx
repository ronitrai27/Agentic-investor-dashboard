import { Globe3DDemo } from "@/modules/home/components/Globe-file";
import React from "react";

const HomePage = () => {
  return (
    <div className="h-screen w-full p-6 overflow-hidden bg-black">
      {/* Parent */}
      <div className="flex h-full">
        {/* GLOBE */}
        <div className="flex-1 bg-neutral-950">
          <Globe3DDemo />
        </div>
        {/* Stats */}
        <div className="w-[400px] border-l border-accent/20"></div>
      </div>
    </div>
  );
};

export default HomePage;
