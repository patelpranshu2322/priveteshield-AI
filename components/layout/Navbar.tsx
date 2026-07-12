"use client";

import Link from "next/link";
import { Shield } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-cyan-400" />
          <span className="text-xl font-bold text-white">
            PrivateShield AI
          </span>
        </Link>

        <div className="hidden gap-8 md:flex">
          <Link href="#" className="text-gray-300 hover:text-cyan-400">
            Features
          </Link>

          <Link href="#" className="text-gray-300 hover:text-cyan-400">
            Docs
          </Link>

          <Link href="#" className="text-gray-300 hover:text-cyan-400">
            GitHub
          </Link>
        </div>

        <button className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-black transition hover:bg-cyan-400">
          Launch App
        </button>
      </div>
    </nav>
  );
}
