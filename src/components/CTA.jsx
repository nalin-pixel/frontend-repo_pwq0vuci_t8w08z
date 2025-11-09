export default function CTA() {
  return (
    <section id="get-started" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-zinc-200/70 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/60 backdrop-blur">
          <div className="px-6 py-10 sm:px-12 sm:py-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">Launch your AI lead agent in minutes</h3>
              <p className="mt-3 text-zinc-600 dark:text-zinc-300">Connect your CRM, pick a playbook, and let the agent handle outreach and qualification end-to-end.</p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-700 dark:text-zinc-200">
                <li>• Prebuilt scripts for B2B funnels</li>
                <li>• Human handoff and notes</li>
                <li>• Calendar + CRM integrations</li>
                <li>• Real-time analytics</li>
              </ul>
            </div>

            <form className="bg-zinc-50/70 dark:bg-zinc-950/50 rounded-2xl p-4 sm:p-6 border border-zinc-200/70 dark:border-zinc-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input type="text" placeholder="Full name" className="w-full rounded-xl border border-zinc-300/70 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/60 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-fuchsia-500" />
                <input type="email" placeholder="Work email" className="w-full rounded-xl border border-zinc-300/70 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/60 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-fuchsia-500" />
                <input type="text" placeholder="Company" className="w-full rounded-xl border border-zinc-300/70 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/60 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-fuchsia-500 sm:col-span-2" />
              </div>
              <button type="button" className="mt-4 w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-orange-400 px-5 py-3 text-white font-medium shadow hover:shadow-lg transition">Get a demo</button>
              <p className="mt-3 text-xs text-zinc-500">No credit card required.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
