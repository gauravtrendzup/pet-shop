import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const categories = [
  {
    title: "Pet Food",
    subtitle: "Healthy bites, happy lives",
    image:
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=600&q=85",
    bg: "#E5E8DE",
  },
  {
    title: "Toys & Play",
    subtitle: "Let the fun begin",
    image:
      "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=600&q=85",
    bg: "#E7E4D9",
  },
  {
    title: "Cozy Beds",
    subtitle: "Sweet dreams for paws",
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=85",
    bg: "#EAE9E1",
  },
  {
    title: "Grooming",
    subtitle: "Fresh, fluffy and fabulous",
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=85",
    bg: "#E9E3DB",
  },
];

export default function Categories() {
  return (
    <section id="categories" className="section-padding py-24 md:py-36">
      <Reveal as="div" writing className="mb-12 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="section-kicker mb-5">
            <span className="h-px w-8 bg-orange" />
            The good stuff
          </p>
          <h2 className="editorial-heading">
            Find their <em>kind of joy.</em>
          </h2>
        </div>

        <a
          href="#products"
          className="hidden items-center gap-2 font-bold hover:text-orange sm:flex"
        >
          View all categories <ArrowUpRight size={19} />
        </a>
      </Reveal>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {categories.map((item, i) => (
          <a
            href="#products"
            key={item.title}
            className="category-card group overflow-hidden p-2.5 transition duration-500 hover:-translate-y-2 md:p-3"
            style={{ backgroundColor: item.bg }}
          >
            <Reveal
              as="div"
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 0.08}
              className="relative overflow-hidden rounded-[1.05rem]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="aspect-[4/4.6] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brown transition group-hover:bg-orange group-hover:text-white">
                <ArrowUpRight size={20} />
              </div>
            </Reveal>

            <Reveal
              as="div"
              writing
              delay={i * 0.08 + 0.1}
              className="px-2 pb-4 pt-5"
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-brown/45">0{i + 1} / Collection</p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-brown/60 md:text-sm">
                {item.subtitle}
              </p>
            </Reveal>
          </a>
        ))}
      </div>
    </section>
  );
}
