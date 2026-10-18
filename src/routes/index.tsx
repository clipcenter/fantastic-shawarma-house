import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MapPin, Star, Clock } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import hero from "@/assets/hero.jpg";
import storefront from "@/assets/storefront.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fantastic Shawarma | North York Shawarma & Falafel" },
      { name: "description", content: "Fantastic Shawarma at 2558 Finch Ave W, North York. Rated 4.8 by 445 reviewers. Menu, prices, hours and phone." },
      { property: "og:title", content: "Fantastic Shawarma | North York" },
      { property: "og:description", content: "Shawarma, falafel and combos on Finch Ave W. Call (416) 740-0009." },
    ],
  }),
  component: Index,
});

type Item = { name: string; price: string; desc: string };
const menu: { section: string; items: Item[] }[] = [
  { section: "Mains", items: [
    { name: "Shawarma Wrap", price: "$9.99", desc: "Lettuce, tomatoes, onion, parsley, pickled turnip, tahini, hummus, garlic sauce, and hot sauce." },
    { name: "Shawarma Plate", price: "$16.99", desc: "Rice or fries plus lettuce, tomatoes, onion, pickled turnip, tahini, hummus, garlic sauce, and hot sauce." },
    { name: "Shawarma Combo", price: "$16.99", desc: "Your choice of wrap or plate with fries, rice, salad, and a pop (can). Lettuce, tomatoes, onion, parsley, pickled turnip, tahini, hummus, garlic sauce, and hot sauce." },
    { name: "Falafel Wrap (5 Pieces)", price: "$7.49", desc: "Vegetarian. Lettuce, tomatoes, onion, parsley, pickled turnip, tahini, hummus, garlic sauce, and hot sauce." },
    { name: "Falafel Plate (8 Pieces)", price: "$14.99", desc: "Vegetarian. Rice or fries plus lettuce, tomatoes, onion, pickled turnip, tahini, hummus, garlic sauce, and hot sauce." },
    { name: "Kebab Chicken Tandoori", price: "$16.99", desc: "Rice or fries plus lettuce, tomato, onion, pickled turnip, tahini, hummus, garlic sauce and hot sauce." },
    { name: "Homemade Cheeseburger Sandwich", price: "$9.99", desc: "Our homemade cheeseburger on a bun." },
    { name: "Homemade Cheeseburger Combo", price: "$16.99", desc: "Homemade cheeseburger served as a combo." },
    { name: "1 Kg Shawarma", price: "$59.99", desc: "A full kilogram of shawarma — chicken, beef or mixed." },
  ]},
  { section: "Sides", items: [
    { name: "Falafel Balls", price: "$17.98", desc: "Half dozen or one dozen." },
    { name: "French Fries", price: "$9.98", desc: "Regular size or large size." },
    { name: "Seasoned Basmati Rice", price: "$4.99", desc: "Regular size or large size." },
  ]},
  { section: "Beverages", items: [
    { name: "Ayran Yogurt Drink (473 ml)", price: "$2.99", desc: "Authentic yogurt drink." },
    { name: "Canned Pop (355 ml)", price: "$1.59", desc: "Coca-Cola, Coke Zero, Diet Coke, Pepsi, Sprite, ginger ale, Fanta orange, Nestea, Crush, Crush cream soda & Crush grape." },
    { name: "Juice Bottle", price: "$2.49", desc: "Mango, mango carrot & guava." },
    { name: "Bottled Water", price: "$1.99", desc: "Cold bottled water." },
  ]},
];

const hours = [
  ["Sunday", "12 – 8:30 p.m."], ["Monday", "12 – 8:30 p.m."], ["Tuesday", "11 a.m. – 8:30 p.m."],
  ["Wednesday", "11 a.m. – 8:30 p.m."], ["Thursday", "11 a.m. – 8:30 p.m."], ["Friday", "11 a.m. – 8:30 p.m."], ["Saturday", "12 – 8:30 p.m."],
];

const reviews = [
  { name: "Ahmed K.", text: "Best chicken shawarma on Finch. Generous portions and the garlic sauce is amazing." },
  { name: "Sarah M.", text: "Falafel plate is fresh and crispy every time. Friendly staff and fast service." },
  { name: "Daniel R.", text: "The combo is great value. Rice is perfectly seasoned. Highly recommend!" },
];

const ADDRESS = "2558 Finch Ave W, North York, ON M9M 2G3";

function Index() {
  const [selected, setSelected] = useState<Item | null>(null);
  const today = new Date().getDay();
  return (
    <div className="font-sans">
      <header className="relative min-h-[80vh] flex items-end">
        <img src={hero} alt="Chicken shawarma plate with rice, hummus and pickled turnips" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 text-primary-foreground">
          <p className="flex items-center gap-2 text-gold font-medium"><Star className="h-5 w-5 fill-current" /> 4.8 · 445 reviews · $10–20 per person</p>
          <h1 className="font-display text-6xl md:text-8xl font-extrabold mt-3">Fantastic Shawarma</h1>
          <p className="mt-4 text-lg max-w-xl opacity-90">Fresh shawarma, falafel and homemade combos in North York.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:4167400009" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold hover:opacity-90"><Phone className="h-4 w-4" /> (416) 740-0009</a>
            <a href="#menu" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/60 px-6 py-3 font-semibold hover:bg-primary-foreground/10">View Menu</a>
          </div>
        </div>
      </header>

      <section id="menu" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-5xl font-extrabold text-primary">Menu</h2>
        <p className="mt-2 text-muted-foreground">Tap any item to see its description and price.</p>
        {menu.map((s) => (
          <div key={s.section} className="mt-12">
            <h3 className="font-display text-2xl font-semibold border-b border-border pb-2">{s.section}</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {s.items.map((i) => (
                <button key={i.name} onClick={() => setSelected(i)} className="flex items-center justify-between rounded-lg bg-card p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md hover:ring-2 hover:ring-primary/40">
                  <span className="font-medium">{i.name}</span>
                  <span className="font-semibold text-primary">{i.price}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">{selected?.name}</DialogTitle>
            <DialogDescription className="text-base pt-2">{selected?.desc}</DialogDescription>
          </DialogHeader>
          <p className="text-3xl font-display font-extrabold text-primary">{selected?.price}</p>
        </DialogContent>
      </Dialog>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-5xl font-extrabold text-primary">Reviews</h2>
          <p className="mt-2 flex items-center gap-2 text-lg"><Star className="h-5 w-5 fill-gold text-gold" /> <b>4.8</b> out of 5 from 445 reviews</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-lg bg-card p-6 shadow-sm">
                <div className="flex text-gold">{[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}</div>
                <blockquote className="mt-3">“{r.text}”</blockquote>
                <figcaption className="mt-4 text-sm text-muted-foreground">— {r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-5xl font-extrabold text-primary">Visit us</h2>
          <p className="mt-6 flex gap-3"><MapPin className="h-5 w-5 text-primary shrink-0" /> {ADDRESS}</p>
          <p className="mt-3 flex gap-3"><Phone className="h-5 w-5 text-primary" /> <a href="tel:4167400009" className="underline">(416) 740-0009</a></p>
          <h3 className="mt-8 flex items-center gap-2 font-display text-2xl font-semibold"><Clock className="h-5 w-5 text-primary" /> Hours</h3>
          <ul className="mt-3 divide-y divide-border">
            {hours.map(([d, h], idx) => (
              <li key={d} className={`flex justify-between py-2 ${idx === today ? "font-semibold text-primary" : ""}`}><span>{d}</span><span>{h}</span></li>
            ))}
          </ul>
          <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">Get directions</a>
        </div>
        <div className="space-y-4">
          <img src={storefront.url} alt="Fantastic Shawarma storefront at 2558 Finch Ave W" loading="lazy" className="w-full rounded-lg object-cover shadow-md" />
          <iframe title="Map" className="h-64 w-full rounded-lg" loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`} />
        </div>
      </section>

      <footer className="bg-foreground py-8 text-center text-sm text-background">© Fantastic Shawarma · {ADDRESS}</footer>
    </div>
  );
}
