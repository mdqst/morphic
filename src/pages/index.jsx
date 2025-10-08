import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import LiquidityPool from "../components/LiquidityPool";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <HeroSection />
      </motion.div>
      <LiquidityPool />
      <Footer />
    </div>
  );
}