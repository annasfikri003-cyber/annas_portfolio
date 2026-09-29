import { ExternalLink } from "lucide-react";
import { projects } from "../data/portfolio";

function Cover({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }
  return (
    <div className="flex h-44 items-end bg-linear-to-br from-accent/30 via-card to-warm/20 p-4">
      <span className="font-display text-sm text-muted">{project.context}</span>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Projects</h2>
        <p className="mt-3 max-w-xl text-muted">
          Most of these started as a real problem someone had at work.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-xl border border-line bg-card transition-colors hover:border-accent"
            >
              <div className="overflow-hidden">
                <Cover project={p} />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                {p.image && <p className="mt-1 text-sm text-warm">{p.context}</p>}
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                  >
                    Visit site <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
