"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export function RetroComputer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax: image zooms and fades slightly as you scroll
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.8, 0]);

  // Overlay fades in darker near the bottom to transition into Vflix black
  const overlayOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  // Scroll hint fades out early
  const hintOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-[#050505]">
      {/* Sticky hero that fills the viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* ── Full-screen collage image ── */}
        <motion.div
          style={{ scale: imgScale, opacity: imgOpacity }}
          className="absolute inset-0 origin-center"
        >
          <Image
            src="/hero-collage.jpg"
            alt="Vanshika Soni – Developer · AI · Machine Learning"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>

        {/* Subtle dark vignette on edges so text pops */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        {/* Bottom-to-black fade that transitions into the Vflix section */}
        <motion.div
          style={{ opacity: overlayOpacity, position: "absolute", inset: 0, pointerEvents: "none" }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(5,5,5,0.6) 60%, #050505 100%)",
            }}
          />
        </motion.div>

        {/* ── Scroll cue ── */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.5em]">
            Scroll to enter
          </span>
          <ChevronDown size={18} className="animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
}
