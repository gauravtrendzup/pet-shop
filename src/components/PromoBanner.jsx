import { ArrowUpRight, Gift } from "lucide-react";
import Reveal from "./Reveal";

export default function PromoBanner() {
  return (
    <section className="section-padding py-24 md:py-36">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-brown">
        <div className="grid items-center lg:grid-cols-2">
          <Reveal
            as="div"
            direction="left"
            className="relative z-10 px-7 py-14 text-cream md:px-14 md:py-20 lg:py-24"
          >
            <div className="mb-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.17em] text-[#DCE2A7]">
              <Gift size={15} /> A little something for you
            </div>

            <Reveal
              as="h2"
              writing
              className="editorial-heading max-w-lg text-cream"
            >
              Because good days deserve <em>a little treat.</em>
            </Reveal>

            <Reveal
              as="p"
              writing
              delay={0.1}
              className="mt-6 max-w-md leading-7 text-white/60"
            >
              Get 20% off your first order. More treats, more tail wags,
              more reasons to celebrate.
            </Reveal>

            <Reveal
              as="div"
              delay={0.18}
              className="mt-8 inline-flex"
            >
              <a href="#products" className="promo-button">
                Shop the offer <ArrowUpRight size={19} />
              </a>
            </Reveal>

            <Reveal as="p" delay={0.24} className="mt-5 text-[10px] uppercase tracking-[0.08em] text-white/40">
              *Offer valid for first-time customers.
            </Reveal>
          </Reveal>

          <div className="relative min-h-[350px] lg:min-h-[520px]">
            <Reveal
              as="img"
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=90"
              alt="Happy dog ready for a treat"
              direction="right"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}