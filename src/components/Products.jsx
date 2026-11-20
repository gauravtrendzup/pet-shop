import { Heart, ShoppingBag, Star } from "lucide-react";
import Reveal from "./Reveal";

const products = [
  {
    id: 1,
    name: "Crunchy Chicken Bites",
    category: "HEALTHY TREATS",
    price: 499,
    oldPrice: 599,
    rating: "4.9",
    badge: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=700&q=85",
    color: "#F4E4D5",
  },
  {
    id: 2,
    name: "Cloud Nine Pet Bed",
    category: "COMFORT & CARE",
    price: 1299,
    oldPrice: 1599,
    rating: "4.8",
    badge: "POPULAR",
    image:
      "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=700&q=85",
    color: "#E9EBD9",
  },
  {
    id: 3,
    name: "Playtime Rope Toy",
    category: "TOYS & GAMES",
    price: 349,
    oldPrice: 449,
    rating: "4.9",
    badge: "NEW",
    image:
      "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=700&q=85",
    color: "#FCE5D5",
  },
  {
    id: 4,
    name: "Everyday Pet Collar",
    category: "ACCESSORIES",
    price: 699,
    oldPrice: 899,
    rating: "4.7",
    badge: "FAVORITE",
    image:
      "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=700&q=85",
    color: "#EFE6D9",
  },
];

export default function Products({
  addToCart,
  favorites,
  onToggleFavorite,
  showFavoritesOnly,
  onShowAllProducts,
}) {
  const visibleProducts = showFavoritesOnly
    ? products.filter((product) => favorites.includes(product.id))
    : products;
  return (
    <section
      id="products"
      className="section-padding bg-[#ECEBE4] py-24 md:py-36"
    >
      <Reveal as="div" className="mb-12 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="section-kicker mb-5">
            <span className="h-px w-8 bg-orange" />
            {showFavoritesOnly ? "Collected with love" : "A few best-loved things"}
          </p>
          <h2 className="editorial-heading">
            {showFavoritesOnly ? "Your little list." : <>Made for <em>good days.</em></>}
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-brown/55">
            {showFavoritesOnly
              ? "All the little things you’ve saved for your furry friend."
              : "The goodies that get tails wagging and whiskers twitching."}
          </p>
        </div>

        {showFavoritesOnly ? (
          <button onClick={onShowAllProducts} className="outline-button">
            Explore all products
          </button>
        ) : (
          <a href="#contact" className="outline-button">
            Explore all products
          </a>
        )}
      </Reveal>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {visibleProducts.map((product, index) => (
          <article key={product.id} className="group min-w-0">
            <Reveal
              as="div"
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.08}
              className="product-image relative overflow-hidden"
              style={{ backgroundColor: product.color }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="aspect-[4/4.5] w-full object-cover"
              />

              <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] backdrop-blur md:left-4 md:top-4 md:text-[10px]">
                {product.badge}
              </span>

              <button
                onClick={() => onToggleFavorite(product.id)}
                aria-label={
                  favorites.includes(product.id)
                    ? `Remove ${product.name} from favorites`
                    : `Add ${product.name} to favorites`
                }
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 transition hover:bg-orange hover:text-white md:right-4 md:top-4"
              >
                <Heart
                  size={17}
                  fill={
                    favorites.includes(product.id) ? "currentColor" : "none"
                  }
                />
              </button>

              <button
                onClick={() => addToCart(product)}
                className="absolute bottom-3 left-3 right-3 flex translate-y-2 items-center justify-center gap-2 rounded-full bg-cream py-3 text-xs font-bold opacity-0 transition duration-300 hover:bg-brown hover:text-white group-hover:translate-y-0 group-hover:opacity-100 md:bottom-4 md:left-4 md:right-4"
              >
                <ShoppingBag size={15} /> Add to bag
              </button>
            </Reveal>

            <Reveal
              as="div"
              writing
              delay={index * 0.08 + 0.1}
              className="pt-4"
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-orange md:text-[10px]">
                {product.category}
              </p>

              <h3 className="mt-2 font-display text-base font-semibold tracking-tight md:text-lg">
                {product.name}
              </h3>

              <div className="mt-2 flex items-center justify-between gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-extrabold">
                    ₹{product.price}
                  </span>
                  <span className="text-xs text-brown/40 line-through">
                    ₹{product.oldPrice}
                  </span>
                </div>
                <span className="flex items-center gap-1 text-xs font-bold">
                  <Star size={12} fill="#F15A24" stroke="#F15A24" />
                  {product.rating}
                </span>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full rounded-full border border-brown/15 py-2.5 text-xs font-bold transition hover:border-orange hover:bg-orange hover:text-white md:hidden"
              >
                Add to bag
              </button>
            </Reveal>
          </article>
        ))}
      </div>
      {showFavoritesOnly && visibleProducts.length === 0 && (
        <div className="mt-8 rounded-3xl bg-white px-6 py-12 text-center">
          <p className="font-display text-xl font-bold">No saved favorites yet</p>
          <p className="mt-2 text-sm text-brown/55">
            Tap the heart on anything you love and it’ll be waiting here.
          </p>
        </div>
      )}
    </section>
  );
}
