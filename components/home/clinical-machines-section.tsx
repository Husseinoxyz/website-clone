"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Pin, Plus, Eye } from "lucide-react";

const machineImages = [
  {
    alt: "BR Scan",
    src: "/images/Machines/Machine/BR Scan.png",
    plainSrc: "/images/Machines/BR scan.jpg",
    notes: "Advanced Bio-Resonance scanning designed to assess each individual's health at the cellular level by measuring the cells' electromagnetic frequencies."
  },
  {
    alt: "Colon Hydrotherapy",
    src: "/images/Machines/Machine/Colon.png",
    plainSrc: "/images/Machines/Clon Hydrotherapy.jpg",
    notes: "A gentle cleansing therapy using warm, sterile water to flush the colon, supporting detoxification and digestive health."
  },
  {
    alt: "ECG Analysis",
    src: "/images/Machines/Machine/ECG.png",
    plainSrc: "/images/Machines/Electrocardiogram(ESG).jpg",
    notes: "Precise cardiac activity mapping and electrocardiogram diagnostics to monitor heart rhythm and general cardiovascular health."
  },
  {
    alt: "Live Blood Analysis",
    src: "/images/Machines/Machine/LBA.png",
    plainSrc: "/images/Machines/Live Blood Analysis.jpg",
    notes: "An interactive assessment examining a fresh drop of blood under a high-powered microscope to observe live cellular activity and immunity levels in real-time."
  },
  {
    alt: "HRV Assessment",
    src: "/images/Machines/Machine/HRV.png",
    plainSrc: "/images/Machines/Heart rate Variability Analysis ( HRV).jpeg",
    notes: "Measures millisecond variations between heartbeats to evaluate autonomic nervous system performance and stress resilience."
  },
  {
    alt: "IHHT Therapy",
    src: "/images/Machines/Machine/IHHT.png",
    plainSrc: "/images/Machines/Machine/IHHT.png",
    notes: "Intermittent Hypoxia-Hyperoxia Training alternates between low- and high- oxygen levels to stimulate mitochondrial renewal and boost cellular energy."
  }
];

// Typewriter animation component for interactive flashcard notes
function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
    let currentText = "";
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        currentText += text.charAt(index);
        setDisplayedText(currentText);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20); // 20ms per character typing speed

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}</span>;
}


export function ClinicalMachinesSection() {
  const [selectedMachine, setSelectedMachine] = useState<typeof machineImages[0] | null>(null);

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Clear Clinic Image Background - simulating a wall */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/images/Machines/Machine/Our clinic.jpg"
          alt="Clinic Background"
          fill
          sizes="100vw"
          priority
          className="object-cover blur-[0.5px] scale-[1.01] opacity-65"
        />
        {/* Soft shadow overlay for high-end wall depth */}
        <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-60" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-8 border-b border-slate-200/50 pb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-[#007A59] tracking-wide border-l-4 border-[#CDB06A] pl-3">
            OXYZ Medical Technology Gallery
          </h3>
        </div>

        {/* Pinned Image Grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-10 pt-4">
          {machineImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedMachine(img)}
              className="w-full max-w-[340px] sm:w-[320px] md:w-[340px] group rounded-2xl relative aspect-[4/5] shadow-lg bg-white transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/25 border border-slate-200/40 cursor-pointer"
            >
              {/* Floating Plus/Info Badge */}
              <div className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-[#CDB06A]/30 flex items-center justify-center text-[#007A59] transition-all duration-300 group-hover:bg-[#007A59] group-hover:text-white group-hover:border-[#007A59]">
                <Plus className="w-5 h-5 transition-transform duration-500 group-hover:rotate-90" />
              </div>

              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 320px, 340px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />

                {/* Eye Icon Hover Overlay */}
                <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-white/95 shadow-xl border border-slate-200/50 flex items-center justify-center text-[#007A59] transform scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>

                {/* Premium Interactive Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#CDB06A]/5 to-[#CDB06A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Flash Card Popup Modal */}
      {selectedMachine && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 transition-all duration-300 animate-in fade-in"
          onClick={() => setSelectedMachine(null)}
        >
          <div
            className="w-full max-w-md bg-white rounded-3xl border border-[#CDB06A]/20 shadow-2xl overflow-hidden relative p-6 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMachine(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-[#007A59] transition-colors p-1.5 rounded-full hover:bg-slate-100 z-30"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Flash Card Image */}
            <div className="mt-4 mb-5 flex justify-center bg-slate-50/50 rounded-2xl border border-slate-100 relative h-56 w-full overflow-hidden shadow-inner">
              <Image
                src={selectedMachine.plainSrc}
                alt={selectedMachine.alt}
                fill
                sizes="400px"
                className="object-cover rounded-xl"
              />
            </div>

            {/* Lined Index Flashcard Paper style */}
            <div className="text-center">
              <span className="text-[10px] sm:text-xs font-bold text-[#CDB06A] bg-[#CDB06A]/10 border border-[#CDB06A]/20 px-2.5 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                Technology Profile
              </span>

              {/* Title with Pinned Icon next to it */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <h4 className="text-xl font-extrabold text-[#007A59]">
                  {selectedMachine.alt}
                </h4>
                {/* Real Lucide Pin icon */}
                <Pin className="w-5 h-5 text-red-600 fill-red-600 drop-shadow-sm -rotate-45 flex-shrink-0" />
              </div>

              {/* Lined Paper Note Card */}
              <div
                className="relative bg-[#FEFCF5] border border-slate-200/80 rounded-2xl p-5 shadow-inner text-left mb-6 overflow-hidden min-h-[140px]"
                style={{
                  backgroundImage: "repeating-linear-gradient(transparent, transparent 27px, #e8e2cf 28px)"
                }}
              >
                {/* Lined Paper Vertical Margin Line */}
                <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-red-300/60" />

                {/* Content aligned to lined background */}
                <div className="pl-6 pt-1 font-serif italic text-slate-700 text-sm leading-[28px] tracking-wide">
                  <TypewriterText text={selectedMachine.notes} />
                  {/* Blinking typewriter cursor */}
                  <span className="inline-block w-2 h-4 ml-1 bg-[#CDB06A] animate-pulse" />
                </div>
              </div>

              {/* Done Button */}
              <button
                onClick={() => setSelectedMachine(null)}
                className="w-full py-3 bg-[#007A59] hover:bg-[#005e44] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


