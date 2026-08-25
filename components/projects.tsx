"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 flex items-end justify-between"
      >
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-primary">
            Projects
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Selected work.
          </h2>
        </div>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.a
            key={project.slug}
            href={project.github}
            target={project.github ? "_blank" : undefined}
            rel={project.github ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="glass group relative flex flex-col justify-between overflow-hidden rounded-2xl p-7 transition-colors hover:border-primary/30"
          >
            <div>
              <div className="flex items-start justify-between">
                <h3 className="font-display text-lg font-medium text-ink">
                  {project.name}
                </h3>
                {project.github && (
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                )}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.summary}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-ink/10 px-2.5 py-1 text-[11px] text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-1.5 text-xs text-muted">
              <Github className="h-3.5 w-3.5" />
              View on GitHub
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
