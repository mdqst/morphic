import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      <motion.h1 className="text-6xl font-bold mb-6" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
        Morphic
      </motion.h1>
      <motion.p className="text-xl max-w-xl" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
        The next-generation liquidity protocol. Manage, analyze, and interact with crypto pools efficiently and securely.
      </motion.p>
    </section>
  );
}