import { tryhackme } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import {
  Trophy,
  Award,
  Flame,
  BookOpen,
  ExternalLink,
} from "lucide-react";

const stats = [
  {
    label: "Global Rank",
    value: tryhackme.rank,
    icon: Trophy,
  },
  {
    label: "Badges",
    value: tryhackme.badges,
    icon: Award,
  },
  {
    label: "Completed Rooms",
    value: tryhackme.roomsCompleted,
    icon: BookOpen,
  },
  {
    label: "Streak",
    value: tryhackme.streakDays,
    icon: Flame,
  },
];

const TryHackMeDashboard = () => {
  return (
    <section id="tryhackme" className="section-padding relative">
      <div className="container mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            <span className="glow-text">TryHackMe</span> Dashboard
          </h2>

          <p className="text-center text-sm text-muted-foreground mb-12 font-mono">
            $ whoami --platform=tryhackme
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8">

          {/* Profile Card */}
          <Reveal delay={80}>
            <div className="glass-card p-8">

              <div className="flex items-center gap-5">

                <img
                  src="/1000105413.png"
                  alt="Prakanth"
                  className="w-28 h-28 rounded-full border-4 border-cyan-500 object-cover"
                  />

                <div>

                  <h3 className="text-3xl font-bold">
                    prakanth20
                  </h3>

                  <p className="text-muted-foreground mt-1">
                    [0xF][TITAN]
                  </p>

                  <div className="flex gap-2 mt-3">

                    <span className="px-3 py-1 rounded-full bg-primary/20 text-xs">
                      🇮🇳 India
                    </span>

                    <span className="px-3 py-1 rounded-full bg-accent/20 text-xs">
                      Student
                    </span>

                  </div>

                </div>

              </div>

              <div className="mt-8">

                <a
                  href={tryhackme.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-button inline-flex items-center gap-2"
                >
                  <ExternalLink size={16} />
                  View TryHackMe Profile
                </a>

              </div>

            </div>
          </Reveal>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 gap-4">

            {stats.map((stat, index) => {

              const Icon = stat.icon;

              return (

                <Reveal key={stat.label} delay={100 + index * 60}>

                  <div className="glass-card-hover p-6 flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">

                      <Icon className="text-accent" size={22} />

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold">
                        {stat.value}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>

                    </div>

                  </div>

                </Reveal>

              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
};

export default TryHackMeDashboard;