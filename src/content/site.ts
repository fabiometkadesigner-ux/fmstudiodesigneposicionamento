// ============================================================
// Conteúdo editável do site FMDESIGN
// ------------------------------------------------------------
// Este arquivo é a "fonte da verdade" do que aparece no site.
// Está versionado no GitHub e sincroniza bidirecionalmente com
// o Lovable — editar aqui (Lovable, GitHub Web ou local) atualiza
// automaticamente a página.
// ============================================================

import port1 from "@/assets/port-1.jpg.asset.json";
import port2 from "@/assets/port-2.jpg.asset.json";
import port3 from "@/assets/port-3.jpg.asset.json";
import port4 from "@/assets/port-4.jpg.asset.json";
import port5 from "@/assets/port-5.jpg.asset.json";
import port6 from "@/assets/port-6.jpg.asset.json";

export type PortfolioItem = {
  title: string;
  category: string;
  image: string;
};

export const portfolio: PortfolioItem[] = [
  { title: "Post institucional", category: "Redes sociais", image: port1.url },
  { title: "Campanha OdontoPrime", category: "Redes sociais", image: port2.url },
  { title: "Criativo promocional", category: "Anúncios", image: port3.url },
  { title: "Identidade visual", category: "Branding", image: port4.url },
  { title: "Anúncio Facebook Ads", category: "Anúncios", image: port5.url },
  { title: "Landing page mobile", category: "Landing page", image: port6.url },
];

export type Plan = {
  name: string;
  desc: string;
  price: string;
  priceHint: string;
  features: string[];
  cta: string;
  featured: boolean;
};

export const plans: Plan[] = [
  {
    name: "Essencial",
    desc: "Presença profissional nas redes e no Google.",
    price: "A partir de R$ 400",
    priceHint: "/ mês",
    features: [
      "Gestão de redes sociais",
      "12 criativos/mês",
      "Otimização de perfil",
      "Google Meu Negócio",
    ],
    cta: "Solicitar orçamento",
    featured: false,
  },
  {
    name: "Funil de conversão",
    desc: "Criativos + landing page + anúncios em ciclo contínuo.",
    price: "R$ 657",
    priceHint: "/ mês",
    features: [
      "Criativos personalizados (estáticos e vídeo)",
      "Landing page de conversão",
      "Gestão de Meta Ads",
      "Relatório mensal simplificado",
      "Ajustes semanais de campanha",
    ],
    cta: "Quero rodar campanha",
    featured: true,
  },
  {
    name: "Projetos avulsos",
    desc: "Entregas pontuais de design e landing page.",
    price: "Sob consulta",
    priceHint: "orçamento personalizado",
    features: [
      "Identidade visual",
      "Landing page (entrega única)",
      "Pacote de criativos",
      "Edição de vídeos",
    ],
    cta: "Consultar valores",
    featured: false,
  },
];

export type TeamMember = {
  name: string;
  role: string;
  desc: string;
  initials: string;
  color: string;
};

export const team: TeamMember[] = [
  {
    name: "Fabio Metka",
    role: "Designer gráfico & estrategista",
    desc: "Direção criativa, identidade visual e estratégia por trás de cada campanha.",
    initials: "FM",
    color: "from-brand-purple to-brand-blue",
  },
  {
    name: "Victor Fernando",
    role: "Editor de vídeos",
    desc: "Reels, Shorts e VSLs com edição pensada para retenção e clique.",
    initials: "VF",
    color: "from-brand-blue to-brand-green",
  },
  {
    name: "Tiago V.",
    role: "Gestor de anúncios",
    desc: "Meta Ads e Google Ads: estruturação, otimização semanal e leitura de dados.",
    initials: "TV",
    color: "from-brand-pink to-brand-purple",
  },
  {
    name: "Mariana",
    role: "Social media",
    desc: "Planejamento de conteúdo, calendário editorial e relacionamento nas redes.",
    initials: "MA",
    color: "from-brand-green to-brand-blue",
  },
];

export const clients: string[] = [
  "GM Engenharia Elétrica",
  "Clínica OdontoPrime",
  "TechSolutions BR",
  "Construtora Vértice",
  "Studio Arquitetura",
  "Posto Cidade",
  "Seedron Agro",
  "Popular Ótica",
];

// ---------- Dados do dashboard: Público na internet ----------
// Fonte: referência interna FMDESIGN + Mlabs 2025/2026
export const ageDistribution = [
  { faixa: "18–24", pct: 31.7 },
  { faixa: "25–34", pct: 30.6 },
  { faixa: "35–44", pct: 16.0 },
  { faixa: "45+", pct: 21.7 },
];

export const behaviorData = [
  { name: "Seguem contas comerciais", value: 90 },
  { name: "Compram semanalmente", value: 44 },
  { name: "Não compram semanalmente", value: 56 },
];

export const engagementTrend = [
  { d: "Jan", carrossel: 3.1, foto: 2.4, video: 4.2 },
  { d: "Fev", carrossel: 3.4, foto: 2.5, video: 4.6 },
  { d: "Mar", carrossel: 3.6, foto: 2.6, video: 5.1 },
  { d: "Abr", carrossel: 3.8, foto: 2.7, video: 5.4 },
  { d: "Mai", carrossel: 4.0, foto: 2.6, video: 5.8 },
  { d: "Jun", carrossel: 4.3, foto: 2.5, video: 6.2 },
  { d: "Jul", carrossel: 4.5, foto: 2.4, video: 6.7 },
];

// Formatos + Google — panorama 2026
export const formatData = [
  { formato: "Reels", eng: 6.7 },
  { formato: "Carrossel", eng: 4.5 },
  { formato: "Foto", eng: 2.4 },
  { formato: "Stories", eng: 1.8 },
];

export const googleData = [
  { canal: "Busca", cliques: 68 },
  { canal: "Maps", cliques: 46 },
  { canal: "Display", cliques: 22 },
  { canal: "YouTube", cliques: 34 },
];

export const genderData = [
  { name: "Homens", value: 50.6 },
  { name: "Mulheres", value: 49.4 },
];

