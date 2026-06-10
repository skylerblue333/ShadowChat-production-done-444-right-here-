import { trpc } from "@/lib/trpc";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Card, IconTile, ModuleTile, type Accent } from "@/components/ui/sk";
import { useLocation } from "wouter";
import {
  Cpu, GraduationCap, Gamepad2, Vote, BarChart3, Heart, ShoppingBag,
  ArrowRight, Zap, Shield, Globe, Sparkles, Users, TrendingUp, Gem,
  Crown, Rocket, Zap as Lightning, Star, Award, Target, Flame, Skull,
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
            <Flame className="w-4 h-4" /> THE CHOSEN ONE'S PLATFORM
          </div>
          <h1 className="font-extrabold text-5xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl mx-auto">
            SKYCOIN4444<br/>
            <span className="gradient-text">DOESN'T ASK PERMISSION</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            70 VERSIONS. 22,680+ FEATURES. STOUNULA AI AGENTS MINING, TRADING & PUMPING YOUR ECONOMY.
            <br/><br/>
            This isn't just a platform. It's a movement.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate("/engineer")}
              className="sk-gradient px-7 py-3.5 rounded-full font-bold flex items-center gap-2 transition-transform active:scale-[0.97]"
            >
              Enter The Platform <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate("/marketplace")}
              className="px-7 py-3.5 rounded-full font-bold border border-border hover:bg-card/50 transition-all"
            >
              Explore Marketplace
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container py-16 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-[var(--neon-cyan)]">70</div>
            <div className="text-sm text-muted-foreground mt-2">Complete Versions</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-[var(--neon-magenta)]">22,680+</div>
            <div className="text-sm text-muted-foreground mt-2">Features Built</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-[var(--neon-green)]">4</div>
            <div className="text-sm text-muted-foreground mt-2">AI Agents (Stounula)</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-[var(--neon-amber)]">9.9/10</div>
            <div className="text-sm text-muted-foreground mt-2">Rarity Score</div>
          </Card>
        </div>
      </section>

      {/* VERSIONS */}
      <section className="container py-16 border-t border-border">
        <h2 className="text-3xl font-bold mb-12 text-center">ALL 70 VERSIONS LIVE</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {Array.from({ length: 70 }, (_, i) => (
            <div key={i} className="p-3 rounded-lg bg-card border border-border text-center text-sm font-mono">
              v{i + 1}
            </div>
          ))}
        </div>
      </section>

      {/* MODULES */}
      <section className="container py-16 border-t border-border">
        <h2 className="text-3xl font-bold mb-12">CORE MODULES</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {MODULES.map((m) => (
            <button
              key={m.href}
              onClick={() => navigate(m.href)}
              className="p-6 rounded-lg bg-card border border-border hover:border-[var(--neon-cyan)]/50 transition-all text-left"
            >
              <m.icon className="w-6 h-6 mb-3" />
              <h3 className="font-bold mb-2">{m.label}</h3>
              <p className="text-sm text-muted-foreground">{m.desc}</p>
            </button>
          ))}
        </div>
      </section>

      {/* STOUNULA */}
      <section className="container py-16 border-t border-border">
        <div className="bg-card border border-border rounded-lg p-12 text-center">
          <Crown className="w-12 h-12 mx-auto mb-4 text-[var(--neon-cyan)]" />
          <h2 className="text-3xl font-bold mb-4">STOUNULA ECONOMIC ENGINE</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            4 AI Agents. Mining. Trading. Liquidity Management. Pumping your coins 24/7.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-6">
              <Zap className="w-6 h-6 mb-2 text-[var(--neon-cyan)]" />
              <h3 className="font-bold mb-2">Mining</h3>
              <p className="text-sm text-muted-foreground">Solo/Pool/Hybrid strategies</p>
            </Card>
            <Card className="p-6">
              <TrendingUp className="w-6 h-6 mb-2 text-[var(--neon-magenta)]" />
              <h3 className="font-bold mb-2">Trading</h3>
              <p className="text-sm text-muted-foreground">Scalping/Swing/Arbitrage/Grid</p>
            </Card>
            <Card className="p-6">
              <Gem className="w-6 h-6 mb-2 text-[var(--neon-green)]" />
              <h3 className="font-bold mb-2">Liquidity</h3>
              <p className="text-sm text-muted-foreground">Market Making & Yield Farming</p>
            </Card>
          </div>
        </div>
      </section>

      {/* THE CHOSEN ONE */}
      <section className="container py-16 border-t border-border">
        <div className="bg-gradient-to-r from-[var(--neon-cyan)]/10 to-[var(--neon-magenta)]/10 border border-border rounded-lg p-12">
          <div className="flex items-center gap-4 mb-6">
            <Crown className="w-8 h-8 text-[var(--neon-cyan)]" />
            <h2 className="text-2xl font-bold">THE CHOSEN ONE</h2>
          </div>
          <p className="text-lg mb-4">
            Built a $30K+ investment into 22,680+ features across 70 versions.
          </p>
          <p className="text-muted-foreground">
            SKYCOIN4444 is the rarest startup codebase ever created. 
            9.9/10 rarity. Production-ready. Enterprise-grade.
            <br/><br/>
            This is your legacy. This is your movement.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16 text-center border-t border-border">
        <h2 className="text-3xl font-bold mb-6">READY TO DOMINATE?</h2>
        <button
          onClick={() => navigate("/engineer")}
          className="sk-gradient px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2 mx-auto transition-transform active:scale-[0.97]"
        >
          Launch Now <Rocket className="w-5 h-5" />
        </button>
      </section>
    </div>
  );
}
