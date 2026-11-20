import {
  Heart,
  ShieldCheck,
  Truck,
  Leaf,
} from "lucide-react";
import Reveal from "./Reveal";

const features = [
  {
    icon: Heart,
    title: "Made with love",
    description:
      "Every product is chosen with your pet's happiness and comfort in mind.",
    color: "#FCE5D5",
  },
  {
    icon: ShieldCheck,
    title: "Quality you trust",
    description:
      "Carefully selected products that meet our quality standards.",
    color: "#E9EBD9",
  },
  {
    icon: Truck,
    title: "Happy delivery",
    description:
      "We bring your pet's favorite things straight to your doorstep.",
    color: "#F5E7D6",
  },
  {
    icon: Leaf,
    title: "Thoughtful choices",
    description:
      "We love products that put pet wellbeing and thoughtful materials first.",
    color: "#F6E1DB",
  },
];

export default function Features() {
  return (
    <section className="section-padding py-24 md:py-36">
      <Reveal as="div" writing className="mx-auto mb-16 max-w-3xl">
        <p className="section-kicker mb-6">
          <span className="h-px w-8 bg-orange" />
          The PetNova promise
        </p>
        <h2 className="editorial-heading">
          Thoughtful by nature.
          <br />
          <em>Full of heart.</em>
        </h2>
        <p className="mt-6 max-w-lg text-sm leading-7 text-brown/55">
          Because they're not just pets. They're family, and they deserve
          nothing but the best.
        </p>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((item) => {
          const Icon = item.icon;

          return (
            <Reveal
              as="div"
              key={item.title}
              delay={features.indexOf(item) * 0.08}
              className="rounded-2xl border border-brown/10 bg-white/35 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/70 hover:shadow-soft"
            >
              <Reveal
                as="div"
                direction="left"
                delay={features.indexOf(item) * 0.08}
                className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl"
                style={{ backgroundColor: item.color }}
              >
                <Icon size={28} strokeWidth={1.7} />
              </Reveal>
              <Reveal as="h3" writing className="font-display text-xl font-bold">
                {item.title}
              </Reveal>
              <Reveal
                as="p"
                writing
                delay={0.08}
                className="mt-3 text-sm leading-7 text-brown/55"
              >
                {item.description}
              </Reveal>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}