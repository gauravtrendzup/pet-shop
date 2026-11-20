import { useEffect, useState } from "react";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import PromoBanner from "./components/PromoBanner";
import Features from "./components/Features";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

import { CheckCircle2, X } from "lucide-react";

const readStoredArray = (key) => {
  try {
    const stored = window.localStorage.getItem(key);
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error(`Could not read ${key} from local storage.`, error);
    return [];
  }
};

export default function App() {
  const [cart, setCart] = useState(() =>
    readStoredArray("petnova-cart").map((item) => ({
      ...item,
      quantity:
        Number.isInteger(item.quantity) && item.quantity > 0
          ? item.quantity
          : 1,
    })),
  );
  const [favorites, setFavorites] = useState(() =>
    readStoredArray("petnova-favorites"),
  );
  const [cartOpen, setCartOpen] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true, anchors: true });
    let frameId;
    const raf = (time) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(raf);
    };
    frameId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem("petnova-cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Could not save your bag to local storage.", error);
    }
  }, [cart]);

  useEffect(() => {
    try {
      window.localStorage.setItem("petnova-favorites", JSON.stringify(favorites));
    } catch (error) {
      console.error("Could not save favorites to local storage.", error);
    }
  }, [favorites]);

  const addToCart = (product) => {
    setCart((previous) => {
      const existing = previous.find((item) => item.id === product.id);
      return existing
        ? previous.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...previous, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const toggleFavorite = (productId) => {
    setFavorites((previous) =>
      previous.includes(productId)
        ? previous.filter((id) => id !== productId)
        : [...previous, productId],
    );
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar
        cartCount={cartCount}
        favoriteCount={favorites.length}
        onOpenCart={() => setCartOpen(true)}
        onShowFavorites={() => setShowFavorites(true)}
      />

      <main>
        <Hero />
        <Categories />
        <Products
          addToCart={addToCart}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          showFavoritesOnly={showFavorites}
          onShowAllProducts={() => setShowFavorites(false)}
        />
        <PromoBanner />
        <Features />
        <About />
        <Testimonials />
        <Newsletter />
      </main>

      <Footer />

      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onUpdateQuantity={(productId, change) =>
          setCart((previous) =>
            previous
              .map((item) =>
                item.id === productId
                  ? { ...item, quantity: item.quantity + change }
                  : item,
              )
              .filter((item) => item.quantity > 0),
          )
        }
        onRemove={(productId) =>
          setCart((previous) => previous.filter((item) => item.id !== productId))
        }
        onCheckout={() => {
          setCartOpen(false);
          setNotification("Checkout is coming soon — your bag is saved.");
          window.clearTimeout(window.notificationTimer);
          window.notificationTimer = window.setTimeout(
            () => setNotification(""),
            2500,
          );
        }}
      />

      {notification && (
        <div className="fixed bottom-6 right-5 z-[100] flex max-w-[calc(100vw-40px)] items-center gap-3 rounded-2xl bg-brown px-5 py-4 text-white shadow-2xl">
          <CheckCircle2 className="shrink-0 text-green-400" size={21} />

          <p className="text-sm font-semibold">{notification}</p>

          <button
            onClick={() => setNotification("")}
            aria-label="Close notification"
          >
            <X size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
