"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function RetroComputer() {
  const [text, setText] = useState("");
  const fullText = "Initialize sequence...\nAccessing Vanshika's Database...\nLoading cinematic experience...\nScroll to enter the VFlix world.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="crt-container relative flex min-h-screen flex-col items-center justify-center bg-black px-6">
      <div className="relative aspect-[4/3] w-full max-w-4xl overflow-hidden rounded-[2rem] border-[12px] border-[#1a1a1a] bg-[#050505] shadow-[0_0_50px_rgba(229,9,20,0.2)] sm:border-[20px]">
        {/* CRT Screen */}
        <div className="crt-screen relative h-full w-full p-8 font-mono text-[#e50914] sm:p-12">
          <div className="scanline" />
          
          <div className="grid h-full gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div className="flex flex-col justify-between">
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-4 text-sm font-bold opacity-70"
                >
                  [SYSTEM_READY_V1.0.0]
                </motion.div>
                <h1 className="crt-glow mb-6 text-3xl font-black uppercase tracking-tighter sm:text-5xl">
                  Vanshika Soni
                </h1>
                <div className="whitespace-pre-wrap text-lg leading-relaxed text-zinc-400">
                  {text}
                  <span className="ml-1 inline-block h-5 w-2 animate-pulse bg-[#e50914]" />
                </div>
              </div>
              
              <div className="mt-8 hidden lg:block">
                <div className="mb-2 text-xs font-bold text-zinc-600">ACTIVE_PROJECTS</div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-2 w-12 bg-zinc-800" />
                  ))}
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative aspect-square w-full max-w-[280px] grayscale brightness-75 contrast-125 sepia-[.5] hue-rotate-[-30deg]"
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#e5091422] to-transparent mix-blend-overlay" />
                <Image
                  src="/retro-avatar.png"
                  alt="Retro Avatar"
                  fill
                  className="rounded object-cover"
                />
                <div className="absolute inset-0 border-2 border-[#e5091433] opacity-50" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#profiles"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 flex cursor-pointer flex-col items-center gap-2 text-zinc-500 transition hover:text-white"
      >
        <span className="text-xs font-bold uppercase tracking-[0.3em]">Scroll to enter</span>
        <ChevronDown size={20} />
      </motion.a>
    </section>
  );
}
