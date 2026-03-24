"use client";
import { useState } from "react";
import { Globe3D, GlobeMarker } from "@/components/ui/3d-globe";

// ─────────────────────────────────────────────────────────────────────────────
// HOW THE CALLBACKS WORK
// ─────────────────────────────────────────────────────────────────────────────
//
// Globe3D exposes two callbacks:
//
//  onMarkerHover?: (marker: GlobeMarker | null) => void
//    → Called every time you move your mouse onto OR off a marker.
//    → `marker` = the hovered GlobeMarker object  (or null when leaving)
//    → Use this to: show a side-panel, update a tooltip, highlight a row in a table, etc.
//
//  onMarkerClick?: (marker: GlobeMarker) => void
//    → Called once when you click a dot.
//    → Use this to: open a modal, navigate to a route, fetch detail data, etc.
//
// Pattern:
//   const [active, setActive] = useState<GlobeMarker | null>(null);
//   <Globe3D onMarkerHover={setActive} onMarkerClick={(m) => router.push(`/news/${m.label}`)} />
//   {active && <SidePanel data={active} />}
// ─────────────────────────────────────────────────────────────────────────────

const sampleMarkers: GlobeMarker[] = [
  {
    lat: 40.7128, lng: -74.006,
    src: "#60a5fa", label: "NYSE · New York",
    content: "S&P 500 surges 1.2% as Fed signals rate pause — biggest single-day gain in 3 months.",
  },
  {
    lat: 51.5074, lng: -0.1278,
    src: "#60a5fa", label: "LSE · London",
    content: "FTSE 100 climbs 0.8% led by energy stocks as Brent crude tops $92/bbl.",
  },
  {
    lat: 35.6762, lng: 139.6503,
    src: "#60a5fa", label: "TSE · Tokyo",
    content: "Nikkei 225 falls 0.5% after BOJ keeps ultra-loose policy unchanged.",
  },
  {
    lat: -33.8688, lng: 151.2093,
    src: "#60a5fa", label: "ASX · Sydney",
    content: "ASX 200 rises 2.1% on strong mining earnings; BHP hits 52-week high.",
  },
  {
    lat: 48.8566, lng: 2.3522,
    src: "#60a5fa", label: "Euronext · Paris",
    content: "CAC 40 edges down 0.2% as ECB warns of prolonged high rates into 2025.",
  },
  {
    lat: 28.6139, lng: 77.209,
    src: "#60a5fa", label: "NSE · New Delhi",
    content: "Nifty 50 up 0.6%; IT sector leads gains ahead of RBI monetary policy meeting.",
  },
  {
    lat: 55.7558, lng: 37.6173,
    src: "#60a5fa", label: "MOEX · Moscow",
    content: "MOEX Index dips 1.0% amid renewed currency volatility and oil price drag.",
  },
  {
    lat: -22.9068, lng: -43.1729,
    src: "#60a5fa", label: "B3 · São Paulo",
    content: "Ibovespa gains 0.4% as Brazil posts stronger-than-expected GDP data.",
  },
  {
    lat: 31.2304, lng: 121.4737,
    src: "#60a5fa", label: "SSE · Shanghai",
    content: "Shanghai Composite rallies 1.8% following new government stimulus package.",
  },
  {
    lat: 25.2048, lng: 55.2708,
    src: "#60a5fa", label: "DFM · Dubai",
    content: "DFM General Index up 0.3%; real-estate and banking stocks lead modest gains.",
  },
  {
    lat: 1.3521, lng: 103.8198,
    src: "#60a5fa", label: "SGX · Singapore",
    content: "STI Index up 1.1%; semiconductor stocks rally on strong TSMC guidance.",
  },
  {
    lat: 37.5665, lng: 126.978,
    src: "#60a5fa", label: "KRX · Seoul",
    content: "KOSPI rises 0.9% as Samsung Electronics beats Q1 profit estimates by 12%.",
  },
];

export function Globe3DDemo() {
  // ── State to track which marker the user is hovering over ──
  const [hoveredMarker, setHoveredMarker] = useState<GlobeMarker | null>(null);
  const [clickedMarker, setClickedMarker] = useState<GlobeMarker | null>(null);

  return (
    <div className="relative h-full w-full">
      <Globe3D
        markers={sampleMarkers}
        config={{
          atmosphereColor: "#4da6ff",
          atmosphereIntensity: 20,
          bumpScale: 5,
          autoRotateSpeed: 0.3,
        }}

        // ── onMarkerHover ──────────────────────────────────────────────────
        // Fires whenever mouse enters or leaves a dot.
        // marker = GlobeMarker object on enter, null on leave.
        onMarkerHover={(marker) => setHoveredMarker(marker)}

        // ── onMarkerClick ──────────────────────────────────────────────────
        // Fires when the user clicks a dot.
        // Use this to open modals, navigate, or fetch detail data.
        onMarkerClick={(marker) => setClickedMarker(marker)}
      />

      {/* ── Side panel that appears when a marker is CLICKED ── */}
      {clickedMarker && (
        <div
          className="absolute right-4 top-4 z-50 w-64 rounded-xl border border-white/10 bg-black/90 p-4 shadow-2xl backdrop-blur-md"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-400">
              {clickedMarker.label}
            </span>
            <button
              className="text-white/40 hover:text-white/80 transition-colors text-xs"
              onClick={() => setClickedMarker(null)}
            >
              ✕
            </button>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-white/75">
            {clickedMarker.content}
          </p>
          <div className="mt-3 border-t border-white/10 pt-3 text-[10px] text-white/40">
            Click any dot to pin it here · Hover dots for preview
          </div>
        </div>
      )}

      {/* ── Small status bar showing hovered market name ── */}
      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2">
        <div
          className="rounded-full border border-white/10 bg-black/70 px-3 py-1 text-[10px] font-mono text-white/60 backdrop-blur-sm transition-all duration-300"
          style={{ opacity: hoveredMarker ? 1 : 0 }}
        >
          {hoveredMarker?.label ?? ""}
        </div>
      </div>
    </div>
  );
}
