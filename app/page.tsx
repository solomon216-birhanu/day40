const menuHighlights = [
  {
    name: "Doro Wat",
    detail: "Tender chicken, berbere spice, and a rich, aromatic stew.",
    price: "$18",
    badge: "Chef's favorite",
  },
  {
    name: "Shiro Platter",
    detail: "Creamy chickpea stew served with injera and fresh greens.",
    price: "$16",
    badge: "Vegan",
  },
  {
    name: "Kitfo Deluxe",
    detail: "Minced beef, mitmita, and traditional Ethiopian sides.",
    price: "$22",
    badge: "Signature",
  },
];

const features = [
  "Freshly prepared daily",
  "Ethically sourced ingredients",
  "Fast local delivery",
  "Family-style Ethiopian feasts",
];

const reviews = [
  { name: "Aster T.", quote: "The flavors transported me straight to Addis Ababa." },
  { name: "Mikias K.", quote: "Beautiful portions, warm service, and truly authentic spice." },
  { name: "Selam B.", quote: "Perfect for dinner with friends—every bite feels special." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff8f0_0%,_#fffaf5_30%,_#f7efe8_100%)] text-[#1f1a17]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#b9562e] text-xl text-white shadow-lg shadow-[#b9562e]/20">
            A
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight">Addis Eats</p>
            <p className="text-xs uppercase tracking-[0.24em] text-[#7d5c49]">Ethiopian kitchen</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#4f413c] md:flex">
          <a href="#menu" className="transition hover:text-[#b9562e]">Menu</a>
          <a href="#story" className="transition hover:text-[#b9562e]">Our Story</a>
          <a href="#reviews" className="transition hover:text-[#b9562e]">Reviews</a>
        </nav>

        <button className="rounded-full bg-[#1f1a17] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3d2d25]">
          Order now
        </button>
      </header>

      <section className="mx-auto grid max-w-6xl gap-16 px-6 pb-20 pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-10">
        <div className="flex flex-col justify-center">
          <span className="mb-6 inline-flex w-fit items-center rounded-full border border-[#ebceb5] bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#8d5b41]">
            Authentic • Fresh • Delivered
          </span>

          <h1 className="max-w-xl text-5xl font-black leading-[1.02] tracking-[-0.06em] text-[#201914] md:text-6xl">
            Ethiopian comfort food, made for everyday joy.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-[#594b45]">
            Savor slow-cooked stews, warm injera, and vibrant spice blends inspired by Addis Ababa—brought to your table with speed and heart.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full bg-[#b9562e] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#b9562e]/20 transition hover:bg-[#a94a26]"
            >
              Explore the menu
            </a>
            <a
              href="#story"
              className="inline-flex items-center justify-center rounded-full border border-[#d6c1ae] bg-white px-6 py-3.5 text-base font-semibold text-[#2b211d] transition hover:border-[#b9562e] hover:text-[#b9562e]"
            >
              Learn our story
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-full border border-[#ecd8c3] bg-[#fff9f4] px-3.5 py-2 text-sm font-medium text-[#4f413c]"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-[#f3d5af]/70 blur-3xl" />
          <div className="absolute -right-6 bottom-8 h-36 w-36 rounded-full bg-[#d07a4d]/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-[#f2dcc2] bg-[#2a1c18] p-4 shadow-[0_35px_80px_rgba(95,60,45,0.18)]">
            <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#f8d9b9_0%,#f4c18d_25%,#a55332_68%,#452721_100%)] p-5">
              <div className="rounded-[1.25rem] bg-[#fffaf5]/90 p-5 shadow-inner">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[#865f4a]">Today’s platter</p>
                    <h2 className="mt-2 text-2xl font-bold text-[#1e1714]">Addis Feast</h2>
                  </div>
                  <span className="rounded-full bg-[#ebdac5] px-2.5 py-1 text-xs font-semibold text-[#533a2d]">
                    4.9 rating
                  </span>
                </div>

                <div className="rounded-[1.3rem] bg-[radial-gradient(circle_at_top,#f7e9db_0%,#efd7bb_30%,#d89d62_100%)] p-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-[#fffaf3] p-3 shadow-sm">
                      <div className="mb-3 flex h-16 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#d78b5d,#8d4328)] text-3xl text-white">
                        🍲
                      </div>
                      <p className="text-sm font-semibold text-[#2c201d]">Doro Wat</p>
                    </div>
                    <div className="rounded-2xl bg-[#fffaf3] p-3 shadow-sm">
                      <div className="mb-3 flex h-16 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#e0b26c,#a16431)] text-3xl text-white">
                        🌾
                      </div>
                      <p className="text-sm font-semibold text-[#2c201d]">Injera</p>
                    </div>
                    <div className="rounded-2xl bg-[#fffaf3] p-3 shadow-sm">
                      <div className="mb-3 flex h-16 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#c85b2a,#6b2a1f)] text-3xl text-white">
                        🥬
                      </div>
                      <p className="text-sm font-semibold text-[#2c201d]">Fresh Greens</p>
                    </div>
                    <div className="rounded-2xl bg-[#fffaf3] p-3 shadow-sm">
                      <div className="mb-3 flex h-16 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#c39a60,#7e4a26)] text-3xl text-white">
                        ☕
                      </div>
                      <p className="text-sm font-semibold text-[#2c201d]">Coffee</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm text-[#6d544a]">From</p>
                    <p className="text-3xl font-black tracking-tight text-[#201914]">$24</p>
                  </div>
                  <button className="rounded-full bg-[#201914] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#3c2a24]">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9d6a4f]">Popular picks</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#1d1714] md:text-4xl">
              Signature Ethiopian dishes
            </h2>
          </div>
          <a href="#" className="hidden text-sm font-semibold text-[#b9562e] md:inline-block">View all dishes →</a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {menuHighlights.map((dish) => (
            <article key={dish.name} className="rounded-[1.7rem] border border-[#f0dbc7] bg-white p-5 shadow-[0_20px_50px_rgba(128,92,76,0.08)]">
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full bg-[#f7e8d7] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8d5b41]">
                  {dish.badge}
                </span>
                <span className="text-xl font-black text-[#b9562e]">{dish.price}</span>
              </div>

              <div className="mb-4 flex h-28 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#f9e5d1,#e7b98c_50%,#d18956_100%)] text-6xl">
                {dish.name === "Doro Wat" ? "🍛" : dish.name === "Shiro Platter" ? "🥣" : "🥩"}
              </div>

              <h3 className="text-2xl font-bold text-[#231c19]">{dish.name}</h3>
              <p className="mt-3 text-base leading-7 text-[#5d4b43]">{dish.detail}</p>

              <button className="mt-6 w-full rounded-full bg-[#1f1a17] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#3b2b25]">
                Add to order
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="story" className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] bg-[#1f1a17] p-8 text-white md:grid-cols-[0.9fr_1.1fr] md:p-10 lg:p-12">
          <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#f0b16d,#d77a4a_35%,#7c3928_100%)] p-6 text-[#291d1a]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#fff5ee]">Our promise</p>
            <h3 className="mt-4 text-3xl font-black tracking-tight">A table full of memories.</h3>
            <p className="mt-4 text-base leading-7 text-[#fff7f2]">
              From family recipes to slow-simmered sauces, every dish is built to bring people together around generous, comforting food.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-black">15+</p>
              <p className="mt-2 text-sm text-[#f1e5dd]">Years of Ethiopian culinary tradition</p>
            </div>
            <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-black">30 min</p>
              <p className="mt-2 text-sm text-[#f1e5dd]">Average delivery time across the city</p>
            </div>
            <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-5 sm:col-span-2">
              <p className="text-sm uppercase tracking-[0.22em] text-[#d9c5b7]">What makes us different</p>
              <p className="mt-3 text-lg leading-8 text-[#f5e9df]">
                We combine time-honored Ethiopian recipes with fresh ingredients and a warm neighborhood service experience that feels personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9d6a4f]">Testimonials</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#1d1714] md:text-4xl">Loved by families and food lovers</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <blockquote key={review.name} className="rounded-[1.5rem] border border-[#f0dcc6] bg-white p-6 shadow-[0_15px_40px_rgba(128,92,76,0.06)]">
              <div className="mb-4 text-xl text-[#e3a35c]">★★★★★</div>
              <p className="text-base leading-7 text-[#544742]">“{review.quote}”</p>
              <footer className="mt-5 text-sm font-semibold text-[#291d1a]">{review.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#eedecb] bg-[#fffaf5]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-[#564a45] md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#b9562e] text-sm font-bold text-white">
              A
            </div>
            <span className="font-semibold text-[#1d1714]">Addis Eats</span>
          </div>
          <p>Authentic Ethiopian comfort food, delivered with care.</p>
          <p>hello@addiseats.com</p>
        </div>
      </footer>
    </main>
  );
}
