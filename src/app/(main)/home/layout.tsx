import TradingViewTickerTape from "@/modules/trading-view/components/TickerTape";
import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col transition-all duration-300 ease-in-out bg-black">
      {/* Top Ticker Header */}
      {/* <TradingViewTickerTape /> */}
      <main className="">{children}</main>
    </div>
  );
}
