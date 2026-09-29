import { about, timeline } from "../data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">About me</h2>

        <div className="mt-10 grid gap-14 md:grid-cols-2">
          <div className="max-w-prose space-y-4 leading-relaxed text-muted">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <ul className="mt-6 space-y-2 border-l-2 border-warm pl-4 text-fg">
              {about.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <ol className="relative space-y-8 border-l border-line pl-6">
            {timeline.map((t) => (
              <li key={t.title} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                <p className="text-sm text-warm">{t.when}</p>
                <h3 className="font-display text-lg font-medium">{t.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
