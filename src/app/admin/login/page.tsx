"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, Mail, ArrowRight, ArrowLeft, ShieldCheck, Sparkles, RefreshCw, AlertCircle } from "lucide-react";
import { authApi } from "@/lib/api";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingInitialAuth, setCheckingInitialAuth] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    // Check if already authenticated via session cookie
    async function checkCurrentSession() {
      try {
        const user = await authApi.getMe();
        if (user) {
          router.push("/admin");
          return;
        }
      } catch {
        // Not authenticated, stay on login page
      } finally {
        setCheckingInitialAuth(false);
      }
    }
    checkCurrentSession();
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setErrorMessage("Please enter your admin email address.");
      return;
    }
    if (!password) {
      setErrorMessage("Please enter your password.");
      return;
    }

    try {
      setLoading(true);
      await authApi.login({
        email: trimmedEmail,
        password,
      });

      router.push("/admin");
    } catch (err: any) {
      setLoading(false);
      setErrorMessage(
        err?.message || "Invalid credentials. Please verify your email and password."
      );
    }
  };

  if (checkingInitialAuth) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <RefreshCw className="w-8 h-8 text-[#f2c301] animate-spin" />
          <p className="text-xs text-zinc-400 font-medium">Verifying admin session...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col justify-between relative overflow-hidden selection:bg-[#f2c301]/30">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#f2c301]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="p-4 sm:p-6 relative z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-xs text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">Back to Yashree Website</span>
          </Link>

          <span className="text-xs text-[#f2c301] font-mono flex items-center gap-1.5 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800 flex-shrink-0">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Admin Portal</span>
          </span>
        </div>
      </header>

      {/* Center Login Box */}
      <main className="flex-1 flex items-center justify-center p-3.5 sm:p-4 relative z-10">
        <div className="max-w-md w-full bg-zinc-900/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-8 sm:p-10 border-2 border-amber-300/50 shadow-2xl space-y-5 sm:space-y-6">
          {/* Logo & Heading */}
          <div className="text-center space-y-2.5 sm:space-y-3">
            <div className="relative w-36 sm:w-44 h-10 sm:h-12 mx-auto">
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

            <h1 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
              Sign In to Admin Desk
            </h1>
            <p className="text-xs text-zinc-400">
              Enter your authorized Yashree administrator credentials.
            </p>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs flex items-start gap-2.5 animate-in fade-in-0 duration-200">
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                Admin Email <span className="text-[#f2c301] font-bold">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="admin@yashreeinstitute.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-800/90 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#f2c301] transition-colors"
                />
                <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                Password <span className="text-[#f2c301] font-bold">*</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="Enter your password"
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
              className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-[#f2c301] via-[#d4af37] to-[#e6b800] hover:brightness-105 active:scale-[0.99] transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer font-sans disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-zinc-950" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 sm:p-6 text-center text-xs text-zinc-600 relative z-10">
        © 2026 Yashree Institute of Cosmetology &amp; Aesthetics. All Rights Reserved.
      </footer>
    </div>
  );
}
