"use client";

import { useEffect, useRef } from "react";

const ECONOMIC_MAP_SCRIPT_ID = "tradingview-economic-map-script";
const ECONOMIC_MAP_SCRIPT_SRC =
  "https://widgets.tradingview-widget.com/w/en/tv-economic-map.js";

const WorldMapData = () => {
  const widgetHostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const existingScript = document.getElementById(
      ECONOMIC_MAP_SCRIPT_ID,
    ) as HTMLScriptElement | null;
    const ensureMapElement = () => {
      if (!widgetHostRef.current) return;
      if (widgetHostRef.current.querySelector("tv-economic-map")) return;
      const mapElement = document.createElement("tv-economic-map");
      mapElement.setAttribute("theme", "dark");
      mapElement.setAttribute("transparent", "");
      widgetHostRef.current.appendChild(mapElement);
    };

    if (existingScript) {
      ensureMapElement();
      return;
    }

    const script = document.createElement("script");
    script.id = ECONOMIC_MAP_SCRIPT_ID;
    script.type = "module";
    script.src = ECONOMIC_MAP_SCRIPT_SRC;
    script.onload = ensureMapElement;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="">
      <div className="overflow-hidden bg-black">
        <div ref={widgetHostRef} className="h-full w-full bg-black" />
      </div>
    </section>
  );
};

export default WorldMapData;
