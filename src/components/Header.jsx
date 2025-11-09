import { Rocket, Bot } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-zinc-900/70 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-orange-400 text-white shadow-md">
              <Bot size={20} />
            </div>
            <span className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">LeadPilot AI</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600 dark:text-zinc-300">
            <a href="#features" className="hover:text-zinc-900 dark:hover:text-white transition">Features</a>
            <a href="#how" className="hover:text-zinc-900 dark:hover:text-white transition">How it works</a>
            <a href="#pricing" className="hover:text-zinc-900 dark:hover:text-white transition">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#demo" className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-zinc-300/70 dark:border-zinc-700 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">Demo</a>
            <a href="#get-started" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-orange-400 px-4 py-2 text-sm font-medium text-white shadow hover:shadow-lg transition">
              <Rocket size={16} />
              Get started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
