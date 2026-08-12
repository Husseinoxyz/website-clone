"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, MousePointerClick } from "lucide-react";
import { useEffect, useState, useRef } from "react";

// Custom Brand D Icon Component (Slanted 3-line concentric letter D, matching the brand asset exactly)
export function CustomD({ className = "h-6 w-6", style }: { className?: string, style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.85" className={className} strokeLinecap="round" strokeLinejoin="round" style={style}>
      {[0, 1, 2].map((i) => {
        const R_i = 8.2 - i * 1.8;
        const Y_top_i = 4.2 + i * 1.8;
        const Y_bot_i = 19.8 - i * 1.8;

        const X_base_i = 4.2 + i * 1.8;
        const X_top_i = X_base_i + 3.0;
        const C_x = 11.5;

        const stemPath = `M ${X_base_i + 0.8} ${Y_bot_i - 1.2} L ${X_top_i} ${Y_top_i}`;
        const loopPath = `M ${X_top_i} ${Y_top_i} L ${C_x} ${Y_top_i} A ${R_i} ${R_i} 0 0 1 ${C_x + R_i} 12 A ${R_i} ${R_i} 0 0 1 ${C_x} ${Y_bot_i} L 2.0 ${Y_bot_i}`;

        return (
          <g key={i}>
            <path d={stemPath} style={{ fill: "none !important" }} />
            <path d={loopPath} style={{ fill: "none !important" }} />
          </g>
        );
      })}
    </svg>
  );
}

// Draw a tiny slanted 3-line concentric 'D' directly inside SVG labels with thin lines and positive gaps
const drawTinyD = (x: number, y: number) => {
  const strokeW = 0.12; // Thin lines to prevent merging/overlap
  const C_x = x + 0.95;
  const spacing = 0.38; // Increased spacing for a clear positive gap between lines

  return (
    <g stroke="white" strokeWidth={strokeW} strokeLinecap="round" strokeLinejoin="round" fill="none" style={{ fill: "none" }}>
      {[0, 1, 2].map((i) => {
        const R_i = 1.5 - i * spacing;
        const Y_top_i = y - 1.5 + i * spacing;
        const Y_bot_i = y + 1.5 - i * spacing;

        const X_base_i = x - 0.5 + i * spacing;
        const X_top_i = X_base_i + 0.55;

        // Slanted Stem path
        const stemPath = `M ${X_base_i + 0.12} ${Y_bot_i - 0.12} L ${X_top_i} ${Y_top_i}`;

        // Loop path (starting at top bend, going right, curving down-left, and going horizontally left past the stem)
        const loopPath = `M ${X_top_i} ${Y_top_i} L ${C_x} ${Y_top_i} A ${R_i} ${R_i} 0 0 1 ${C_x + R_i} ${y} A ${R_i} ${R_i} 0 0 1 ${C_x} ${Y_bot_i} L ${x - 0.8} ${Y_bot_i}`;

        return (
          <g key={i}>
            <path d={stemPath} style={{ fill: "none !important" }} fill="none" />
            <path d={loopPath} style={{ fill: "none !important" }} fill="none" />
          </g>
        );
      })}
    </g>
  );
};

// Interface for OXYZ Custom Icons supporting absolute positioning inside parents
interface IconProps {
  x?: number | string;
  y?: number | string;
  width?: number | string;
  height?: number | string;
  className?: string;
  active?: boolean;
}

// Custom SVG icon components matching the exact brand assets in the concept diagram
function DiscoveryIcon({ x, y, width = "100%", height = "100%", className = "h-6 w-6", active = false }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" x={x} y={y} width={width} height={height} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Clipboard Main Body */}
      <rect x="28" y="26" width="44" height="54" rx="5" style={{ fill: "none" }} />
      {/* Binder Clip */}
      <path d="M 43 26 L 45 16 L 55 16 L 57 26" style={{ fill: "currentColor", fillOpacity: 0.15 }} />
      <rect x="40" y="20" width="20" height="6" rx="1.5" style={{ fill: "none" }} />
      {/* Checklist items */}
      <path d="M 36 42 L 41 47 L 51 37" strokeWidth="4" style={{ fill: "none" }} />
      <line x1="56" y1="41" x2="70" y2="41" strokeWidth="4" style={{ fill: "none" }} />
      <line x1="56" y1="47" x2="66" y2="47" strokeWidth="4" style={{ fill: "none" }} />
      {/* Pulse Box */}
      <rect x="34" y="56" width="32" height="16" rx="3" strokeWidth="3" style={{ fill: "none" }} />
      {/* Pulse Wave */}
      <path d="M 37 64 L 40 64 L 43 59 L 46 69 L 49 61 L 52 67 L 55 64 L 63 64" strokeWidth="3" style={{ fill: "none" }} />
      {/* Check Circle Badge */}
      <circle cx="70" cy="24" r="12" stroke={active ? "white" : "currentColor"} strokeWidth="1" fill="white" style={{ fill: "white" }} />
      <path d="M 64 24 L 68 28 L 76 20" stroke="#007A59" strokeWidth="3" style={{ fill: "none" }} />
    </svg>
  );
}

// Custom Detox Icon matching the user's screenshots
function DetoxIcon({ x, y, width = "100%", height = "100%", className = "h-6 w-6", active = false }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" x={x} y={y} width={width} height={height} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Head */}
      <circle cx="50" cy="18" r="7" style={{ fill: "none" }} />
      {/* Body Outline */}
      <path d="M 25 31 C 25 31 25 27 28 27 L 43 27 C 46 27 47 31 50 31 C 53 31 54 27 57 27 L 72 27 C 75 27 75 31 75 31 L 75 33 C 75 33 75 35 72 35 L 61 35 C 59 35 58 36 58 38 L 58 66 M 42 66 L 42 38 C 42 36 41 35 39 35 L 28 35 C 25 35 25 33 25 33 Z" style={{ fill: "none" }} />
      {/* Inverted U in middle */}
      <path d="M 47 68 L 47 44 A 3 3 0 0 1 50 41 A 3 3 0 0 1 53 44 L 53 68" style={{ fill: "none" }} />

      {/* Plus particles */}
      <path d="M 30 40 L 30 48 M 26 44 L 34 44" strokeWidth="3" style={{ fill: "none" }} />
      <path d="M 30 54 L 30 62 M 26 58 L 34 58" strokeWidth="3" style={{ fill: "none" }} />
      <path d="M 70 40 L 70 48 M 66 44 L 74 44" strokeWidth="3" style={{ fill: "none" }} />
      <path d="M 70 54 L 70 62 M 66 58 L 74 58" strokeWidth="3" style={{ fill: "none" }} />

      {/* Check Badge */}
      <circle cx="50" cy="68" r="14" stroke={active ? "white" : "currentColor"} strokeWidth="1" fill="white" style={{ fill: "white" }} />
      <path d="M 41 68 L 47 74 L 59 62" stroke="#115E4C" strokeWidth="4.5" style={{ fill: "none" }} />
    </svg>
  );
}

// Custom Defence Icon matching the user's screenshots
function DefenceIcon({ x, y, width = "100%", height = "100%", className = "h-6 w-6", active = false }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" x={x} y={y} width={width} height={height} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Outer Shield */}
      <path d="M 50 18 C 59 18 72 15 72 32 C 72 52 50 72 50 75 C 50 72 28 52 28 32 C 28 15 41 18 50 18 Z" style={{ fill: "none !important" }} />
      {/* Inner Shield */}
      <path d="M 50 25 C 56 25 64 23 64 34 C 64 48 50 62 50 64 C 50 62 36 48 36 34 C 36 23 44 25 50 25 Z" strokeWidth="3" style={{ fill: "none !important" }} />
      {/* Central Plus */}
      <path d="M 50 36 L 50 50 M 43 43 L 57 43" strokeWidth="5" style={{ fill: "none !important" }} />

      {/* Surrounding Rays */}
      <line x1="20" y1="28" x2="11" y2="23" style={{ fill: "none !important" }} />
      <line x1="16" y1="43" x2="6" y2="43" style={{ fill: "none !important" }} />
      <line x1="20" y1="58" x2="11" y2="63" style={{ fill: "none !important" }} />
      <line x1="80" y1="28" x2="89" y2="23" style={{ fill: "none !important" }} />
      <line x1="84" y1="43" x2="94" y2="43" style={{ fill: "none !important" }} />
      <line x1="80" y1="58" x2="89" y2="63" style={{ fill: "none !important" }} />

      {/* Surrounding Plusses */}
      <path d="M 62 10 L 62 18 M 58 14 L 66 14" strokeWidth="3" style={{ fill: "none !important" }} />
      <path d="M 34 76 L 34 84 M 30 80 L 38 80" strokeWidth="3" style={{ fill: "none !important" }} />

      {/* Surrounding Circles and Dots */}
      <circle cx="37" cy="13" r="3.5" strokeWidth="3" style={{ fill: "none !important" }} />
      <circle cx="69" cy="18" r="1.2" stroke="none" style={{ fill: "currentColor !important" }} />
      <circle cx="54" cy="83" r="3.5" strokeWidth="3" style={{ fill: "none !important" }} />
      <circle cx="44" cy="83" r="1.2" stroke="none" style={{ fill: "currentColor !important" }} />

      {/* Top Left Virus */}
      <path d="M 19 14 C 16.5 14 15 16 15 18 C 15 20.5 16.5 22 19 22 C 21.5 22 23 20.5 23 18 C 23 16 21.5 14 19 14 Z" strokeWidth="3" style={{ fill: "none !important" }} />
      <line x1="16" y1="15" x2="11" y2="10" strokeWidth="3" style={{ fill: "none !important" }} />
      <line x1="22" y1="15" x2="27" y2="10" strokeWidth="3" style={{ fill: "none !important" }} />
      <line x1="15" y1="19" x2="10" y2="21" strokeWidth="3" style={{ fill: "none !important" }} />
      <line x1="23" y1="19" x2="28" y2="21" strokeWidth="3" style={{ fill: "none !important" }} />

      {/* Bottom Right Virus */}
      <circle cx="76" cy="65" r="5" strokeWidth="3" style={{ fill: "none !important" }} />
      <line x1="72.5" y1="61.5" x2="68" y2="57" strokeWidth="3" style={{ fill: "none !important" }} />
      <circle cx="66.5" cy="55.5" r="2" strokeWidth="2.5" style={{ fill: "none !important" }} />
      <line x1="79.5" y1="61.5" x2="84" y2="57" strokeWidth="3" style={{ fill: "none !important" }} />
      <circle cx="85.5" cy="55.5" r="2" strokeWidth="2.5" style={{ fill: "none !important" }} />
      <line x1="81" y1="65" x2="87" y2="65" strokeWidth="3" style={{ fill: "none !important" }} />
      <circle cx="89" cy="65" r="2" strokeWidth="2.5" style={{ fill: "none !important" }} />
      <line x1="79.5" y1="68.5" x2="84" y2="73" strokeWidth="3" style={{ fill: "none !important" }} />
      <circle cx="85.5" cy="74.5" r="2" strokeWidth="2.5" style={{ fill: "none !important" }} />
      <line x1="72.5" y1="68.5" x2="68" y2="73" strokeWidth="3" style={{ fill: "none !important" }} />
      <circle cx="66.5" cy="74.5" r="2" strokeWidth="2.5" style={{ fill: "none !important" }} />
      <circle cx="74" cy="64" r="0.75" stroke="none" style={{ fill: "currentColor !important" }} />
      <circle cx="77" cy="66" r="0.75" stroke="none" style={{ fill: "currentColor !important" }} />
    </svg>
  );
}

// Custom SVG Icon for atom orbits
function DynamicIcon({ x, y, width = "100%", height = "100%", className = "h-6 w-6", active = false }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" x={x} y={y} width={width} height={height} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Center Nucleus */}
      <circle cx="50" cy="50" r="8" stroke="none" style={{ fill: "currentColor !important" }} />
      {/* Orbit 1 */}
      <ellipse cx="50" cy="50" rx="36" ry="12" transform="rotate(30 50 50)" strokeWidth="4" style={{ fill: "none !important" }} />
      {/* Orbit 2 */}
      <ellipse cx="50" cy="50" rx="36" ry="12" transform="rotate(90 50 50)" strokeWidth="4" style={{ fill: "none !important" }} />
      {/* Orbit 3 */}
      <ellipse cx="50" cy="50" rx="36" ry="12" transform="rotate(150 50 50)" strokeWidth="4" style={{ fill: "none !important" }} />
      {/* Electrons on orbits */}
      <circle cx="78" cy="66" r="4.5" stroke="none" style={{ fill: "currentColor !important" }} />
      <circle cx="50" cy="14" r="4.5" stroke="none" style={{ fill: "currentColor !important" }} />
      <circle cx="22" cy="66" r="4.5" stroke="none" style={{ fill: "currentColor !important" }} />
    </svg>
  );
}

// Custom Dietary Icon matching the user's screenshots (Hollow delicate outline paths and solid white highlights)
function DietaryIcon({ x, y, width = "100%", height = "100%", className = "h-6 w-6", active = false }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" x={x} y={y} width={width} height={height} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* 4-Point Sparkles (Stars) on the left */}
      {/* Star 1 (top-left) */}
      <path d="M 16 15 Q 16 18 19 18 Q 16 18 16 21 Q 16 18 13 18 Q 16 18 Z" stroke="none" style={{ fill: "currentColor !important" }} />
      {/* Star 2 (middle-right) */}
      <path d="M 23 17 Q 23 20 26 20 Q 23 20 23 23 Q 23 20 20 20 Q 23 20 Z" stroke="none" style={{ fill: "currentColor !important" }} />
      {/* Star 3 (bottom-left) */}
      <path d="M 12 22 Q 12 24 14 24 Q 12 24 12 26 Q 12 24 10 24 Q 12 24 Z" stroke="none" style={{ fill: "currentColor !important" }} />

      {/* Pill/Injection Bottle */}
      <rect x="25" y="16" width="18" height="19" rx="3" stroke="currentColor" style={{ fill: "none !important" }} />
      <rect x="27" y="10" width="14" height="6" rx="1" stroke="currentColor" style={{ fill: "none !important" }} />
      {/* Ribbed cap lines */}
      <line x1="30" y1="10" x2="30" y2="16" strokeWidth="1.6" style={{ fill: "none !important" }} />
      <line x1="34" y1="10" x2="34" y2="16" strokeWidth="1.6" style={{ fill: "none !important" }} />
      <line x1="38" y1="10" x2="38" y2="16" strokeWidth="1.6" style={{ fill: "none !important" }} />
      {/* Bottle Label & Stripes */}
      <rect x="28" y="21" width="12" height="6" strokeWidth="1.6" stroke="currentColor" style={{ fill: "none !important" }} />
      <line x1="28" y1="30" x2="40" y2="30" strokeWidth="1.6" style={{ fill: "none !important" }} />
      <line x1="28" y1="32" x2="40" y2="32" strokeWidth="1.6" style={{ fill: "none !important" }} />

      {/* Capsule Pill (standing, slanted, split layout filled with white showing transparent slash gap) */}
      <g transform="translate(24, 28) rotate(30)">
        {/* Top half filled */}
        <path d="M -5 -0.6 L -5 -2.5 A 5 5 0 0 1 5 -2.5 L 5 -0.6 Z" style={{ fill: "currentColor !important", stroke: "none !important" }} />
        {/* Bottom half filled */}
        <path d="M 5 0.6 L 5 2.5 A 5 5 0 0 1 -5 2.5 L -5 0.6 Z" style={{ fill: "currentColor !important", stroke: "none !important" }} />
      </g>

      {/* Round Pill (slanted, split layout filled with white showing transparent slash gap) */}
      <g transform="translate(17, 33) rotate(45)">
        {/* Left half filled */}
        <path d="M -0.6 -6 A 6 6 0 0 0 -0.6 6 Z" style={{ fill: "currentColor !important", stroke: "none !important" }} />
        {/* Right half filled */}
        <path d="M 0.6 6 A 6 6 0 0 0 0.6 -6 Z" style={{ fill: "currentColor !important", stroke: "none !important" }} />
      </g>

      {/* Microscope (on the right) */}
      {/* Base */}
      <rect x="24" y="50" width="48" height="6" rx="3" stroke="currentColor" style={{ fill: "none !important" }} />
      {/* Base feet */}
      <rect x="27" y="56" width="6" height="4" rx="1.5" stroke="currentColor" style={{ fill: "none !important" }} />
      <rect x="67" y="56" width="6" height="4" rx="1.5" stroke="currentColor" style={{ fill: "none !important" }} />
      {/* Pillar / Lower Arm with focus knob */}
      <rect x="55" y="41" width="9" height="9" rx="2" stroke="currentColor" style={{ fill: "none !important" }} />
      <circle cx="59.5" cy="45.5" r="2.2" stroke="none" style={{ fill: "currentColor !important" }} />
      {/* Stage */}
      <rect x="34" y="42" width="19" height="4" rx="2" stroke="currentColor" style={{ fill: "none !important" }} />
      {/* Curved Arm */}
      <path d="M 59 41 C 70 41 74 34 74 26 C 74 18 64 21 61 28" stroke="currentColor" style={{ fill: "none !important" }} />

      {/* Slanted Microscope Tube (rotated group) */}
      <g transform="translate(58, 26) rotate(45)">
        {/* Eyepiece handle */}
        <rect x="-2" y="-12" width="4" height="4" rx="0.5" strokeWidth="1.8" stroke="currentColor" style={{ fill: "none !important" }} />
        {/* Eyepiece cap */}
        <rect x="-4" y="-8" width="8" height="3" rx="0.5" strokeWidth="1.8" stroke="currentColor" style={{ fill: "none !important" }} />
        {/* Main Body Tube */}
        <rect x="-6" y="-5" width="12" height="12" rx="1" strokeWidth="2.2" stroke="currentColor" style={{ fill: "none !important" }} />
        {/* Nosepiece circle (Solid Filled White) */}
        <circle cx="0" cy="9" r="4.5" stroke="none" style={{ fill: "currentColor !important" }} />
        {/* Objective lens */}
        <rect x="-2.5" y="13.5" width="5" height="4" rx="0.5" strokeWidth="1.8" stroke="currentColor" style={{ fill: "none !important" }} />
      </g>
    </svg>
  );
}

// Render the customized branded text title (Custom D shape and uppercase italic suffix)
const renderBrandTitle = (title: string, isHighlighted: boolean, stageColor: string, isCenter: boolean = false) => {
  const firstLetter = title.charAt(0); // 'D'
  const rest = title.slice(1).toUpperCase(); // 'ISCOVERY', etc.

  return (
    <div className="inline-flex items-center justify-center select-none" dir="ltr">
      {/* Custom Brand D */}
      <CustomD
        className={`${isCenter
          ? "h-4.5 w-4.5 sm:h-5 sm:w-5 -mr-[3px]"
          : "h-3 w-3 sm:h-3.5 sm:w-3.5 -mr-[1.5px]"
          } inline-block align-middle transition-transform duration-300`}
        style={{
          color: isHighlighted ? stageColor : "#94a3b8" // slate-400
        }}
      />
      {/* Rest of the text */}
      <span
        className={`font-semibold italic tracking-[0.05em] transition-all duration-300 ${isCenter
          ? "text-sm sm:text-base font-bold scale-100"
          : "text-[9px] sm:text-[10px]"
          }`}
        style={{
          color: isHighlighted ? stageColor : undefined
        }}
      >
        {rest}
      </span>
    </div>
  );
};

// Overview layout structure shown by default on load or when clicking the idle center circle
const overviewStage = {
  number: "5D",
  title: "Discovery", // Default/base title to prevent type crashes
  subtitle: "5D Biological Medical Model",
  description:
    "At the core of OXYZ is the 5D Biological Regenerative Medical Model. This framework ensures medical clarity before intervention, responsible regenerative application, and consistent patient journeys across all centers.",
  details: [
    "Medical Clarity: Comprehensive diagnostics before any intervention",
    "Responsible Application: Evidence-based regenerative protocols",
    "Consistent Journeys: Standardized patient care across all centers",
    "Integrative Maintenance: Ongoing nutrition and lifestyle support"
  ],
  color: "#007A59",
  glowColor: "rgba(0, 122, 89, 0.2)",
  icon: DiscoveryIcon
};

// The 5 stages of the OXYZ 5D Model (with exact colors matching 5D.png)
const stages = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Assessment & Diagnosis",
    description:
      "The Discovery phase involves comprehensive diagnostics and root-cause assessment. This forms the foundation of every OXYZ patient journey.",
    details: [
      "Comprehensive health profiling",
      "Advanced diagnostic testing",
      "Root-cause identification",
      "Personalized baseline establishment",
    ],
    color: "#007A59", // Bright Teal/Green
    gradient: "from-[#007A59] to-[#009F76]",
    glowColor: "rgba(0, 122, 89, 0.4)",
    icon: DiscoveryIcon,
  },
  {
    number: "02",
    title: "Detox",
    subtitle: "Cleanse & Optimize",
    description:
      "The Detox phase focuses on systemic burden reduction and internal environment optimization, preparing the body for regenerative interventions.",
    details: [
      "Systemic burden reduction",
      "Internal environment optimization",
      "Cellular cleansing protocols",
      "Preparation for regeneration",
    ],
    color: "#115E4C", // Deep Teal/Green
    gradient: "from-[#115E4C] to-[#1F7E68]",
    glowColor: "rgba(17, 94, 76, 0.4)",
    icon: DetoxIcon,
  },
  {
    number: "03",
    title: "Defence",
    subtitle: "Support & Strengthen",
    description:
      "Defence focuses on immune support, repair, and resilience. This phase ensures regenerative strategies are supported by a robust internal defence system.",
    details: [
      "Immune system optimization",
      "Cellular repair mechanisms",
      "Building resilience",
      "Physiological stability restoration",
    ],
    color: "#CDB06A", // Brand Gold
    gradient: "from-[#CDB06A] to-[#E5D4A1]",
    glowColor: "rgba(205, 176, 106, 0.4)",
    icon: DefenceIcon,
  },
  {
    number: "04",
    title: "Dynamic",
    subtitle: "Activation & Regeneration",
    description:
      "Dynamic represents the regenerative activation phase, where targeted interventions support cellular renewal, vitality, and anti-aging outcomes.",
    details: [
      "Cellular renewal and restoration",
      "Energy and vitality enhancement",
      "Anti-aging interventions",
      "Performance optimization",
    ],
    color: "#788A53", // Olive Green
    gradient: "from-[#788A53] to-[#8FA269]",
    glowColor: "rgba(120, 138, 83, 0.4)",
    icon: DynamicIcon,
  },
  {
    number: "05",
    title: "Dietary",
    subtitle: "Maintenance & Longevity",
    description:
      "The Dietary phase ensures regenerative gains are sustained long-term through personalized nutrition, lifestyle optimization, and ongoing support.",
    details: [
      "Personalized nutrition strategies",
      "Lifestyle optimization",
      "Habit formation support",
      "Long-term maintenance planning",
    ],
    color: "#5A7343", // Medium/Dark Green
    gradient: "from-[#5A7343] to-[#718B56]",
    glowColor: "rgba(90, 115, 67, 0.4)",
    icon: DietaryIcon,
  },
];

// Helper to calculate circular paths for SVG flow lines
const getArcPath = (startAngleDeg: number, endAngleDeg: number, r: number) => {
  const startAngleRad = (startAngleDeg * Math.PI) / 180;
  const endAngleRad = (endAngleDeg * Math.PI) / 180;
  const x1 = 50 + r * Math.cos(startAngleRad);
  const y1 = 50 + r * Math.sin(startAngleRad);
  const x2 = 50 + r * Math.cos(endAngleRad);
  const y2 = 50 + r * Math.sin(endAngleRad);
  return `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 0 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
};

// Calculate SVG path for rounded annular sector (wheel wedge)
const getAnnularSectorPath = (cx: number, cy: number, rIn: number, rOut: number, startAngleDeg: number, endAngleDeg: number) => {
  const startRad = (startAngleDeg * Math.PI) / 180;
  const endRad = (endAngleDeg * Math.PI) / 180;

  const x1_out = cx + rOut * Math.cos(startRad);
  const y1_out = cy + rOut * Math.sin(startRad);
  const x2_out = cx + rOut * Math.cos(endRad);
  const y2_out = cy + rOut * Math.sin(endRad);

  const x1_in = cx + rIn * Math.cos(endRad);
  const y1_in = cy + rIn * Math.sin(endRad);
  const x2_in = cx + rIn * Math.cos(startRad);
  const y2_in = cy + rIn * Math.sin(startRad);

  return `M ${x1_out.toFixed(2)} ${y1_out.toFixed(2)} ` +
    `A ${rOut} ${rOut} 0 0 1 ${x2_out.toFixed(2)} ${y2_out.toFixed(2)} ` +
    `L ${x1_in.toFixed(2)} ${y1_in.toFixed(2)} ` +
    `A ${rIn} ${rIn} 0 0 0 ${x2_in.toFixed(2)} ${y2_in.toFixed(2)} ` +
    `Z`;
};

// Hardcoded label details to align custom 'D' prefix with the rest of the text label (snug 0.5 gap, centered at X)
const labelPositions = [
  { title: "Discovery", dX: -7.9, textX: -5.75 },
  { title: "Detox", dX: -4.4, textX: -2.25 },
  { title: "Defence", dX: -6.15, textX: -4.0 },
  { title: "Dynamic", dX: -6.15, textX: -4.0 },
  { title: "Dietary", dX: -5.9, textX: -3.75 },
];

// Absolute centers of icon and label content within each sector, aligned vertically
const contentPositions = [
  { // Discovery (top)
    x_icon: 50.0,
    y_icon: 11.5,
    x_label: 50.0,
    y_label: 19.5,
  },
  { // Detox (top-right)
    x_icon: 81.5,
    y_icon: 32.5,
    x_label: 85.0,
    y_label: 41.0,
  },
  { // Defence (bottom-right)
    x_icon: 69.5,
    y_icon: 74.0,
    x_label: 73.5,
    y_label: 82.5,
  },
  { // Dynamic (bottom-left)
    x_icon: 30.5,
    y_icon: 74.0,
    x_label: 26.5,
    y_label: 82.5,
  },
  { // Dietary (top-left)
    x_icon: 18.5,
    y_icon: 32.5,
    x_label: 15.0,
    y_label: 41.0,
  }
];

export function FiveDModelSection({ isArabic = false }: { isArabic?: boolean }) {
  const [activeIndex, setActiveIndex] = useState(-1); // Defaults to -1 (Overview)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Initialize IntersectionObserver for scroll entrance animations
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      elements.forEach((el) => observer.observe(el));
      observers.push(observer);
    };

    animateOnScroll();

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const translatedOverviewStage = isArabic ? {
    ...overviewStage,
    subtitle: "النموذج الطبي البيولوجي خماسي الأبعاد",
    description: "أضف حلول الببتيدات المتقدمة والعلاجات الخلوية إلى ممارستك الطبية، ووسّع خدمات عيادتك من خلال نظام الهندسة الألمانية للعلاج بطب الخلايا الجذعية والببتيدات. يضمن هذا الإطار الوضوح الطبي قبل التدخل، والتطبيق التجديدي المسؤول، ورحلات المريض المتسقة عبر جميع المراكز.",
    details: [
      "الوضوح الطبي: تشخيص شامل قبل أي تدخل",
      "التطبيق المسؤول: بروتوكولات تجديدية قائمة على الأدلة",
      "رحلات متسقة: رعاية مرضى موحدة عبر جميع المراكز",
      "الصيانة التكاملية: دعم مستمر للتغذية ونمط الحياة"
    ]
  } : overviewStage;

  const translatedStages = isArabic ? stages.map(stage => {
    switch (stage.title) {
      case "Discovery":
        return {
          ...stage,
          subtitle: "التقييم والتشخيص",
          description: "تتضمن مرحلة الاكتشاف تشخيصاً شاملاً وتقييماً للأسباب الجذرية. وهذا يشكل الأساس لكل رحلة مريض في OXYZ.",
          details: [
            "ملف صحي شامل",
            "اختبارات تشخيصية متقدمة",
            "تحديد الأسباب الجذرية",
            "تأسيس خط أساس شخصي",
          ]
        };
      case "Detox":
        return {
          ...stage,
          subtitle: "التنظيف والتحسين",
          description: "تركز مرحلة الديتوكس على تقليل العبء الجهازي وتحسين البيئة الداخلية، وتهيئة الجسم للتدخلات التجديدية.",
          details: [
            "تقليل العبء الجهازي",
            "تحسين البيئة الداخلية",
            "بروتوكولات التنظيف الخلوي",
            "التحضير للتجديد",
          ]
        };
      case "Defence":
        return {
          ...stage,
          subtitle: "الدعم والتقوية",
          description: "تركز مرحلة الدفاع على دعم المناعة والإصلاح والمرونة. تضمن هذه المرحلة دعم استراتيجيات التجديد بنظام دفاع داخلي قوي.",
          details: [
            "تحسين نظام المناعة",
            "آليات الإصلاح الخلوي",
            "بناء المرونة",
            "استعادة الاستقرار الفسيولوجي",
          ]
        };
      case "Dynamic":
        return {
          ...stage,
          subtitle: "التنشيط والتجديد",
          description: "تمثل المرحلة الديناميكية مرحلة التنشيط التجديدي، حيث تدعم التدخلات المستهدفة تجديد الخلايا والحيوية ونتائج مكافحة الشيخوخة.",
          details: [
            "تجديد واستعادة الخلايا",
            "تعزيز الطاقة والحيوية",
            "تدخلات مكافحة الشيخوخة",
            "تحسين الأداء",
          ]
        };
      case "Dietary":
        return {
          ...stage,
          subtitle: "تحسين نمط الحياة",
          description: "تضمن المرحلة الغذائية استدامة المكاسب التجديدية على المدى الطويل من خلال التغذية الشخصية وتحسين نمط الحياة والدعم المستمر.",
          details: [
            "استراتيجيات التغذية الشخصية",
            "تحسين نمط الحياة",
            "دعم تكوين العادات",
            "تخطيط الصيانة على المدى الطويل",
          ]
        };
      default:
        return stage;
    }
  }) : stages;

  const displayIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
  const displayedStage = displayIndex === -1 ? translatedOverviewStage : translatedStages[displayIndex];
  const activeStageDetails = activeIndex === -1 ? translatedOverviewStage : translatedStages[activeIndex];



  // Annular sector wedges dimensions
  const R_in = 25.5;
  const R_out = 47.0;

  return (
    <>
      <style jsx global>{`
        @keyframes slow-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes reverse-slow-spin {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes radar-pulse {
          0% {
            transform: scale(0.95);
            opacity: 1;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
        .animate-slow-spin {
          transform-origin: center;
          animation: slow-spin 35s linear infinite;
        }
        .animate-reverse-slow-spin {
          transform-origin: center;
          animation: reverse-slow-spin 45s linear infinite;
        }
        .animate-radar-pulse {
          animation: radar-pulse 1.8s cubic-bezier(0.24, 0, 0.38, 1) infinite;
        }
        
        /* Scroll Entrance Animations */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-on-scroll.animated {
          opacity: 1;
          transform: translateY(0);
        }
        .slide-in-left {
          transform: translateX(-50px);
        }
        .slide-in-left.animated {
          transform: translateX(0);
        }
        .slide-in-right {
          transform: translateX(50px);
        }
        .slide-in-right.animated {
          transform: translateX(0);
        }
        .scale-in {
          transform: scale(0.92);
        }
        .scale-in.animated {
          transform: scale(1);
        }

        /* Center Node Entrance Animation */
        .center-node-animate {
          transform: scale(0) rotate(-180deg);
          opacity: 0;
          transition: transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.9s ease-out;
          transition-delay: 0.1s;
        }
        .animated .center-node-animate {
          transform: scale(1) rotate(0deg);
          opacity: 1;
        }

        /* Wedge Entrance Animation */
        .wedge-animate {
          transform: scale(0.3) rotate(-45deg);
          opacity: 0;
          transition: transform 1.0s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease-out;
        }
        .animated .wedge-animate {
          transform: scale(1) rotate(0deg);
          opacity: 1;
        }
      `}</style>

      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] mb-12">
            {/* Left Column: Interactive details panel */}
            <div className={`flex flex-col justify-center h-full animate-on-scroll ${isArabic ? 'slide-in-right' : 'slide-in-left'}`} dir={isArabic ? 'rtl' : 'ltr'}>
              {!isArabic && (
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C5A880] mb-2">
                  The 5D Framework
                </span>
              )}
              <h2 className={`font-bold text-[#007A59] mb-4 tracking-tight ${isArabic ? 'text-2xl sm:text-3xl lg:text-4xl leading-loose' : 'text-3xl sm:text-4xl lg:text-5xl leading-tight'}`}>
                {isArabic ? (
                  <>
                    حوّل عيادتك للطب التجديدي المتقدم <br className="hidden sm:block" />
                    عبر <span className="bg-[#CDB06A] text-white px-2 py-0.5 rounded-md mx-1 box-decoration-clone">برنامج الهندسة الألمانية للخلايا الجذعية والببتيدات</span>
                  </>
                ) : (
                  <>One Model.<br className="hidden sm:inline" /> Consistent Outcomes.</>
                )}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg mb-6 leading-relaxed">
                {isArabic 
                  ? "أضف حلول الببتيدات المتقدمة والعلاجات الخلوية إلى ممارستك الطبية، ووسّع خدمات عيادتك من خلال نظام الهندسة الألمانية للعلاج بطب الخلايا الجذعية والببتيدات." 
                  : "At the core of OXYZ is the 5D Biological Regenerative Medical Model."}
              </p>
              
              <div className="flex items-start gap-3 bg-[#007A59]/5 border border-[#007A59]/10 rounded-xl p-4 mb-8 max-w-lg">
                <MousePointerClick className="w-5 h-5 text-[#007A59] shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-[#007A59] leading-relaxed">
                  {isArabic 
                    ? "انقر أو مرر مؤشر الماوس فوق الأجزاء التفاعلية لاستكشاف كل مرحلة من مراحل نموذجنا السريري." 
                    : "Click or hover the interactive cycle wedges to explore each phase of our clinical model."}
                </p>
              </div>

              {/* Dynamic details card with glassmorphism */}
              <div
                className="relative bg-white/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xl shadow-slate-100 min-h-[300px] transition-all duration-300 hover:shadow-2xl hover:border-slate-300"
              >
                {/* Stage Index Watermark */}
                <div
                  className="absolute right-6 top-6 text-7xl sm:text-8xl font-black opacity-[0.04] transition-all duration-500 font-sans italic"
                  style={{ color: displayedStage.color }}
                >
                  {displayedStage.number}
                </div>

                <div key={displayedStage.number} style={{ animation: "fade-in 0.18s ease-out" }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="p-3 rounded-xl bg-white shadow-lg border border-slate-100 flex items-center justify-center"
                      style={{
                        boxShadow: `0 8px 20px -4px ${displayedStage === overviewStage ? "rgba(0,122,89,0.15)" : displayedStage.glowColor}`,
                        color: displayedStage.color
                      }}
                    >
                      <displayedStage.icon className="h-7 w-7" active={true} />
                    </div>
                    <div>
                      <div className="mt-0.5">
                        {displayedStage.number === "5D" ? (
                          <span className="text-sm sm:text-base font-bold text-[#007A59] tracking-wide select-none">
                            OXYZ Medical Model
                          </span>
                        ) : (
                          renderBrandTitle(displayedStage.title, true, displayedStage.color, true)
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-500 font-medium text-sm mb-2">{displayedStage.subtitle}</p>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {displayedStage.description}
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {displayedStage.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: displayedStage.color }} />
                        <span className="text-xs sm:text-sm text-slate-600 font-medium leading-tight">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Responsive Interactive Segmented Cycle Diagram */}
            <div className="relative flex items-center justify-center p-4 animate-on-scroll">
              <div
                className="relative w-full max-w-[460px] aspect-square"
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Interactive SVG holding wedges, center, and lines */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full select-none overflow-visible animate-fade-in">
                  <defs>
                    <filter id="shadow-glow" x="-10%" y="-10%" width="120%" height="120%">
                      <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="rgba(0,0,0,0.15)" />
                    </filter>
                  </defs>

                  {/* Concentric Rotating Outer Decorative Ring */}
                  <circle
                    cx="50"
                    cy="50"
                    r="48.5"
                    stroke="rgba(197, 168, 128, 0.1)"
                    strokeWidth="0.5"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="48.5"
                    stroke="rgba(0, 122, 89, 0.12)"
                    strokeWidth="0.5"
                    strokeDasharray="5 15"
                    fill="none"
                    className="animate-slow-spin"
                  />

                  {/* Rotating Inner dashed circle guide */}
                  <circle
                    cx="50"
                    cy="50"
                    r="23.5"
                    stroke="rgba(197, 168, 128, 0.15)"
                    strokeWidth="0.5"
                    strokeDasharray="1.5 5"
                    fill="none"
                    className="animate-reverse-slow-spin"
                  />

                  {/* Annular Sector Clickable Wedges */}
                  {stages.map((stage, idx) => {
                    const isActive = activeIndex === idx;
                    const isHovered = hoveredIndex === idx;
                    const isHighlighted = isHovered || (hoveredIndex === null && isActive);

                    // Angle vectors for sliding motion translation
                    const angleDeg = -90 + idx * 72;
                    const angleRad = (angleDeg * Math.PI) / 180;
                    const dx = Math.cos(angleRad);
                    const dy = Math.sin(angleRad);

                    // Cut and separate angles leaving a 8 degree gap between wedges
                    const startAngle = angleDeg - 32;
                    const endAngle = angleDeg + 32;
                    const wedgePath = getAnnularSectorPath(50, 50, R_in, R_out, startAngle, endAngle);

                    // Explicitly calculated positions for vertical alignment (Icon directly above text label)
                    const pos = contentPositions[idx];
                    const offsets = labelPositions[idx];
                    const IconComponent = stage.icon;

                    return (
                      <g
                        key={idx}
                        onClick={() => {
                          setActiveIndex(idx);
                          setHoveredIndex(idx);
                        }}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        className="cursor-pointer select-none outline-none group wedge-animate"
                        style={{
                          transitionDelay: `${0.2 + idx * 0.12}s`,
                          transformOrigin: "50px 50px"
                        }}
                      >
                        {/* Stationary invisible wedge for hover detection (stable hit area) */}
                        <path
                          d={wedgePath}
                          fill="transparent"
                          stroke="transparent"
                          strokeWidth="2.0"
                          style={{ pointerEvents: "all" }}
                        />

                        {/* Visual Wedge Content translated smoothly on hover */}
                        <g
                          style={{
                            transform: isHighlighted
                              ? `translate(${(dx * 3.5).toFixed(2)}px, ${(dy * 3.5).toFixed(2)}px)`
                              : "translate(0px, 0px)",
                            transition: "transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
                            filter: isHighlighted ? "url(#shadow-glow)" : "none",
                            pointerEvents: "none"
                          }}
                        >
                          {/* Wedge Sector shape with rounded stroke border */}
                          <path
                            d={wedgePath}
                            fill={stage.color}
                            stroke={stage.color}
                            strokeWidth="2.0"
                            strokeLinejoin="round"
                            className="transition-all duration-300"
                            style={{
                              opacity: isHighlighted ? 1.0 : 0.88,
                            }}
                          />

                          {/* Bigger Icon centered vertically in the upper half of the wedge */}
                          <IconComponent
                            x={(pos.x_icon - 4.25).toFixed(2)}
                            y={(pos.y_icon - 4.25).toFixed(2)}
                            width="8.5"
                            height="8.5"
                            className={`text-white transition-all duration-300 ${isHighlighted ? "opacity-100 scale-105" : "opacity-75 group-hover:opacity-100"
                              }`}
                            active={isHighlighted}
                          />

                          {/* Bigger Label centered vertically below the icon (Custom D + Text) with strict inline fill styles */}
                          <g className="transition-all duration-300" style={{ opacity: isHighlighted ? 1.0 : 0.78 }}>
                            {/* Custom Concentric D */}
                            {drawTinyD(pos.x_label + offsets.dX, pos.y_label)}

                            {/* Rest of the text suffix */}
                            <text
                              x={(pos.x_label + offsets.textX).toFixed(2)}
                              y={(pos.y_label + 0.9).toFixed(2)}
                              fill="white"
                              fontSize="3.0"
                              fontWeight="900"
                              fontStyle="italic"
                              letterSpacing="0.08"
                              textAnchor="start"
                              style={{ fill: "white" }}
                            >
                              {stage.title.slice(1).toUpperCase()}
                            </text>
                          </g>
                        </g>
                      </g>
                    );
                  })}
                </svg>

                {/* Central Clickable Glassmorphic Node (Returns to Overview on Click) */}
                <button
                  onClick={() => {
                    setActiveIndex(-1);
                    setHoveredIndex(null);
                  }}
                  onMouseEnter={() => setHoveredIndex(null)}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[52%] h-[52%] bg-white/95 backdrop-blur-lg rounded-full border border-slate-200 shadow-2xl flex flex-col items-center justify-center p-4 transition-all duration-300 hover:scale-[1.02] cursor-pointer outline-none focus:outline-none center-node-animate"
                  style={{
                    boxShadow: `0 12px 35px -6px rgba(0,0,0,0.06), 0 0 20px 2px ${activeStageDetails.glowColor}`
                  }}
                >
                  <div
                    key={displayIndex}
                    className="w-full h-full flex flex-col items-center justify-center"
                    style={{ animation: "fade-in 0.18s ease-out" }}
                  >
                    {displayIndex === -1 ? (
                      <div className="absolute inset-[4%] flex items-center justify-center">
                        <img
                          src="/images/5D/5D.png"
                          alt="5D Model Logo"
                          className="w-full h-full object-contain select-none pointer-events-none"
                          style={{ transform: "scale(2.8)" }}
                        />
                      </div>
                    ) : (
                      // Hover/Active stage display
                      <div className="text-center flex flex-col items-center justify-center">
                        <span
                          className="text-4xl sm:text-5xl font-black tracking-tighter italic leading-none"
                          style={{ color: displayedStage.color }}
                        >
                          {displayedStage.number}
                        </span>
                        <div className="mt-1">
                          {renderBrandTitle(displayedStage.title, true, displayedStage.color, true)}
                        </div>
                        <span className="text-[8px] sm:text-[9px] font-medium text-slate-400 max-w-[110px] leading-tight mt-1 text-center truncate">
                          {displayedStage.subtitle}
                        </span>
                      </div>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* CTA Links and Details Button */}
          <div className="text-center mt-12 animate-on-scroll" dir={isArabic ? 'rtl' : 'ltr'}>
            <Link href="/5d-model">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                {isArabic ? (
                  <span className="flex items-center gap-1">
                    <span>استكشف نموذج</span>
                    <span dir="ltr">5D</span>
                  </span>
                ) : (
                  "Explore the 5D Model"
                )}
                {isArabic ? (
                  <ArrowLeft className="mr-2 h-5 w-5 animate-pulse" />
                ) : (
                  <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
                )}
              </Button>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 mt-4 font-medium tracking-wide">
              {isArabic ? "* انقر أو مرر مؤشر الماوس فوق الأبعاد أعلاه لاكتشاف التفاصيل السريرية" : "* Click or hover the dimensions above to discover clinical details"}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
