import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function Footer() {
  return (
    <footer className="py-10 border-t border-zinc-200/70 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} LeadPilot AI. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Privacy</a>
          <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Terms</a>
          <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Status</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-dvh bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
