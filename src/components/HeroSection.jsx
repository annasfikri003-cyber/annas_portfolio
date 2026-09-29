import { profile } from "../data/portfolio";

const delay = (s) => ({ animationDelay: `${s}s` });

export default function HeroSection() {
  return (
    <section id="hero" className="flex min-h-screen items-center px-6">
      <div className="mx-auto w-full max-w-5xl pt-16">
        <p className="animate-rise mb-4 font-mono text-sm text-muted" style={delay(0.1)}>
          Hi, I'm
        </p>
        <h1
          className="animate-rise max-w-full font-display text-4xl font-bold leading-[1.15] sm:text-6xl lg:text-7xl"
          style={delay(0.5)}
        >
          {profile.name}
        </h1>
        <p className="animate-rise mt-5 max-w-3xl font-display text-lg font-semibold sm:text-2xl" style={delay(0.75)}>
          {profile.headline}
        </p>
        <p className="animate-rise mt-4 max-w-xl text-lg leading-relaxed text-muted" style={delay(1)}>
          {profile.intro}
        </p>
        <div className="animate-rise mt-10 flex flex-wrap gap-4" style={delay(1.5)}>
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 font-medium text-bg transition-opacity hover:opacity-90"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line px-6 py-3 font-medium transition-colors hover:border-accent"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
