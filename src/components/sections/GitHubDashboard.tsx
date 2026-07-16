import { useEffect, useState } from "react";
import { githubUsername, profile } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import { Github, ExternalLink } from "lucide-react";

type GhUser = {
  avatar_url: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
};

const GitHubDashboard = () => {
  const [user, setUser] = useState<GhUser | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(`https://api.github.com/users/${githubUsername}`)
      .then((r) => {
        if (!r.ok) throw new Error("User fetch failed");
        return r.json();
      })
      .then((u) => {
        if (cancelled) return;
        setUser(u);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="section-padding relative">
      <div className="container mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            <span className="glow-text">GitHub</span> Dashboard
          </h2>
          <p className="text-center text-sm text-muted-foreground mb-12 font-mono">
            $ curl api.github.com/users/{githubUsername}
          </p>
        </Reveal>

        {error && (
          <Reveal>
            <div className="glass-card p-6 text-center text-sm text-muted-foreground">
              Couldn't reach the GitHub API right now. View the profile directly:{" "}
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                {profile.socials.github}
              </a>
            </div>
          </Reveal>
        )}

        {!error && (
          <>
            {/* Profile Summary */}
            <Reveal delay={80}>
              <div className="glass-card p-6 md:p-8 mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {user ? (
                  <img
                    src={user.avatar_url}
                    alt={githubUsername}
                    className="w-20 h-20 rounded-full border-2 border-accent/40"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-secondary animate-pulse" />
                )}

                <div className="flex-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <Github size={18} className="text-accent" />
                    <h3 className="font-semibold text-lg">
                      @{githubUsername}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {user?.bio ??
                      "Building and breaking things in cyber security."}
                  </p>

                  <div className="flex justify-center sm:justify-start gap-6 text-sm">
                    <span>
                      <strong className="text-accent">
                        {user?.public_repos ?? "—"}
                      </strong>{" "}
                      <span className="text-muted-foreground">Repos</span>
                    </span>

                    <span>
                      <strong className="text-accent">
                        {user?.followers ?? "—"}
                      </strong>{" "}
                      <span className="text-muted-foreground">Followers</span>
                    </span>

                    <span>
                      <strong className="text-accent">
                        {user?.following ?? "—"}
                      </strong>{" "}
                      <span className="text-muted-foreground">Following</span>
                    </span>
                  </div>
                </div>

                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-button text-sm shrink-0 flex items-center gap-2"
                >
                  <ExternalLink size={15} />
                  View Profile
                </a>
              </div>
            </Reveal>

            {/* GitHub Stats */}
            <Reveal delay={140}>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=06B6D4&icon_color=3B82F6&text_color=c9d1d9`}
                  alt="GitHub Stats"
                  className="w-full rounded-xl"
                  loading="lazy"
                />

                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=06B6D4&text_color=c9d1d9`}
                  alt="Top Languages"
                  className="w-full rounded-xl"
                  loading="lazy"
                />
              </div>
            </Reveal>

            {/* Contribution Streak */}
            <Reveal delay={180}>
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=tokyonight&hide_border=true&background=00000000&ring=06B6D4&fire=3B82F6&currStreakLabel=06B6D4`}
                alt="GitHub Streak"
                className="w-full rounded-xl"
                loading="lazy"
              />
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
};

export default GitHubDashboard;