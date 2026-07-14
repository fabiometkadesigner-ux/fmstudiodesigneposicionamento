import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Compass,
  Film,
  Instagram,
  Layout,
  MessageCircle,
  Palette,
  Search,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend as RLegend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import logoLight from "@/assets/logo-light.png.asset.json";
import logoDark from "@/assets/logo-dark.png.asset.json";
import marketing1 from "@/assets/marketing-1.jpg.asset.json";
import marketing2 from "@/assets/marketing-2.jpg.asset.json";
import marketing3 from "@/assets/marketing-3.jpg.asset.json";
import portifolioimagem from "@/assets/portifolioimagem.png.asset.json";
import devicesMockup from "@/assets/devices-mockup.jpg.asset.json";
import {
  ageDistribution,
  behaviorData,
  clients,
  engagementTrend,
  formatData,
  genderData,
  googleData,
  plans,
  team,
} from "@/content/site";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=%2B5566984010163";

const BEHAVIOR_COLORS = ["oklch(0.65 0.22 275)", "oklch(0.6 0.24 300)", "oklch(0.28 0.02 275)"];

/* ---------- Motion helpers ---------- */
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
      <SocialFocus />
      <AudienceDashboard />
      <Funnel />
      <Portfolio />
      <DevicesShowcase />
      <Team />
      <Pricing />
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
          <img src={logoLight.url} alt="FMDESIGN Studio" className="h-9 w-auto" />
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {[
            ["Especialidade", "#redes"],
            ["Público", "#publico"],
            ["Solução", "#solucao"],
            ["Portfólio", "#portfolio"],
            ["Equipe", "#equipe"],
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
          Falar com a equipe
        </a>
      </div>
    </nav>
  );
}

/* ---------------- Hero ---------------- */
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
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            <img src={logoLight.url} alt="" className="h-4 w-auto opacity-90" aria-hidden />
            Criativos · Anúncios · Landing Pages
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(2.75rem,6vw,4.75rem)] font-bold leading-[1.05]"
          >
            Soluções em <span className="text-gradient">marketing</span> que giram um funil simples
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Criativos personalizados, gestão de anúncios e landing pages de conversão. Do primeiro
            clique nas redes ao contato no WhatsApp.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#solucao"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-4 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Ver a solução
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-4 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-surface-light"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative"
        >
          <div className="animate-float-slow">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/70 shadow-elegant backdrop-blur-xl">
              <img
                src={marketing1.url}
                alt="Crescimento em marketing digital"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ---------------- Clients Marquee ---------------- */
function ClientsBar() {
  return (
    <section className="border-y border-border bg-surface/50 py-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Marcas que já rodam campanhas conosco
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

/* ---------------- Social Focus ---------------- */
function SocialFocus() {
  const items = [
    { icon: Film, title: "Criativos que param o scroll", desc: "Reels, Shorts e estáticos pensados para retenção e cliques." },
    { icon: Palette, title: "Design consistente", desc: "Identidade visual aplicada em todos os pontos de contato." },
    { icon: Compass, title: "Google Meu Negócio", desc: "Perfil otimizado para aparecer nas buscas locais da sua região." },
  ];
  return (
    <section id="redes" className="relative py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
        <motion.div {...fadeUp} className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-elegant">
            <img
              src={marketing2.url}
              alt="Marketing e posicionamento de mídia"
              width={1200}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 h-40 w-40 rounded-full bg-gradient-brand opacity-40 blur-3xl" />
        </motion.div>

        <motion.div {...fadeUp}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-brand-pink" />
            Especialidade
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">
            Posicionamento com <span className="text-gradient">clareza</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Trabalhamos redes sociais, anúncios e presença no Google como um conjunto — não como
            peças soltas. O objetivo é sempre gerar contato qualificado.
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

/* ---------------- Audience Dashboard (redes sociais & Google) ---------------- */
function AudienceDashboard() {
  return (
    <section id="publico" className="relative py-28">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-[500px] -translate-y-1/2 bg-mesh opacity-40" />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div {...fadeUp} className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
            <BarChart3 className="h-3.5 w-3.5 text-brand-blue" />
            Público na internet
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">
            Quem está do <span className="text-gradient">outro lado da tela</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Um panorama de audiência e comportamento em redes sociais e Google — a base que
            usamos para desenhar cada campanha.
          </p>
        </motion.div>

        {/* Highlight tiles */}
        <motion.div {...fadeUp} className="mb-8 grid gap-4 sm:grid-cols-3">
          <Tile
            icon={Users}
            label="Usuários ativos"
            value="3 bilhões"
            hint="Instagram · mensais (2025/26)"
            color="text-brand-purple"
          />
          <Tile
            icon={Instagram}
            label="Uso diário"
            value="500 milhões"
            hint="usuários ativos por dia"
            color="text-brand-pink"
          />
          <Tile
            icon={Search}
            label="Buscas locais"
            value="+46%"
            hint="Google · perfis 'perto de mim'"
            color="text-brand-green"
          />
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Faixa etária */}
          <motion.div
            {...fadeUp}
            className="lg:col-span-2 rounded-3xl border border-border bg-surface/60 p-6 shadow-elegant backdrop-blur"
          >
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Faixa etária no Instagram
            </div>
            <h3 className="mt-1 text-xl font-semibold">62,3% entre 18 e 34 anos</h3>
            <div className="mt-6 h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ageDistribution} margin={{ top: 10, right: 10, left: -18, bottom: 0 }}>
                  <defs>
                    <linearGradient id="barAge" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.65 0.22 275)" />
                      <stop offset="100%" stopColor="oklch(0.6 0.24 300)" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="oklch(1 0 0 / 0.06)" vertical={false} />
                  <XAxis
                    dataKey="faixa"
                    stroke="oklch(0.68 0.02 260)"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="oklch(0.68 0.02 260)"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    unit="%"
                  />
                  <Tooltip
                    cursor={{ fill: "oklch(1 0 0 / 0.04)" }}
                    contentStyle={{
                      background: "oklch(0.18 0.012 260)",
                      border: "1px solid oklch(1 0 0 / 0.1)",
                      borderRadius: 12,
                      color: "white",
                    }}
                    formatter={(v: number) => `${v}%`}
                  />
                  <Bar dataKey="pct" fill="url(#barAge)" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Engajamento por formato */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.08 }}
            className="lg:col-span-3 rounded-3xl border border-border bg-surface/60 p-6 shadow-elegant backdrop-blur"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Taxa de engajamento por formato
                </div>
                <h3 className="mt-1 text-xl font-semibold">Foto, carrossel e vídeo</h3>
              </div>
              <div className="hidden gap-3 sm:flex">
                <Legend color="oklch(0.65 0.22 275)" label="Carrossel" />
                <Legend color="oklch(0.68 0.22 15)" label="Foto" />
                <Legend color="oklch(0.75 0.2 155)" label="Vídeo" />
              </div>
            </div>
            <div className="mt-6 h-56">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={engagementTrend} margin={{ top: 10, right: 10, left: -18, bottom: 0 }}>
                  <CartesianGrid stroke="oklch(1 0 0 / 0.06)" vertical={false} />
                  <XAxis dataKey="d" stroke="oklch(0.68 0.02 260)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="oklch(0.68 0.02 260)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      background: "oklch(0.18 0.012 260)",
                      border: "1px solid oklch(1 0 0 / 0.1)",
                      borderRadius: 12,
                      color: "white",
                    }}
                  />
                  <Line type="monotone" dataKey="carrossel" stroke="oklch(0.65 0.22 275)" strokeWidth={2.5} dot={false} />
                  <Line type="monotone" dataKey="foto" stroke="oklch(0.68 0.22 15)" strokeWidth={2.5} dot={false} />
                  <Line type="monotone" dataKey="video" stroke="oklch(0.75 0.2 155)" strokeWidth={2.5} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Amostra Mlabs · 102.952 posts em 3.875 perfis.
            </p>
          </motion.div>

          {/* Comportamento */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.16 }}
            className="rounded-3xl border border-border bg-surface/60 p-6 shadow-elegant backdrop-blur lg:col-span-3"
          >
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Comportamento — Instagram
            </div>
            <h3 className="mt-1 text-xl font-semibold">90% seguem contas comerciais</h3>
            <ul className="mt-6 space-y-4">
              {behaviorData.map((b, i) => (
                <li key={b.name}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{b.name}</span>
                    <span className="font-semibold">{b.value}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-background/70">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${b.value}%` }}
                      transition={{ duration: 1.2, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                      viewport={{ once: true }}
                      className="h-full rounded-full"
                      style={{ background: BEHAVIOR_COLORS[i] }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Divisão de gênero */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.24 }}
            className="rounded-3xl border border-border bg-surface/60 p-6 shadow-elegant backdrop-blur lg:col-span-2"
          >
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Gênero</div>
            <h3 className="mt-1 text-xl font-semibold">Divisão quase equilibrada</h3>
            <div className="mt-4 h-40">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: "Homens", value: 50.6 },
                      { name: "Mulheres", value: 49.4 },
                    ]}
                    dataKey="value"
                    innerRadius={40}
                    outerRadius={65}
                    paddingAngle={3}
                    stroke="none"
                  >
                    <Cell fill="oklch(0.65 0.22 275)" />
                    <Cell fill="oklch(0.68 0.22 15)" />
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "oklch(0.18 0.012 260)",
                      border: "1px solid oklch(1 0 0 / 0.1)",
                      borderRadius: 12,
                      color: "white",
                    }}
                    formatter={(v: number) => `${v}%`}
                  />
                  <RLegend
                    verticalAlign="bottom"
                    height={20}
                    wrapperStyle={{ fontSize: 12, color: "oklch(0.68 0.02 260)" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Tile({
  icon: Icon,
  label,
  value,
  hint,
  color,
}: {
  icon: typeof Users;
  label: string;
  value: string;
  hint: string;
  color: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
        <Icon className={`h-4 w-4 ${color}`} />
      </div>
      <div className="mt-3 text-3xl font-bold">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{hint}</div>
    </div>
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

/* ---------------- Funnel (Solução) ---------------- */
function Funnel() {
  const steps = [
    { icon: Sparkles, tag: "01", title: "Criativo", desc: "Peças personalizadas para cada oferta, formato e público." },
    { icon: Target, tag: "02", title: "Anúncio", desc: "Campanhas em Meta e Google configuradas e otimizadas por semana." },
    { icon: Layout, tag: "03", title: "Landing page", desc: "Página de conversão com foco no clique para o WhatsApp." },
    { icon: MessageCircle, tag: "04", title: "Contato", desc: "Lead chega direto no seu comercial, pronto para conversar." },
  ];
  return (
    <section id="solucao" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div {...fadeUp} className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
            <Compass className="h-3.5 w-3.5 text-brand-blue" />
            Solução
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">
            Um <span className="text-gradient">funil simples</span> e direto
          </h2>
          <p className="mt-4 text-muted-foreground">
            Quatro etapas conectadas, sem promessas mágicas. Só o trabalho bem feito, em ciclo
            contínuo.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-6 shadow-elegant backdrop-blur transition-transform hover:-translate-y-1"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-background text-brand-purple">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Portfolio (grid pequeno) ---------------- */
function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div {...fadeUp} className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
              <Palette className="h-3.5 w-3.5 text-brand-purple" />
              Portfólio
            </div>
            <h2 className="max-w-xl text-4xl font-bold md:text-5xl">
              Criativos <span className="text-gradient">personalizados</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground md:text-right">
            Cada peça feita sob medida para a oferta e o público do cliente — sem template
            genérico.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {portfolio.map((p, i) => (
            <motion.figure
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-background/95 to-transparent p-3 transition-transform duration-500 group-hover:translate-y-0">
                <div className="text-[10px] uppercase tracking-widest text-brand-purple">
                  {p.category}
                </div>
                <div className="mt-0.5 text-sm font-semibold">{p.title}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Team ---------------- */
function Team() {
  return (
    <section id="equipe" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div {...fadeUp} className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
            <Users className="h-3.5 w-3.5 text-brand-green" />
            Equipe qualificada
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">
            Quem coloca a <span className="text-gradient">campanha no ar</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Um time pequeno e especializado — cada área com um responsável direto pelo seu
            projeto.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((p, i) => (
            <motion.div
              key={p.name}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-6 shadow-elegant backdrop-blur transition-transform hover:-translate-y-1"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${p.color} font-display text-lg font-bold text-white shadow-glow`}
              >
                {p.initials}
              </div>
              <h3 className="mt-5 text-lg font-semibold">{p.name}</h3>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                {p.role}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */
function Pricing() {
  return (
    <section id="planos" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div {...fadeUp} className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
            <Zap className="h-3.5 w-3.5 text-brand-green" />
            Planos
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">
            Escopos <span className="text-gradient">claros</span> e transparentes
          </h2>
          <p className="mt-4 text-muted-foreground">
            Escolha o formato que faz sentido para o momento do seu negócio.
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
                  Mais escolhido
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

/* ---------------- Final CTA (com identidade visual reforçada) ---------------- */
function FinalCta() {
  return (
    <section id="contato" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      <img
        src={marketing3.url}
        alt=""
        aria-hidden
        width={1200}
        height={900}
        loading="lazy"
        className="pointer-events-none absolute -left-20 top-10 hidden w-[380px] opacity-40 md:block"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          src={logoLight.url}
          alt="FMDESIGN Studio"
          className="mx-auto mb-8 h-16 w-auto drop-shadow-[0_10px_40px_oklch(0.6_0.24_300/0.5)]"
        />
        <motion.h2 {...fadeUp} className="text-4xl font-bold leading-tight md:text-6xl">
          Vamos <span className="text-gradient">conversar</span> sobre a sua campanha?
        </motion.h2>
        <motion.p {...fadeUp} className="mt-6 text-lg text-muted-foreground">
          Conte o que você vende e para quem — a equipe FMDESIGN monta uma proposta de criativos,
          anúncios e landing page adequada ao seu momento.
        </motion.p>
        <motion.div {...fadeUp} className="mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-brand-green px-8 py-5 text-base font-semibold text-background shadow-glow transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div>
          <img src={logoLight.url} alt="FMDESIGN Studio" className="h-12 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Studio de criativos, anúncios e landing pages. Um funil simples do primeiro clique ao
            contato no WhatsApp.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Navegação</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#redes" className="hover:text-foreground">Especialidade</a></li>
            <li><a href="#publico" className="hover:text-foreground">Público</a></li>
            <li><a href="#solucao" className="hover:text-foreground">Solução</a></li>
            <li><a href="#portfolio" className="hover:text-foreground">Portfólio</a></li>
            <li><a href="#equipe" className="hover:text-foreground">Equipe</a></li>
            <li><a href="#planos" className="hover:text-foreground">Planos</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Contato</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
                <MessageCircle className="h-4 w-4 text-brand-green" />
                WhatsApp
              </a>
            </li>
            <li>contato@fmdesign.studio</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-border px-5 pt-8 text-xs text-muted-foreground md:flex-row md:px-8">
        <span>© 2026 FMDESIGN Studio. Todos os direitos reservados.</span>
        <img src={logoDark.url} alt="" aria-hidden className="h-8 w-auto opacity-60 invert" />
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
