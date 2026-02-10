"use client";

import { motion } from "framer-motion";
import {
  Inbox,
  Search,
  Layers,
  FolderKanban,
  Eye,
  MoreHorizontal,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const sidebarVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { x: -10, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
  external?: boolean;
}

function SidebarItem({
  icon,
  label,
  href,
  onClick,
  active,
  external,
}: SidebarItemProps) {
  const content = (
    <Button
      variant="ghost"
      className={`w-full justify-start gap-3 px-2 h-8 text-[13px] font-normal rounded-md transition-colors ${
        active
          ? "bg-linear-bg-active text-linear-text"
          : "text-linear-text-secondary hover:text-linear-text hover:bg-linear-bg-hover"
      }`}
      onClick={onClick}
      asChild={!!href}
    >
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {icon}
          <span>{label}</span>
        </a>
      ) : (
        <>
          {icon}
          <span>{label}</span>
        </>
      )}
    </Button>
  );

  return <motion.div variants={itemVariants}>{content}</motion.div>;
}

export function Sidebar() {
  return (
    <TooltipProvider delayDuration={300}>
      <motion.aside
        className="hidden md:flex w-[220px] min-w-[220px] h-screen bg-linear-bg-secondary border-r border-linear-border flex-col overflow-y-auto"
        variants={sidebarVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Workspace header */}
        <motion.div
          className="flex items-center gap-2 px-4 py-3"
          variants={itemVariants}
        >
          <span className="text-[13px] font-semibold text-linear-text">
            Sam Roehrich
          </span>
          <ChevronDown className="size-3 text-linear-text-tertiary ml-auto" />
        </motion.div>

        <div className="flex flex-col gap-0.5 px-2">
          <SidebarItem
            icon={
              <Tooltip>
                <TooltipTrigger asChild>
                  <XIcon className="size-4" />
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Follow on X</p>
                </TooltipContent>
              </Tooltip>
            }
            label="X / Twitter"
            href="https://x.com/washed_engineer"
            external
          />

          <SidebarItem
            icon={<Inbox className="size-4" />}
            label="Inbox"
            href="mailto:sam_roehrich@icloud.com"
          />

          <SidebarItem
            icon={<Search className="size-4" />}
            label="My Work"
            active
          />
        </div>

        <Separator className="my-2 bg-linear-border" />

        {/* Workspace section */}
        <div className="px-2">
          <motion.p
            className="px-2 py-1 text-[11px] font-medium text-linear-text-tertiary uppercase tracking-wider"
            variants={itemVariants}
          >
            Workspace
          </motion.p>
          <div className="flex flex-col gap-0.5">
            <SidebarItem
              icon={<Layers className="size-4" />}
              label="Projects"
              active
            />
            <SidebarItem
              icon={<FolderKanban className="size-4" />}
              label="Experience"
            />
            <SidebarItem icon={<Eye className="size-4" />} label="Views" />
          </div>
        </div>

        <Separator className="my-2 bg-linear-border" />

        <div className="px-2">
          <motion.p
            className="px-2 py-1 text-[11px] font-medium text-linear-text-tertiary uppercase tracking-wider"
            variants={itemVariants}
          >
            Highlights
          </motion.p>
          <div className="flex flex-col gap-0.5">
            <SidebarItem
              icon={
                <div className="size-2 rounded-full bg-linear-green shrink-0" />
              }
              label="2026 Projects"
              active
            />
            <SidebarItem
              icon={
                <div className="size-2 rounded-full bg-linear-accent shrink-0" />
              }
              label="2025 Shipped"
            />
          </div>
        </div>

        <div className="flex-1" />

        <motion.div
          className="px-4 py-3 text-[11px] text-linear-text-tertiary"
          variants={itemVariants}
        >
          Built with Next.js 16
        </motion.div>
      </motion.aside>
    </TooltipProvider>
  );
}
