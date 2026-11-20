import { ArrowUpRight, PawPrint } from "lucide-react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section-padding py-24 md:py-36">
      <div className="mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
        <Reveal as="div" direction="left" className="relative">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=1000&q=90"
              alt="Pet enjoying a happy day at home"
              className="h-[470px] w-full object-cover object-center md:h-[680px]"
            />
          </div>

          <div className="absolute -bottom-6 right-4 z-10 rounded-2xl bg-brown px-6 py-5 text-cream shadow-soft md:right-8">
            <PawPrint size={22} className="text-[#DCE2A7]" />
            <p className="mt-3 font-display text-3xl font-semibold">10k+</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/60">
              happy pet parents
            </p>
          </div>
        </Reveal>

        <div className="pt-5 lg:py-10">
          <Reveal
            as="p"
            direction="right"
            className="section-kicker mb-6"
          >
            <span className="h-px w-8 bg-orange" />
            A note from PetNova
          </Reveal>

          <Reveal
            as="h2"
            direction="right"
            writing
            delay={0.08}
            className="editorial-heading"
          >
            Good things for
            <br />
            <em>good company.</em>
          </Reveal>

          <Reveal
            as="p"
            direction="right"
            delay={0.16}
            className="mt-8 max-w-xl text-base leading-8 text-brown/70"
          >
            The best parts of home have four paws. We started PetNova with one
            small belief: everyday life gets better when we make room for the
            animals we love.
          </Reveal>

          <Reveal
            as="p"
            direction="right"
            delay={0.22}
            className="mt-4 max-w-xl text-sm leading-7 text-brown/55"
          >
            So we gather considered essentials, useful little rituals, and
            playful discoveries—chosen to feel as good as they work.
          </Reveal>

          <Reveal
            as="div"
            direction="right"
            delay={0.28}
            className="mt-9 grid max-w-lg grid-cols-2 gap-5 border-y border-brown/15 py-6"
          >
            <div>
              <h3 className="font-display text-3xl font-semibold">100%</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.1em] text-brown/50">
                pet-parent approved
              </p>
            </div>
            <div>
              <h3 className="font-display text-3xl font-semibold">24/7</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.1em] text-brown/50">
                a whole lot of love
              </p>
            </div>
          </Reveal>

          <Reveal as="div" direction="right" delay={0.34}>
            <a href="#categories" className="orange-button mt-9">
              Discover our story <ArrowUpRight size={19} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}