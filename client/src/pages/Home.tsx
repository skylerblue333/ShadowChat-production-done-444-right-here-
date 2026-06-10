import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Card, IconTile, ModuleTile, type Accent } from "@/components/ui/sk";
import { useLocation } from "wouter";
import {
  Cpu, GraduationCap, Gamepad2, Vote, BarChart3, Heart, ShoppingBag,
  ArrowRight, Zap, Shield, Globe, Sparkles, Users, TrendingUp, Gem,
} from "lucide-react";

const MODULES: { href: string; label: string; desc: string; icon: any; accent: Accent }[] = [
  { href: "/engineer", label: "HopeAI Engineer", desc: "Live AI code generation, review, security audits & debugging.", icon: Cpu, accent: "cyan" },
  { href: "/school", label: "Sky School", desc: "AI-powered courses, lessons & personalized learning paths.", icon: GraduationCap, accent: "purple" },
  { href: "/arcade", label: "Arcade", desc: "Blackjack, Roulette, Tic-Tac-Toe, Dice & Snake with charity stakes.", icon: Gamepad2, accent: "magenta" },
  { href: "/governance", label: "Governance", desc: "DODGE & Trump Coin proposals, voting & staking power.", icon: Vote, accent: "green" },
  { href: "/analytics", label: "Analytics", desc: "Real-time platform metrics, revenue trends & engagement.", icon: BarChart3, accent: "amber" },
  { href: "/charity", label: "Charity", desc: "Transparent campaigns, donations & live impact tracking.", icon: Heart, accent: "magenta" },
  { href: "/marketplace", label: "Marketplace", desc: "AI recommendations & SKY444 / DODGE / Trump Coin checkout.", icon: ShoppingBag, accent: "purple" },
];

export default function Home() {
  const { data: stats } = trpc.analytics.platformStats.useQuery();
  const [, navigate] = useLocation();

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-10 left-1/4 w-72 h-72 rounded-full blur-3xl" style={{ background: "oklch(0.62 0.2 295 / 0.18)" }} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: "oklch(0.82 0.15 200 / 0.12)" }} />
        </div>

        <div className="container relative py-24 lg:py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/60 text-sm text-[var(--neon-cyan)] mb-8">
            <Sparkles className="w-4 h-4" /> Welcome to the Future
          </div>
          <h1 className="font-extrabold text-5xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl mx-auto">
            One Platform. <span className="gradient-text">One Identity.</span> Unlimited Opportunity.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            SKYCOIN4444 is a comprehensive AI-powered digital ecosystem that brings together
            learning, creation, commerce, gaming, governance and community into one unified platform.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="/onboarding"
              className="sk-gradient px-7 py-3.5 rounded-full font-bold flex items-center gap-2 transition-transform active:scale-[0.97]"
            >
              Start Tour <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/dashboard"
              className="sk-gradient px-7 py-3.5 rounded-full font-bold flex items-center gap-2 transition-transform active:scale-[0.97]"
            >
              Go to Dashboard <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/engineer"
              className="px-7 py-3.5 rounded-full font-semibold border border-border bg-card/60 hover:bg-secondary transition-colors"
            >
              Launch HopeAI
            </Link>
          </div>

          {/* STATS */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Sparkles, accent: "cyan" as Accent, label: "Platform Features", value: stats?.features ?? 0, fmt: (n: number) => `${Math.round(n)}` },
              { icon: Users, accent: "purple" as Accent, label: "Community Users", value: stats?.users ?? 0, fmt: (n: number) => `${n > 0 ? (n / 1_000_000).toFixed(1) + "M" : "0"}` },
              { icon: TrendingUp, accent: "green" as Accent, label: "Software Value", value: stats?.softwareValue ?? 0, fmt: (n: number) => `$${(n / 1000).toFixed(0)}K` },
            ].map(s => (
              <Card key={s.label} className="p-6 text-left" hover>
                <IconTile icon={s.icon} accent={s.accent} />
                <div className="mt-4 font-extrabold text-3xl lg:text-4xl">
                  <AnimatedCounter value={s.value} format={s.fmt} />
                </div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                {s.label === "Software Value" && stats?.rarity && (
                  <div className="mt-2 inline-block px-2 py-1 bg-[var(--neon-cyan)]/20 text-[var(--neon-cyan)] text-xs font-semibold rounded">
                    {stats.rarity}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="font-extrabold text-3xl lg:text-5xl">Comprehensive Ecosystem</h2>
          <p className="text-muted-foreground mt-3 text-lg">Everything you need to learn, build, create, and collaborate.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MODULES.map(({ href, label, desc, icon, accent }) => (
            <ModuleTile key={href} icon={icon} accent={accent} title={label} subtitle={desc} onClick={() => navigate(href)} />
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="container pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: Shield, accent: "green" as Accent, title: "Enterprise Security", desc: "Authenticated access & anti-fraud protection across every module." },
            { icon: Zap, accent: "cyan" as Accent, title: "AI-Powered Automation", desc: "Real server-side LLM calls drive code, learning paths & recommendations." },
            { icon: Globe, accent: "purple" as Accent, title: "Global Infrastructure", desc: "High-availability architecture built to scale with the community." },
          ].map(({ icon, accent, title, desc }) => (
            <Card key={title} className="p-6" hover>
              <IconTile icon={icon} accent={accent} />
              <h3 className="font-bold text-lg mb-1 mt-4">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-24">
        <Card className="p-12 text-center">
          <h2 className="font-extrabold text-3xl lg:text-5xl">Ready to Get Started?</h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-xl mx-auto">
            Join the community building the future on SKYCOIN4444.
          </p>
          <Link
            href="/dashboard"
            className="mt-8 inline-flex sk-gradient px-8 py-3.5 rounded-full font-bold items-center gap-2 transition-transform active:scale-[0.97]"
          >
            Enter the Platform <ArrowRight className="w-5 h-5" />
          </Link>
        </Card>
      </section>
    </div>
  );
}
