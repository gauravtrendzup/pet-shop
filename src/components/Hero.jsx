import { ArrowUpRight, Star, Heart } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="section-padding pb-12 pt-6 md:pb-16 md:pt-9"
    >
      <div className="hero-frame">
        <div className="grid min-h-[620px] items-center gap-2 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal
            as="div"
            direction="left"
            className="relative z-10 px-7 py-14 md:px-12 md:py-20 lg:pl-16 lg:pr-4"
          >
            <div className="hero-kicker mb-8">
              <Star size={14} fill="currentColor" />
              Thoughtfully made for pets
            </div>

            <Reveal
              as="h1"
              writing
              className="hero-title"
            >
              Better days,
              <br />
              <em>happier paws.</em>
            </Reveal>

            <Reveal
              as="p"
              writing
              delay={0.12}
              className="mt-8 max-w-md text-sm leading-7 text-brown/65 md:text-base md:leading-8"
            >
              Considered essentials, playful finds, and small comforts for the
              ones who make a house feel like home.
            </Reveal>

            <Reveal
              as="div"
              delay={0.2}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#products" className="orange-button">
                Shop collection
                <ArrowUpRight size={19} />
              </a>

              <a href="#categories" className="outline-button">
                Explore more
              </a>
            </Reveal>

            <Reveal
              as="div"
              delay={0.28}
              className="mt-10 flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[
                  "photo-1543466835-00a7907e9de1",
                  "photo-1552053831-71594a27632d",
                  "photo-1583337130417-3346a1be7dee",
                ].map((photo) => (
                  <img
                    key={photo}
                    src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=100&q=80`}
                    alt="Happy pet"
                    className="h-10 w-10 rounded-full border-2 border-cream object-cover"
                  />
                ))}
              </div>

              <div>
                <div className="flex gap-1 text-orange">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star key={n} size={13} fill="currentColor" />
                  ))}
                </div>

                <p className="mt-1 text-xs font-semibold text-brown/65">
                  Loved by 10,000+ pet parents
                </p>
              </div>
            </Reveal>
          </Reveal>

          <Reveal
            as="div"
            direction="right"
            className="hero-visual"
          >
            <Reveal
              as="img"
              src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=90"
              alt="Golden retriever enjoying a sunny day"
              direction="right"
              delay={0.08}
              className="hero-photo"
            />
            <Reveal as="div" direction="up" delay={0.3} className="hero-note">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-peach text-orange">
                <Heart size={19} fill="currentColor" />
              </div>
              <div>
                <p className="text-sm font-bold text-brown">Pet approved</p>
                <p className="mt-0.5 text-xs text-brown/55">Made for happy paws</p>
              </div>
            </Reveal>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
