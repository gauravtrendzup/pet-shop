import { useState } from "react";
import {
  Menu,
  X,
  ShoppingBag,
  Search,
  Heart,
  PawPrint,
} from "lucide-react";

export default function Navbar({
  cartCount,
  favoriteCount,
  onOpenCart,
  onShowFavorites,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Shop", "#products"],
    ["Categories", "#categories"],
    ["About Us", "#about"],
    ["Contact", "#contact"],
  ];

  return (
    <>
      <div className="bg-brown px-4 py-2.5 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-white md:text-xs">
        <span className="text-[#DCE2A7]">Complimentary delivery</span> on orders above ₹999
        <span className="ml-2 hidden sm:inline text-white/40">—</span>
        <span className="ml-2 hidden sm:inline text-white/65">A little more love for your home</span>
      </div>

      <header className="sticky top-0 z-50 border-b border-brown/10 bg-cream/90 backdrop-blur-xl">
        <nav className="section-padding mx-auto flex h-[76px] max-w-[1720px] items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brown text-cream">
              <PawPrint size={23} />
            </div>
            <span className="font-display text-[22px] font-bold tracking-[-0.06em]">
              petnova<span className="text-orange">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-9 lg:flex">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[11px] font-bold uppercase tracking-[0.14em] text-brown/60 transition hover:text-orange"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              aria-label="Search products"
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              className="hidden h-11 w-11 items-center justify-center rounded-full transition hover:bg-peach sm:flex"
            >
              <Search size={20} />
            </button>

            <a
              href="#products"
              onClick={onShowFavorites}
              aria-label={`View ${favoriteCount} favorite products`}
              className="relative flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-peach"
            >
              <Heart size={20} />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange px-1 text-[10px] font-bold text-white">
                {favoriteCount}
              </span>
            </a>

            <button
              type="button"
              onClick={onOpenCart}
              aria-label={`Open shopping bag, ${cartCount} items`}
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brown text-white transition hover:bg-orange"
            >
              <ShoppingBag size={19} />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brown px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-peach lg:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t border-brown/10 bg-cream px-6 py-6 lg:hidden">
            <div className="flex flex-col gap-5">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="font-semibold"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}