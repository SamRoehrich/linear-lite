"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function DetailPanel() {
  return (
    <motion.aside
      className="w-[320px] min-w-[320px] h-screen bg-linear-bg-secondary border-l border-linear-border overflow-y-auto hidden lg:block"
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.3 }}
    >
      {/* Current cycle header */}
      <div className="px-4 py-3 border-b border-linear-border">
        <div className="flex items-center justify-between text-xs text-linear-text-tertiary mb-2">
          <span>Current</span>
          <span>2025 - 2026</span>
        </div>
        <h2 className="text-[15px] font-semibold text-linear-text">
          Engineering Portfolio
        </h2>
        <p className="text-xs text-linear-text-secondary mt-1">
          Sam Roehrich - Senior Software Engineer
        </p>
      </div>

      <Separator className="bg-linear-border" />

      {/* Progress section */}
      <div className="px-4 py-4">
        <h3 className="text-xs font-medium text-linear-text-secondary mb-3">
          Progress
        </h3>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="size-2 rounded-full bg-linear-text-tertiary" />
            <span className="text-linear-text-secondary">Scope</span>
            <span className="text-linear-text font-medium">10</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="size-2 rounded-full bg-linear-yellow" />
            <span className="text-linear-text-secondary">Active</span>
            <span className="text-linear-text font-medium">2</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="size-2 rounded-full bg-linear-accent" />
            <span className="text-linear-text-secondary">Done</span>
            <span className="text-linear-text font-medium">5</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-3 h-1.5 bg-linear-border rounded-full overflow-hidden flex">
          <motion.div
            className="h-full bg-linear-accent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          />
          <motion.div
            className="h-full bg-linear-yellow rounded-full ml-0.5"
            initial={{ width: 0 }}
            animate={{ width: "20%" }}
            transition={{ delay: 0.7, duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      <Separator className="bg-linear-border" />

      {/* Skills / Tech section */}
      <div className="px-4 py-4">
        <h3 className="text-xs font-medium text-linear-text-secondary mb-3">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {[
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "GraphQL",
            "Tailwind CSS",
            "AWS",
            "Vercel",
          ].map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-[11px] font-normal bg-linear-bg-tertiary text-linear-text-secondary border-linear-border hover:bg-linear-bg-hover transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <Separator className="bg-linear-border" />

      {/* About section */}
      <div className="px-4 py-4">
        <h3 className="text-xs font-medium text-linear-text-secondary mb-3">
          About
        </h3>
        <p className="text-[13px] text-linear-text-secondary leading-relaxed">
          Software engineer focused on building high-performance editorial
          platforms. Working across the stack on content delivery, ad
          infrastructure, and frontend architecture.
        </p>
      </div>

      <Separator className="bg-linear-border" />

      {/* Links */}
      <div className="px-4 py-4">
        <h3 className="text-xs font-medium text-linear-text-secondary mb-3">
          Links
        </h3>
        <div className="flex flex-col gap-2">
          <a
            href="https://x.com/washed_engineer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-linear-accent hover:underline"
          >
            x.com/washed_engineer
          </a>
          <a
            href="https://github.com/samroehrich"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-linear-accent hover:underline"
          >
            github.com/samroehrich
          </a>
          <a
            href="mailto:sam_roehrich@icloud.com"
            className="text-[13px] text-linear-accent hover:underline"
          >
            sam_roehrich@icloud.com
          </a>
        </div>
      </div>
    </motion.aside>
  );
}
