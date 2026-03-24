"use client";

import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

export function DynamicTime() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    setMounted(true);
    
    setTime(dayjs().format("MMMM  HH:mm:ss"));
    
    const interval = setInterval(() => {
      setTime(dayjs().format("MMMM  HH:mm:ss"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Pre-render skeleton to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="absolute top-16 left-3 z-10">
        <p className="text-xs text-transparent border border-neutral-600/70 bg-neutral-800 py-1.5 px-4 rounded-md">
          {dayjs().format("MMMM  HH:mm:ss")}
        </p>
      </div>
    );
  }

  return (
    <div className="absolute top-16 left-3 z-10">
      <p className="text-xs text-white border border-neutral-600/70 bg-neutral-800 py-1.5 px-4 rounded-md">
        {time}
      </p>
    </div>
  );
}
