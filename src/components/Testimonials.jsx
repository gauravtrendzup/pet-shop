import { Star } from "lucide-react";
import Reveal from "./Reveal";

const reviews = [
  {
    name: "Priya Sharma",
    pet: "Mom of Bruno 🐶",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    review:
      "Bruno absolutely loves his new toys! The quality is amazing and the packaging was so thoughtful. Definitely ordering again!",
  },
  {
    name: "Aarav Mehta",
    pet: "Dad of Mochi 🐱",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    review:
      "Finally found a place where I can shop for everything Mochi needs. Super easy experience and lovely product selection.",
  },
  {
    name: "Ananya Kapoor",
    pet: "Mom of Coco 🐕",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80",
    review:
      "The little details make all the difference. Coco loves her bed and I love how beautiful everything looks!",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#E4E6DA] py-24 md:py-36">
      <Reveal as="div" writing className="mx-auto mb-16 max-w-3xl text-center">
        <p className="section-kicker mb-6 justify-center">
          <span className="h-px w-8 bg-orange" />
          Notes from the paw-family
        </p>

        <h2 className="editorial-heading">
          Love looks good <em>on everyone.</em>
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-brown/55">
          A little love from the humans behind some very happy paws.
        </p>
      </Reveal>

      <div className="mx-auto grid max-w-[1500px] gap-4 md:grid-cols-3">
        {reviews.map((review) => (
          <article
            key={review.name}
            className="review-card flex min-h-[330px] flex-col p-7 md:p-9"
          >
            <Reveal
              as="div"
              delay={reviews.indexOf(review) * 0.08}
              className="flex gap-1 text-orange"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} size={16} fill="currentColor" />
              ))}
            </Reveal>

            <Reveal
              as="p"
              writing
              delay={0.08}
              className="mt-7 flex-1 font-display text-xl leading-8 text-brown/80 md:text-2xl"
            >
              "{review.review}"
            </Reveal>

            <div className="mt-7 flex items-center gap-3 border-t border-brown/10 pt-6">
              <Reveal
                as="img"
                src={review.image}
                alt={review.name}
                direction="left"
                delay={0.12}
                className="h-12 w-12 rounded-full object-cover"
              />
              <Reveal as="div" direction="right" delay={0.16}>
                <h3 className="font-bold">{review.name}</h3>
                <p className="mt-1 text-xs text-brown/50">{review.pet}</p>
              </Reveal>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}