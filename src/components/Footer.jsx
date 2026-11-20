import { PawPrint, ArrowUpRight, Heart } from "lucide-react";

import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer id="contact" className="bg-brown text-cream">
      <div className="section-padding py-16 md:py-20">
        <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr]">
          <Reveal as="div" className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DCE2A7] text-brown">
                <PawPrint size={20} />
              </div>
              <span className="font-display text-[22px] font-bold tracking-[-0.06em]">
                petnova<span className="text-orange">.</span>
              </span>
            </a>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/50">
              Making tails wag and hearts happy. Everything your furry family
              deserves, all in one place.
            </p>

            <div className="mt-7 flex gap-3">
              {[FaSquareInstagram, FaFacebook, FaSquareXTwitter].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#contact"
                    aria-label={["Instagram", "Facebook", "Twitter"][i]}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-orange hover:bg-orange"
                  >
                    <Icon size={17} />
                  </a>
                ),
              )}
            </div>
          </Reveal>

          <Reveal as="div" delay={0.08}>
            <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.17em] text-white/45">Explore</h3>
            <div className="flex flex-col gap-4 text-sm text-white/55">
              {[
                ["Home", "#home"],
                ["Shop All", "#products"],
                ["Categories", "#categories"],
                ["About Us", "#about"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="transition hover:text-orange"
                >
                  {label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal as="div" delay={0.16}>
            <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.17em] text-white/45">
              Customer Care
            </h3>
            <div className="flex flex-col gap-4 text-sm text-white/55">
              <a href="#contact" className="hover:text-orange">
                Contact Us
              </a>
              <a href="#contact" className="hover:text-orange">
                Shipping & Delivery
              </a>
              <a href="#contact" className="hover:text-orange">
                Returns & Refunds
              </a>
              <a href="#contact" className="hover:text-orange">
                FAQs
              </a>
            </div>
          </Reveal>

          <Reveal as="div" delay={0.24}>
            <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.17em] text-white/45">Say hello</h3>
            <p className="text-sm leading-7 text-white/55">
              Have a question about your furry friend? We'd love to hear from
              you.
            </p>
            <a
              href="mailto:hello@PetNova.com"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-orange"
            >
              hello@PetNova.com <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} PetNova. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={13} fill="#F15A24" stroke="#F15A24" /> for
            every paw out there.
          </p>
        </div>
      </div>
    </footer>
  );
}
