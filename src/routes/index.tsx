import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import {
  ArrowRight,
  BarChart3,
  Bullseye,
  CheckCircle2,
  ChevronRight,
  Compass,
  GraduationCap,
  Handshake,
  Layers,
  LineChart as LineChartIcon,
  Magnet,
  MessageCircle,
  Rocket,
  Sparkles,
  Star,
  TrendingUp,
  Video,
  Zap,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import logoLight from "@/assets/logo-light.png.asset.json";
import logoDark from "@/assets/logo-dark.png.asset.json";
import portfolioImg from "@/assets/portfolio.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL = "https://wa.me/";

/* ---------- Data for charts ---------- */
const growthData = [
  { m: "Jan", alcance: 12, leads: 4 },
  { m: "Fev", alcance: 18, leads: 7 },
  { m: "Mar", alcance: 26, leads: 11 },
  { m: "Abr", alcance: 34, leads: 15 },
  { m: "Mai", alcance: 48, leads: 22 },
  { m: "Jun", alcance: 62, leads: 31 },
  { m: "Jul", alcance: 79, leads: 42 },
];

const channelData = [
  { canal: "Instagram", conv: 38 },
  { canal: "Meta Ads", conv: 52 },
  { canal: "Google", conv: 44 },
  { canal: "WhatsApp", conv: 61 },
];

const mixData = [
  { name: "Orgânico", value: 34 },
  { name: "Pago", value: 41 },
  { name: "Remarketing", value: 25 },
];

const MIX_COLORS = ["oklch(0.65 0.2 250)", "oklch(0.6 0.24 300)", "oklch(0.68 0.22 15)"];

/* ---------- Small motion helpers ---------- */
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <ClientsBar />
      <Dashboard />
      <SocialFocus />
      <Funnel />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <FinalCta />
      <Footer />
      <FloatWpp />
    </div>
  );
}

/* ---------------- Nav ---------------- */
function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 glass">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#hero" className="flex items-center gap-2">
          <img src={logoLight.url} alt="FMDESIGN" className="h-9 w-auto" />
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {[
            ["Dashboard", "#dashboard"],
            ["Especialidade", "#redes"],
            ["Metodologia", "#metodo"],
            ["Portfólio", "#portfolio"],
            ["Planos", "#planos"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="#contato"
          className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5 sm:inline-flex"
        >
          Diagnóstico
        </a>
      </div>
    </nav>
  );
}

/* ---------------- Hero (parallax) ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBlob1 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -180]);
  const yBlob2 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 220]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <div className="absolute inset-0 bg-mesh" />
      <motion.div
        style={{ y: yBlob1 }}
        className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-brand-purple/30 blur-[120px]"
      />
      <motion.div
        style={{ y: yBlob2 }}
        className="absolute -left-40 top-1/2 h-[420px] w-[420px] rounded-full bg-brand-blue/25 blur-[130px]"
      />
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:60px_60px]" />

      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[1.15fr_1fr] lg:items-center"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-purple" />
            Inovação · Estratégia · Tecnologia
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(2.75rem,6vw,4.75rem)] font-bold leading-[1.05]"
          >
            FMDESIGN: <span className="text-gradient">Studio</span> de Posicionamento e Mídia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Transformamos presença digital em máquina de vendas previsível. Criamos ecossistemas
            imersivos que atraem, educam e convertem o seu cliente ideal.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#metodo"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-4 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Descubra o método
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-4 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-surface-light"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar conversa
            </a>
          </motion.div>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-6">
            {[
              ["+180%", "ROAS médio"],
              ["48h", "Setup do funil"],
              ["24/7", "Otimização"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl font-bold text-gradient md:text-3xl">{n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating hero card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative"
        >
          <div className="animate-float-slow">
            <div className="relative rounded-3xl border border-border bg-surface/70 p-6 shadow-elegant backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Painel ao vivo
                  </div>
                  <div className="mt-1 text-lg font-semibold">Crescimento orgânico</div>
                </div>
                <div className="rounded-full bg-brand-green/15 px-3 py-1 text-xs font-semibold text-brand-green">
                  +42%
                </div>
              </div>
              <div className="mt-6 h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={growthData}>
                    <defs>
                      <linearGradient id="hg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="oklch(0.6 0.24 300)" stopOpacity={0.6} />
                        <stop offset="100%" stopColor="oklch(0.6 0.24 300)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="alcance"
                      stroke="oklch(0.65 0.22 275)"
                      strokeWidth={2.5}
                      fill="url(#hg)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  ["Leads", "312", TrendingUp],
                  ["CPL", "R$ 4,80", Zap],
                ].map(([l, v, Icon]) => {
                  const I = Icon as typeof TrendingUp;
                  return (
                    <div
                      key={l as string}
                      className="rounded-2xl border border-border bg-background/60 p-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{l as string}</span>
                        <I className="h-3.5 w-3.5 text-brand-green" />
                      </div>
                      <div className="mt-1 text-lg font-bold">{v as string}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Floating chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            className="absolute -left-6 top-8 hidden rounded-2xl border border-border bg-surface/80 p-3 shadow-elegant backdrop-blur md:block"
          >
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-brand-green/15 p-2">
                <CheckCircle2 className="h-4 w-4 text-brand-green" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Novo lead</div>
                <div className="text-sm font-semibold">Fechou WhatsApp</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Clients Marquee ---------------- */
function ClientsBar() {
  const clients = [
    "GM Engenharia Elétrica",
    "Clínica OdontoPrime",
    "TechSolutions BR",
    "Construtora Vértice",
    "Studio Arquitetura",
    "Posto Cidade",
    "Seedron Agro",
    "Popular Ótica",
  ];
  return (
    <section className="border-y border-border bg-surface/50 py-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Parceiros estratégicos que confiam em nosso Studio
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-16 pr-16">
            {[...clients, ...clients].map((c, i) => (
              <span
                key={i}
                className="whitespace-nowrap font-display text-lg font-semibold text-muted-foreground/70"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Dashboard ---------------- */
function Dashboard() {
  return (
    <section id="dashboard" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div {...fadeUp} className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
            <BarChart3 className="h-3.5 w-3.5 text-brand-blue" />
            Dashboard de performance
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">
            Estratégia com <span className="text-gradient">dados reais</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Acompanhe em tempo real o que os clientes FMDESIGN colhem quando estratégia,
            criativo e tecnologia rodam integrados.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div
            {...fadeUp}
            className="lg:col-span-2 rounded-3xl border border-border bg-surface/60 p-6 shadow-elegant backdrop-blur"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Últimos 7 meses
                </div>
                <h3 className="text-xl font-semibold">Alcance x Leads qualificados</h3>
              </div>
              <div className="hidden gap-4 md:flex">
                <Legend color="oklch(0.65 0.22 275)" label="Alcance (mil)" />
                <Legend color="oklch(0.75 0.2 155)" label="Leads (x10)" />
              </div>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={growthData}>
                  <defs>
                    <linearGradient id="a1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.65 0.22 275)" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="oklch(0.65 0.22 275)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="a2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.75 0.2 155)" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="oklch(0.75 0.2 155)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="oklch(1 0 0 / 0.06)" vertical={false} />
                  <XAxis dataKey="m" stroke="oklch(0.68 0.02 260)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="oklch(0.68 0.02 260)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      background: "oklch(0.18 0.012 260)",
                      border: "1px solid oklch(1 0 0 / 0.1)",
                      borderRadius: 12,
                      color: "white",
                    }}
                  />
                  <Area type="monotone" dataKey="alcance" stroke="oklch(0.65 0.22 275)" strokeWidth={2.5} fill="url(#a1)" />
                  <Area type="monotone" dataKey="leads" stroke="oklch(0.75 0.2 155)" strokeWidth={2.5} fill="url(#a2)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="rounded-3xl border border-border bg-surface/60 p-6 shadow-elegant backdrop-blur"
          >
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Mix</div>
            <h3 className="text-xl font-semibold">Origem dos leads</h3>
            <div className="mt-4 h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={mixData}
                    dataKey="value"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={4}
                    stroke="none"
                  >
                    {mixData.map((_, i) => (
                      <Cell key={i} fill={MIX_COLORS[i]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "oklch(0.18 0.012 260)",
                      border: "1px solid oklch(1 0 0 / 0.1)",
                      borderRadius: 12,
                      color: "white",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-3 space-y-2">
              {mixData.map((m, i) => (
                <div key={m.name} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: MIX_COLORS[i] }}
                    />
                    {m.name}
                  </span>
                  <span className="font-semibold">{m.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="rounded-3xl border border-border bg-surface/60 p-6 shadow-elegant backdrop-blur lg:col-span-3"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Taxa de conversão por canal
                </div>
                <h3 className="text-xl font-semibold">Onde o dinheiro rende</h3>
              </div>
              <div className="hidden items-center gap-2 rounded-full bg-brand-green/15 px-3 py-1 text-xs font-semibold text-brand-green md:flex">
                <TrendingUp className="h-3.5 w-3.5" />
                Média +47%
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={channelData}>
                  <defs>
                    <linearGradient id="bar" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.65 0.22 275)" />
                      <stop offset="100%" stopColor="oklch(0.6 0.24 300)" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="oklch(1 0 0 / 0.06)" vertical={false} />
                  <XAxis dataKey="canal" stroke="oklch(0.68 0.02 260)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="oklch(0.68 0.02 260)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    cursor={{ fill: "oklch(1 0 0 / 0.04)" }}
                    contentStyle={{
                      background: "oklch(0.18 0.012 260)",
                      border: "1px solid oklch(1 0 0 / 0.1)",
                      borderRadius: 12,
                      color: "white",
                    }}
                  />
                  <Bar dataKey="conv" fill="url(#bar)" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-2 text-xs text-muted-foreground">
      <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
      {label}
    </span>
  );
}

/* ---------------- Social Focus ---------------- */
function SocialFocus() {
  const items = [
    { icon: Video, title: "Edição de vídeos magnéticos", desc: "Reels e Shorts pensados para retenção e crescimento qualificado." },
    { icon: Layers, title: "Design de alto padrão", desc: "Artes e pacotes que educam e quebram objeções antes do contato." },
    { icon: LineChartIcon, title: "Google Meu Negócio", desc: "Otimização completa para dominar buscas locais na sua região." },
  ];
  return (
    <section id="redes" className="relative py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
        <motion.div {...fadeUp} className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-elegant">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-transparent to-brand-purple/30" />
            <div className="relative grid grid-cols-2 gap-3 p-6">
              {[
                { label: "Engajamento", value: "+312%", color: "bg-brand-purple/15 text-brand-purple" },
                { label: "Seguidores", value: "+18.4k", color: "bg-brand-blue/15 text-brand-blue" },
                { label: "Salvos", value: "1.2k", color: "bg-brand-green/15 text-brand-green" },
                { label: "Cliques bio", value: "4.8k", color: "bg-brand-pink/15 text-brand-pink" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-background/70 p-5 backdrop-blur">
                  <div className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${s.color}`}>
                    {s.label}
                  </div>
                  <div className="mt-3 text-3xl font-bold">{s.value}</div>
                  <div className="mt-3 h-16">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={growthData}>
                        <Area
                          type="monotone"
                          dataKey="alcance"
                          stroke="oklch(0.65 0.22 275)"
                          strokeWidth={2}
                          fill="oklch(0.65 0.22 275 / 0.15)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-8 -right-6 h-40 w-40 rounded-full bg-gradient-brand opacity-40 blur-3xl" />
        </motion.div>

        <motion.div {...fadeUp}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-brand-pink" />
            Especialidade
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">
            Dominando a atenção e <span className="text-gradient">gerando desejo</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            O marketing para redes sociais é o primeiro pilar do posicionamento. Criamos linhas
            editoriais estratégicas que transformam reconhecimento em autoridade.
          </p>
          <ul className="mt-8 space-y-5">
            {items.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">{title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Funnel ---------------- */
function Funnel() {
  const steps = [
    { icon: Magnet, color: "text-brand-blue", tag: "Topo", title: "Atração qualificada", desc: "Conteúdo orgânico + tráfego pago com anúncios de descoberta e Reels estratégicos." },
    { icon: GraduationCap, color: "text-brand-pink", tag: "Meio", title: "Autoridade & educação", desc: "Carrosséis didáticos e Stories de bastidor para quebrar objeções." },
    { icon: Bullseye, color: "text-brand-purple", tag: "Fundo", title: "Oferta & remarketing", desc: "Anúncios de conversão com prova social direcionando o lead ao ambiente de venda." },
    { icon: Handshake, color: "text-brand-green", tag: "Fechamento", title: "Infraestrutura comercial", desc: "Landing Page + WhatsApp entregando lead quente ao seu comercial." },
  ];
  return (
    <section id="metodo" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div {...fadeUp} className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
            <Compass className="h-3.5 w-3.5 text-brand-blue" />
            Metodologia
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">
            O <span className="text-gradient">funil</span> de conversão aprimorado
          </h2>
          <p className="mt-4 text-muted-foreground">
            O fluxo exato para transformar desconhecidos em clientes de alto valor, unindo
            estratégia e tecnologia.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-8 shadow-elegant backdrop-blur transition-transform hover:-translate-y-1"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
                <div className="flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background ${s.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Fase {i + 1} · {s.tag}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Portfolio ---------------- */
function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 60, reduce ? 0 : -60]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);

  return (
    <section id="portfolio" ref={ref} className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div {...fadeUp} className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
            <Rocket className="h-3.5 w-3.5 text-brand-purple" />
            Portfólio
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">
            Projetos com <span className="text-gradient">estética premium</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Criativos, identidades visuais e landing pages voltados para alta taxa de conversão.
          </p>
        </motion.div>

        <motion.div style={{ y, scale }} className="relative">
          <div className="absolute -inset-10 bg-gradient-brand opacity-20 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-4 shadow-elegant backdrop-blur">
            <img
              src={portfolioImg.url}
              alt="Portfólio FMDESIGN — criativos, edição e landing pages"
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-border bg-background/70 px-6 py-2 text-sm font-medium backdrop-blur">
              Estratégia + Design + Tecnologia
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */
function Pricing() {
  const plans = [
    {
      name: "Essencial Digital",
      desc: "Vitrine profissional e casa organizada nas redes sociais.",
      features: [
        "Gestão de redes (Instagram/FB)",
        "12 artes/mês + linha editorial",
        "Otimização de perfil e destaques",
        "Relatório mensal básico",
      ],
      cta: "Solicitar orçamento",
      featured: false,
    },
    {
      name: "Consultoria & Funil Completo",
      desc: "Design premium + landing pages + tráfego pago integrados.",
      features: [
        "Gestão de redes + design completo",
        "Landing page de conversão",
        "Tráfego pago (Meta/Google Ads)",
        "Google Meu Negócio otimizado",
        "Edição de vídeos dinâmicos",
      ],
      cta: "Quero acelerar minhas vendas",
      featured: true,
    },
    {
      name: "Projetos & Tecnologia",
      desc: "Soluções pontuais de publicidade e design profissional.",
      features: [
        "Logomarca profissional",
        "Identidade visual completa",
        "Landing page (venda única)",
        "Pacote de artes avulsas",
      ],
      cta: "Consultar valores",
      featured: false,
    },
  ];

  return (
    <section id="planos" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div {...fadeUp} className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
            <Zap className="h-3.5 w-3.5 text-brand-green" />
            Planos
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">
            Soluções <span className="text-gradient">fechadas</span> e transparentes
          </h2>
          <p className="mt-4 text-muted-foreground">
            Escolha o nível de aceleração ideal para o momento da sua empresa.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className={`relative flex flex-col rounded-3xl border p-8 shadow-elegant backdrop-blur transition-transform hover:-translate-y-2 ${
                p.featured
                  ? "border-brand-purple/60 bg-gradient-to-b from-surface-light to-surface lg:scale-[1.04]"
                  : "border-border bg-surface/60"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white shadow-glow">
                  Posicionamento Elite
                </span>
              )}
              <h3 className="text-2xl font-bold">{p.name}</h3>
              <p className="mt-2 min-h-[3rem] text-sm text-muted-foreground">{p.desc}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                  p.featured
                    ? "bg-gradient-brand text-white shadow-glow"
                    : "bg-foreground text-background"
                }`}
              >
                {p.cta}
                <ChevronRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const items = [
    {
      quote:
        "Nossa captação mudou da água pro vinho. A landing page e os anúncios trouxeram leads que realmente queriam fechar.",
      name: "Gabriel M.",
      role: "GM Engenharia Elétrica",
      img: "https://i.pravatar.cc/150?img=11",
    },
    {
      quote:
        "Organizaram nossa linha editorial e a nova identidade deixou a marca com aspecto premium. Recomendo demais.",
      name: "Marina S.",
      role: "Clínica OdontoPrime",
      img: "https://i.pravatar.cc/150?img=5",
    },
    {
      quote:
        "Funil bem estruturado, criativos que convertem e um time que entende de negócio, não só de arte.",
      name: "Rafael T.",
      role: "TechSolutions BR",
      img: "https://i.pravatar.cc/150?img=32",
    },
  ];
  return (
    <section id="depoimentos" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div {...fadeUp} className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            O que <span className="text-gradient">nossos clientes</span> dizem
          </h2>
          <p className="mt-4 text-muted-foreground">
            A prova real de que o método FMDESIGN gera resultado sólido e previsível.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="rounded-3xl border border-border bg-surface/60 p-8 shadow-elegant backdrop-blur"
            >
              <div className="flex gap-1 text-brand-pink">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 italic text-foreground/90">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={t.img} alt={t.name} className="h-11 w-11 rounded-full object-cover" loading="lazy" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCta() {
  return (
    <section id="contato" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <motion.h2 {...fadeUp} className="text-4xl font-bold leading-tight md:text-6xl">
          Pronto para <span className="text-gradient">dominar seu mercado?</span>
        </motion.h2>
        <motion.p {...fadeUp} className="mt-6 text-lg text-muted-foreground">
          Chega de perder clientes para concorrentes com posicionamento inferior. Vamos estruturar
          juntos a sua máquina de vendas digital.
        </motion.p>
        <motion.div {...fadeUp} className="mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-brand-green px-8 py-5 text-base font-semibold text-background shadow-glow transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-5 w-5" />
            Iniciar diagnóstico no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center md:px-8">
        <img src={logoDark.url} alt="FMDESIGN Studio" className="h-14 w-auto invert" />
        <p className="text-sm text-muted-foreground">
          © 2026 FMDESIGN · Studio de Posicionamento e Mídia. Todos os direitos reservados.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#redes" className="hover:text-foreground">Especialidade</a>
          <a href="#metodo" className="hover:text-foreground">Método</a>
          <a href="#portfolio" className="hover:text-foreground">Portfólio</a>
          <a href="#planos" className="hover:text-foreground">Planos</a>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Floating WhatsApp ---------------- */
function FloatWpp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-background shadow-glow animate-pulse-wpp transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
