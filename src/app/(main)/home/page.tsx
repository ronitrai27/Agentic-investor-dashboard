"use client";

import { Button } from "@/components/ui/button";
import { Globe3DDemo } from "@/modules/home/components/Globe-file";
import WorldMapData from "@/modules/home/components/World-map-file";
import { Globe, Map } from "lucide-react";
import React, { useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { DynamicTime } from "@/modules/home/components/DynamicTime";
import { MARKET_OVERVIEW_WIDGET_CONFIG } from "@/lib/constants";
import TradingViewComponent from "@/modules/trading-view/components/TradingView";

type ViewMode = "globe" | "map";
dayjs.extend(utc);
dayjs.extend(timezone);

const HomePage = () => {
  const [view, setView] = useState<ViewMode>("globe");
  const marketOverviewScript = `https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js`;
  return (
    <div className="h-screen w-full py-6 overflow-hidden bg-black">
      {/* Parent */}
      <div className="flex h-full ">
        {/* GLOBE / MAP */}
        <div
          className={`flex-1 relative ${view === "map" ? "bg-black" : "bg-neutral-950"}`}
        >
          <div className="absolute top-3 left-3 z-10 flex gap-3">
            <Button
              size="sm"
              variant={view === "globe" ? "default" : "outline"}
              onClick={() => setView("globe")}
              className="cursor-pointer"
            >
              3D Globe <Globe />
            </Button>
            <Button
              size="sm"
              variant={view === "map" ? "default" : "outline"}
              onClick={() => setView("map")}
              className="cursor-pointer"
            >
              2D World Map <Map />
            </Button>
          </div>
          <DynamicTime />
          {view === "globe" ? (
            <div className="h-full w-full relative">
              <Globe3DDemo />
            </div>
          ) : (
            <div className="mt-20 h-full w-full">
              <WorldMapData />
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-black h-8 w-[360px] rounded-full">
                <p className="text-center text-xs text-white tracking-tight">
                  Made with ❤️ by Rox |
                  <span className="text-neutral-500">Credits: tradingview</span>
                </p>
              </div>
            </div>
          )}
        </div>
        {/* Stats */}
        <div className="w-[420px] border-l border-accent/20 px-3">
          <div className="">
            <TradingViewComponent
              title="Market Overview"
              scriptUrl={marketOverviewScript}
              config={MARKET_OVERVIEW_WIDGET_CONFIG}
              className="custom-chart"
              height={400}
            />
          </div>
          {/* Market/Country wise sentiment */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
