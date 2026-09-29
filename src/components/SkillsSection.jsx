import { useState } from "react";
import { cn } from "../lib/utils";
import { skills, skillCategories } from "../data/portfolio";

export default function SkillsSection() {
  const [active, setActive] = useState("All");
  const visible = skills.filter((s) => active === "All" || s.category === active);

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Skills</h2>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist">
          {skillCategories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                active === c
                  ? "border-accent bg-accent text-bg"
                  : "border-line text-muted hover:border-accent hover:text-fg"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((s) => (
            <li key={s.name} className="rounded-lg border border-line bg-card px-4 py-3">
              <p className="font-medium">{s.name}</p>
              <p className="text-sm text-muted">{s.category}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
