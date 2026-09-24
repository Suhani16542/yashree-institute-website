"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, User, ArrowRight, ArrowLeft, ShieldCheck, Sparkles, KeyRound } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("yashree2026");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If already logged in, redirect to admin dashboard
    const isAuth = sessionStorage.getItem("yashree_admin_auth");
    if (isAuth === "true") {
      router.push("/admin");
    }
  }, [router]);

  const proceedToDashboard = (user: string) => {
    setLoading(true);
    sessionStorage.setItem("yashree_admin_auth", "true");
    sessionStorage.setItem("yashree_admin_user", user || "Admin");
    setTimeout(() => {
      router.push("/admin");
    }, 200);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Allow ANY username and password in demo/testing mode
    proceedToDashboard(username || "Admin");
  };

  const handleOneClickLogin = () => {
    proceedToDashboard("Administrator");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col justify-between relative overflow-hidden selection:bg-[#f2c301]/30">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#f2c301]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="p-6 relative z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Yashree Institute Website</span>
          </Link>

          <span className="text-xs text-[#f2c301] font-mono flex items-center gap-1.5 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Demo Mode Active</span>
          </span>
        </div>
      </header>

      {/* Center Login Box */}
      <main className="flex-1 flex items-center justify-center p-4 relative z-10">
        <div className="max-w-md w-full bg-zinc-900/95 backdrop-blur-md rounded-3xl p-8 sm:p-10 border-2 border-amber-300/50 shadow-2xl space-y-6">
          {/* Logo & Heading */}
          <div className="text-center space-y-3">
            <div className="relative w-44 h-12 mx-auto">
              <Image
                src="/images/logo.png"
                alt="Yashree Institute Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2c301]/20 border border-amber-400/30 text-[#f2c301] text-[10px] font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Institutional Admin Portal</span>
            </div>

            <h1 className="text-2xl font-serif font-bold text-white tracking-tight">
              Sign In to Admin Desk
            </h1>
            <p className="text-xs text-zinc-400">
              Demo mode enabled: Click the button below or enter any username/password.
            </p>
          </div>

          {/* Quick 1-Click Access Button */}
          <button
            type="button"
            onClick={handleOneClickLogin}
            disabled={loading}
            className="w-full py-4 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 shimmer-btn gold-shadow hover:scale-102 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <KeyRound className="w-4 h-4" />
            <span>{loading ? "Logging in..." : "⚡ 1-Click Direct Demo Login"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3">
            <span className="h-px flex-1 bg-zinc-800" />
            <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">
              Or Custom Sign In
            </span>
            <span className="h-px flex-1 bg-zinc-800" />
          </div>

          {/* Custom Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                Username or Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="admin or any username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-800/90 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#f2c301] transition-colors"
                />
                <User className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                Passcode / Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Any password (e.g. yashree2026 or 123)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-800/90 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#f2c301] transition-colors"
                />
                <Lock className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-zinc-200 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-amber-400/50 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <span>Sign In with Entered Details</span>
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-xs text-zinc-600 relative z-10">
        © 2026 Yashree Institute of Cosmetology &amp; Aesthetics. All Rights Reserved.
      </footer>
    </div>
  );
}
