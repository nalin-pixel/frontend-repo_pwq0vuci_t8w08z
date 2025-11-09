import { Sparkles, PhoneCall, Calendar, Mail } from "lucide-react";

const features = [
  {
    icon: PhoneCall,
    title: "Conversational outreach",
    desc: "Natural voice calls that qualify leads and answer objections in real-time."
  },
  {
    icon: Mail,
    title: "Multi-channel follow-ups",
    desc: "Sequenced SMS and emails that keep prospects engaged automatically."
  },
  {
    icon: Calendar,
    title: "Instant scheduling",
    desc: "Drop meetings onto your calendar as soon as intent is detected."
  },
  {
    icon: Sparkles,
    title: "CRM-native",
    desc: "Logs, notes, and outcomes sync to your pipeline with zero manual work."
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28 bg-gradient-to-b from-transparent to-zinc-50 dark:to-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">Everything a modern lead engine needs</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">Purpose-built automations that turn interest into booked calls while your team sleeps.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-zinc-200/70 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/60 backdrop-blur p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-orange-400 text-white shadow">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-zinc-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
