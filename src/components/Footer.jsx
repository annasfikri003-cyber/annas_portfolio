import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} {profile.name}</p>
        <a href="#hero" className="hover:text-fg">Back to top</a>
      </div>
    </footer>
  );
}
