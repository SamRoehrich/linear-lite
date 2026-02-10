"use client";

import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
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

export function MobileFooter() {
  return (
    <motion.footer
      className="md:hidden border-t border-linear-border bg-linear-bg-secondary"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.25 }}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-[11px] text-linear-text-tertiary">
          Sam Roehrich
        </span>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon-sm"
            className="text-linear-text-secondary hover:text-linear-text hover:bg-linear-bg-hover"
            asChild
          >
            <a
              href="https://github.com/samroehrich"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="size-4" />
            </a>
          </Button>

          <Separator
            orientation="vertical"
            className="h-4 bg-linear-border"
          />

          <Button
            variant="ghost"
            size="icon-sm"
            className="text-linear-text-secondary hover:text-linear-text hover:bg-linear-bg-hover"
            asChild
          >
            <a
              href="https://x.com/washed_engineer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
            >
              <XIcon className="size-4" />
            </a>
          </Button>

          <Separator
            orientation="vertical"
            className="h-4 bg-linear-border"
          />

          <Button
            variant="ghost"
            size="icon-sm"
            className="text-linear-text-secondary hover:text-linear-text hover:bg-linear-bg-hover"
            asChild
          >
            <a href="mailto:sam_roehrich@icloud.com" aria-label="Email">
              <Mail className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </motion.footer>
  );
}
