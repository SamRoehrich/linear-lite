"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Plus,
  BarChart3,
  CircleCheck,
  Circle,
  Timer,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, type Project, type ProjectStatus } from "@/data/projects";

const statusConfig: Record<
  ProjectStatus,
  {
    label: string;
    icon: React.ReactNode;
    color: string;
    borderColor: string;
  }
> = {
  complete: {
    label: "Complete",
    icon: <CircleCheck className="size-4" />,
    color: "text-linear-green",
    borderColor: "border-linear-green/30",
  },
  in_progress: {
    label: "In Progress",
    icon: <Timer className="size-4" />,
    color: "text-linear-yellow",
    borderColor: "border-linear-yellow/30",
  },
  todo: {
    label: "To Do",
    icon: <Circle className="size-4" />,
    color: "text-linear-text-tertiary",
    borderColor: "border-linear-text-tertiary/30",
  },
};

const priorityColors: Record<string, string> = {
  urgent: "bg-linear-orange",
  high: "bg-linear-orange/70",
  medium: "bg-linear-yellow/60",
  low: "bg-linear-accent/50",
  none: "bg-linear-text-tertiary/30",
};

const labelColors: Record<string, string> = {
  Frontend: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  Backend: "bg-purple-500/15 text-purple-400 border-purple-500/20",
  Infrastructure: "bg-orange-500/15 text-orange-400 border-orange-500/20",
  Feature: "bg-green-500/15 text-green-400 border-green-500/20",
  Ads: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
  "Design System": "bg-pink-500/15 text-pink-400 border-pink-500/20",
  Content: "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
  Performance: "bg-red-500/15 text-red-400 border-red-500/20",
  Personal: "bg-indigo-500/15 text-indigo-400 border-indigo-500/20",
  Documentation: "bg-teal-500/15 text-teal-400 border-teal-500/20",
  Tooling: "bg-amber-500/15 text-amber-400 border-amber-500/20",
};

function PriorityBars({ priority }: { priority: string }) {
  const levels =
    priority === "urgent"
      ? 4
      : priority === "high"
        ? 3
        : priority === "medium"
          ? 2
          : priority === "low"
            ? 1
            : 0;
  return (
    <div className="flex items-end gap-[2px] h-3.5">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`w-[3px] rounded-sm transition-colors ${
            i <= levels ? priorityColors[priority] : "bg-linear-border"
          }`}
          style={{ height: `${40 + i * 15}%` }}
        />
      ))}
    </div>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      className="group flex items-center gap-3 px-4 py-2 border-b border-linear-border hover:bg-linear-bg-hover transition-colors cursor-default"
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.2 }}
    >
      {/* Priority */}
      <PriorityBars priority={project.priority} />

      {/* Status icon */}
      <span className={statusConfig[project.status].color}>
        {statusConfig[project.status].icon}
      </span>

      {/* Title */}
      <span className="text-[13px] text-linear-text truncate min-w-0 flex-1">
        {project.title}
      </span>

      {/* Labels */}
      <div className="hidden md:flex items-center gap-1.5 shrink-0">
        {project.labels.map((label) => (
          <Badge
            key={label}
            variant="outline"
            className={`text-[11px] font-normal px-1.5 py-0 h-5 rounded border ${
              labelColors[label] ||
              "bg-muted text-muted-foreground border-border"
            }`}
          >
            {label}
          </Badge>
        ))}
      </div>

      {/* Date */}
      <span className="text-xs text-linear-text-tertiary shrink-0 w-10 text-right">
        {project.date}
      </span>
    </motion.div>
  );
}

function StatusSection({ status }: { status: ProjectStatus }) {
  const [isOpen, setIsOpen] = useState(true);
  const config = statusConfig[status];
  const filtered = projects.filter((p) => p.status === status);

  return (
    <div>
      {/* Section header */}
      <motion.button
        className="flex items-center gap-2 px-4 py-2 w-full hover:bg-linear-bg-hover transition-colors cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.995 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.15 }}
        >
          <ChevronRight className="size-3.5 text-linear-text-tertiary" />
        </motion.div>
        <span className={`${config.color}`}>{config.icon}</span>
        <span className="text-[13px] font-medium text-linear-text">
          {config.label}
        </span>
        <span className="text-xs text-linear-text-tertiary ml-1">
          {filtered.length}
        </span>
        <div className="flex-1" />
        <Button
          variant="ghost"
          size="icon-xs"
          className="opacity-0 group-hover:opacity-100 text-linear-text-tertiary hover:text-linear-text"
          onClick={(e) => e.stopPropagation()}
        >
          <Plus className="size-3.5" />
        </Button>
      </motion.button>

      {/* Items */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {filtered.map((project, i) => (
              <ProjectRow key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ProjectList() {
  return (
    <motion.div
      className="flex-1 min-w-0 overflow-y-auto bg-linear-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.15, duration: 0.3 }}
    >
      {/* Breadcrumb / Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-linear-border text-[13px]">
        <span className="text-linear-text-secondary">Sam Roehrich</span>
        <ChevronRight className="size-3 text-linear-text-tertiary" />
        <span className="text-linear-text font-medium">2025-2026 Projects</span>
      </div>

      {/* Project sections */}
      <div>
        <StatusSection status="complete" />
        <StatusSection status="in_progress" />
        <StatusSection status="todo" />
      </div>
    </motion.div>
  );
}
