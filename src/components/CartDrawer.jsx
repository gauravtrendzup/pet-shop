import { useEffect } from "react";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";

const FREE_SHIPPING_THRESHOLD = 999;

const formatPrice = (price) =>
  `₹${new Intl.NumberFormat("en-IN").format(price)}`;

export default function CartDrawer({
  open,
  items,
  onClose,
  onUpdateQuantity,
  onRemove,
  onCheckout,
}) {
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const remainingForShipping = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);
  const shippingProgress = Math.min(
    (subtotal / FREE_SHIPPING_THRESHOLD) * 100,
    100,
  );

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] flex justify-end" role="presentation">
      <button
        className="absolute inset-0 bg-brown/45 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close shopping bag"
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        className="relative flex h-full w-full max-w-[440px] flex-col bg-cream shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-brown/10 px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[2px] text-orange">
              GOOD CHOICES
            </p>
            <h2 id="cart-title" className="mt-1 font-display text-2xl font-bold">
              Your bag <span className="text-brown/40">({itemCount})</span>
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition hover:bg-peach"
            aria-label="Close shopping bag"
          >
            <X size={20} />
          </button>
        </div>

        <div className="border-b border-brown/10 bg-white/70 px-6 py-5">
          <p className="text-sm font-semibold">
            {remainingForShipping === 0
              ? "You've unlocked free shipping!"
              : `Add ${formatPrice(remainingForShipping)} for free shipping`}
          </p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-peach">
            <div
              className="h-full rounded-full bg-orange transition-[width] duration-500"
              style={{ width: `${shippingProgress}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-brown/50">
            Free delivery on orders above {formatPrice(FREE_SHIPPING_THRESHOLD)}
          </p>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-peach text-orange">
              <ShoppingBag size={27} />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold">
              Your bag is waiting for a little love
            </h3>
            <p className="mt-2 text-sm leading-6 text-brown/55">
              Find a new favorite for your furry friend and it’ll show up here.
            </p>
            <button onClick={onClose} className="orange-button mt-6">
              Keep exploring <ArrowRight size={17} />
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto px-6 py-6">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="flex gap-4 border-b border-brown/10 pb-5"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-20 rounded-2xl object-cover"
                  />
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-[10px] font-bold tracking-wider text-orange">
                          {item.category}
                        </p>
                        <h3 className="mt-1 font-display font-bold">
                          {item.name}
                        </h3>
                      </div>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="rounded-full p-1.5 text-brown/45 transition hover:bg-peach hover:text-orange"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between gap-2 pt-3">
                      <div className="flex items-center gap-3 rounded-full border border-brown/10 bg-white px-2 py-1">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          aria-label={`Decrease ${item.name} quantity`}
                          className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-peach"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="min-w-4 text-center text-sm font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          aria-label={`Increase ${item.name} quantity`}
                          className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-peach"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <span className="font-bold">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="border-t border-brown/10 bg-white px-6 py-5">
              <div className="flex items-center justify-between text-sm text-brown/60">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm text-brown/60">
                <span>Shipping</span>
                <span>{remainingForShipping === 0 ? "Free" : "Calculated at checkout"}</span>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-brown/10 pt-4 font-bold">
                <span>Total</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <button
                onClick={onCheckout}
                className="orange-button mt-5 w-full"
              >
                Continue to checkout <ArrowRight size={18} />
              </button>
              <p className="mt-3 text-center text-xs text-brown/45">
                Shipping is calculated at checkout.
              </p>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
