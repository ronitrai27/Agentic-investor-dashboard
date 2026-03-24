"use client";

import Script from "next/script";
import { createElement, useState } from "react";

const TICKER_SCRIPT =
  "https://widgets.tradingview-widget.com/w/en/tv-ticker-tape.js";

const TICKER_SYMBOLS =
  "FOREXCOM:SPXUSD,BITSTAMP:BTCUSD,CMCMARKETS:GOLD,BSE:SENSEX,NASDAQ:TSLA";

const TradingViewTickerTape = () => {
  const [ready, setReady] = useState(false);

  return (
    <div className="w-full relative">
      <Script
        id="tradingview-tv-ticker-tape"
        src={TICKER_SCRIPT}
        type="module"
        strategy="afterInteractive"
        onLoad={() => setReady(true)}
      />
      {ready
        ? createElement("tv-ticker-tape", {
          symbols: TICKER_SYMBOLS,
          theme: "dark",
          transparent: true,
        })
        : null}

        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black h-8 w-[200px] rounded-full">
        </div>
    </div>
  );
};

export default TradingViewTickerTape;
