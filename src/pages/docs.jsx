import React from 'react';
import Link from 'next/link';

export default function Docs() {
  return (
    <div className="bg-black text-white min-h-screen p-10 font-sans">
      <h1 className="text-4xl font-bold mb-6">Morphic Documentation</h1>
      <ul className="list-disc list-inside space-y-2">
        <li><Link href="/docs/protocol.md" className="hover:text-gray-400">Protocol</Link></li>
        <li><Link href="/docs/faq.md" className="hover:text-gray-400">FAQ</Link></li>
      </ul>
    </div>
  );
}