import React from "react";
import { motion } from "framer-motion";

export default function LiquidityPool() {
  return (
    <section className="flex flex-col items-center justify-center py-20 border-t border-gray-700">
      <motion.h2 className="text-4xl font-semibold mb-6" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
        Liquidity Pools
      </motion.h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}>
        <div className="bg-gray-900 p-6 rounded-lg border border-white/10">Pool A</div>
        <div className="bg-gray-900 p-6 rounded-lg border border-white/10">Pool B</div>
        <div className="bg-gray-900 p-6 rounded-lg border border-white/10">Pool C</div>
      </motion.div>
    </section>
  );
}