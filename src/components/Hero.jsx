import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white dark:from-zinc-950/70 dark:via-zinc-950/40 dark:to-zinc-950" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-zinc-200/80 dark:border-zinc-700/60 bg-white/70 dark:bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-200 backdrop-blur">
            AI Voice Agent • Lead Automation
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-fuchsia-500 to-orange-400 bg-clip-text text-transparent">
            Turn cold prospects into warm conversations
          </h1>
          <p className="mt-5 text-lg sm:text-xl leading-8 text-zinc-700 dark:text-zinc-300">
            Meet your autonomous lead agent that qualifies, schedules, and nurtures 24/7 — through voice, SMS, and email — so your team closes more deals with less effort.
          </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-orange-400 px-6 py-3 text-white font-medium shadow-lg hover:shadow-xl transition w-full sm:w-auto">Start free</a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-xl border border-zinc-300/70 dark:border-zinc-700 px-6 py-3 text-zinc-800 dark:text-zinc-200 bg-white/70 dark:bg-zinc-900/60 backdrop-blur hover:bg-white transition w-full sm:w-auto">Watch demo</a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
            <div className="rounded-xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur border border-zinc-200/70 dark:border-zinc-700 p-4">
              <div className="text-3xl font-bold text-zinc-900 dark:text-white">+37%</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">Lift in SQLs</div>
            </div>
            <div className="rounded-xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur border border-zinc-200/70 dark:border-zinc-700 p-4">
              <div className="text-3xl font-bold text-zinc-900 dark:text-white">-52%</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">Time-to-first-contact</div>
            </div>
            <div className="rounded-xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur border border-zinc-200/70 dark:border-zinc-700 p-4">
              <div className="text-3xl font-bold text-zinc-900 dark:text-white">99.9%</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">Uptime</div>
            </div>
            <div className="rounded-xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur border border-zinc-200/70 dark:border-zinc-700 p-4">
              <div className="text-3xl font-bold text-zinc-900 dark:text-white">24/7</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">Always on</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
