import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 border-b border-white/10">
      <h1 className="text-2xl font-bold">Morphic</h1>
      <ul className="flex gap-6">
        <li><a href="#hero" className="hover:text-gray-400">Home</a></li>
        <li><a href="#pools" className="hover:text-gray-400">Pools</a></li>
        <li><a href="/docs" className="hover:text-gray-400">Docs</a></li>
      </ul>
    </nav>
  );
}