export type ProjectStatus = "complete" | "in_progress" | "todo";

export type ProjectPriority = "urgent" | "high" | "medium" | "low" | "none";

export interface Project {
  id: string;
  title: string;
  status: ProjectStatus;
  priority: ProjectPriority;
  labels: string[];
  description: string;
  date: string;
}

export const projects: Project[] = [
  // Complete
  {
    id: "SR-001",
    title: "Deals Page",
    status: "complete",
    priority: "high",
    labels: ["Frontend", "Feature"],
    description:
      "Built the full deals/affiliate page for editorial monetization. Server-rendered deal cards with dynamic pricing, merchant attribution, and conversion tracking.",
    date: "2025",
  },
  {
    id: "SR-002",
    title: "Ad Stack Integration",
    status: "complete",
    priority: "urgent",
    labels: ["Ads", "Infrastructure"],
    description:
      "Implemented the programmatic ad stack across editorial properties. GPT slot configuration, lazy-loading viewability, refresh logic, and yield optimization.",
    date: "2025",
  },
  {
    id: "SR-003",
    title: "GraphQL Infrastructure",
    status: "complete",
    priority: "high",
    labels: ["Backend", "Infrastructure"],
    description:
      "Designed and built the GraphQL API layer powering the headless editorial platform. Schema design, resolvers, caching strategy, and data federation.",
    date: "2025",
  },
  {
    id: "SR-004",
    title: "CSS Theming System",
    status: "complete",
    priority: "medium",
    labels: ["Frontend", "Design System"],
    description:
      "Created a multi-brand CSS theming system using custom properties. Supports runtime theme switching across editorial brands with zero layout shift.",
    date: "2025",
  },
  {
    id: "SR-005",
    title: "HTML Parser",
    status: "complete",
    priority: "high",
    labels: ["Backend", "Content"],
    description:
      "Built a custom HTML parser for transforming CMS content into structured component trees. Handles embeds, rich media, and complex editorial layouts.",
    date: "2025",
  },

  // In Progress
  {
    id: "SR-006",
    title: "Performance Optimization Sprint",
    status: "in_progress",
    priority: "high",
    labels: ["Performance", "Frontend"],
    description:
      "Core Web Vitals improvements across all editorial properties. LCP, CLS, and INP optimizations targeting sub-2.5s load times.",
    date: "2026",
  },
  {
    id: "SR-007",
    title: "Portfolio Site",
    status: "in_progress",
    priority: "medium",
    labels: ["Personal", "Frontend"],
    description:
      "This site. Built with Next.js 16, Tailwind v4, shadcn/ui, and Framer Motion. Linear-inspired project tracker UI.",
    date: "2026",
  },

  // Todo
  {
    id: "SR-008",
    title: "Edge Rendering Migration",
    status: "todo",
    priority: "high",
    labels: ["Infrastructure", "Performance"],
    description:
      "Migrate server-rendered pages to edge runtime for global latency reduction. Evaluate middleware and streaming strategies.",
    date: "2026",
  },
  {
    id: "SR-009",
    title: "Component Library Documentation",
    status: "todo",
    priority: "medium",
    labels: ["Design System", "Documentation"],
    description:
      "Document the shared component library with Storybook. Usage patterns, prop tables, and interactive examples for the editorial design system.",
    date: "2026",
  },
  {
    id: "SR-010",
    title: "CMS Workflow Automation",
    status: "todo",
    priority: "low",
    labels: ["Backend", "Tooling"],
    description:
      "Automate editorial content workflows. Scheduled publishing, content validation pipelines, and cross-platform syndication.",
    date: "2026",
  },
];
