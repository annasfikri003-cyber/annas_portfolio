import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "../data/portfolio";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Opens the visitor's mail app with the message filled in. No backend needed.
  // To send straight from the page instead, swap this for EmailJS (emailjs.send).
  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full rounded-lg border border-line bg-card px-4 py-3 outline-none transition-colors focus:border-accent";

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Contact</h2>
        <p className="mt-3 max-w-xl text-muted">
          Have a project, an internship lead or a question about security? Send me a message.
        </p>

        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <ul className="space-y-5">
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-accent" />
              <a href={`mailto:${profile.email}`} className="hover:underline">
                {profile.email}
              </a>
            </li>
            {profile.phone && (
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-accent" />
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:underline">
                  {profile.phone}
                </a>
              </li>
            )}
            <li className="flex items-center gap-3">
              <MapPin size={20} className="text-accent" />
              <span>{profile.location}</span>
            </li>
            <li className="flex gap-6 pt-2 text-sm">
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-muted">Your name</label>
              <input id="name" name="name" required value={form.name} onChange={update} className={field} />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-muted">Your email</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={update} className={field} />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-muted">Message</label>
              <textarea id="message" name="message" rows={5} required value={form.message} onChange={update} className={field} />
            </div>
            <button
              type="submit"
              className="rounded-full bg-accent px-6 py-3 font-medium text-bg transition-opacity hover:opacity-90"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
