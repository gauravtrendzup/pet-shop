import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import Reveal from "./Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="section-padding py-24 md:py-36">
      <div className="newsletter-panel relative overflow-hidden rounded-[1.75rem] px-6 py-16 text-center md:px-12 md:py-24">
        <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full border border-brown/10" />
        <div className="absolute -bottom-36 -right-20 h-96 w-96 rounded-full border border-brown/10" />

        <div className="relative z-10 mx-auto max-w-2xl">
          <Reveal
            as="div"
            direction="up"
            className="mx-auto mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-brown text-cream"
          >
            <Mail size={25} />
          </Reveal>

          <Reveal
            as="p"
            writing
            delay={0.04}
            className="section-kicker mb-5 justify-center"
          >
            GOOD THINGS IN YOUR INBOX
          </Reveal>

          <Reveal
            as="h2"
            writing
            delay={0.08}
            className="editorial-heading"
          >
            A little more love, delivered.
          </Reveal>

          <Reveal
            as="p"
            writing
            delay={0.14}
            className="mx-auto mt-5 max-w-lg text-sm leading-7 text-brown/60"
          >
            Sign up for pet-parent tips, new arrivals, special treats and
            exclusive offers.
          </Reveal>

          <Reveal
            as="div"
            delay={0.18}
            className="mx-auto mt-9 max-w-lg"
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 rounded-2xl border border-brown/10 bg-cream/70 p-2 sm:flex-row sm:rounded-full"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="min-w-0 flex-1 rounded-full px-5 py-3 outline-none"
              />

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-full bg-orange px-7 py-4 font-bold text-white transition hover:bg-brown"
              >
                Subscribe <ArrowRight size={18} />
              </button>
            </form>
          </Reveal>

          {submitted && (
            <p className="mt-4 font-semibold text-green-800">
              Thanks for joining our furry little family! 🐾
            </p>
          )}

          <Reveal as="p" delay={0.22} className="mt-5 text-xs text-brown/40">
            No spam, just pawsitive vibes. Unsubscribe anytime.
          </Reveal>
        </div>
      </div>
    </section>
  );
}