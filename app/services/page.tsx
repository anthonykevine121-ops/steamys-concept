import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "../components/site-shell";
import { SectionImage } from "../components/section-image";

const services = [
  ["Carpet Cleaning", "Deep cleaning to help remove embedded dirt, odors and everyday buildup.", "photo-1558317374-067fb5f30001"],
  ["Tile & Grout Cleaning", "Professional care for tiled floors and hard-to-clean grout lines.", "photo-1600607687939-ce8a6c25118c"],
  ["Upholstery Cleaning", "Thoughtful cleaning for sofas, chairs and other upholstered furniture.", "photo-1555041469-a586c61ea9bc"],
  ["Air Duct Cleaning", "Cleaning support for dust and debris in your ventilation system.", "photo-1621905251189-08b45d6a269e"],
  ["Artificial Turf Cleaning", "A thorough refresh for outdoor turf and high-use spaces.", "photo-1600585154340-be6161a56a0c"],
  ["Luxury Vinyl Plank", "Specialized floor care designed for luxury vinyl plank surfaces.", "photo-1600210492486-724fe5c67fb0"],
  ["Water Damage Restoration", "Responsive help and restoration support after unexpected water damage.", "photo-1581578731548-c64695cc6952"],
  ["Mold Remediation", "Careful assessment and remediation support for affected indoor spaces.", "photo-1513694203232-719a280e022f"]
];

export default function ServicesPage() {
  return <><SiteHeader/><main>
    <PageHero eyebrow="What we do" title="Cleaning & restoration services for a fresher space." description="Explore our home and property care services, with friendly support from estimate through appointment." image="https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?auto=format&fit=crop&w=2000&q=85"/>
    <section className="section-pad"><div className="container-width grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{services.map(([title, description, photo]) => <article key={title} className="overflow-hidden rounded-2xl border border-[#e8f1df] bg-[#f7fbf3]"><div className="h-44 overflow-hidden"><SectionImage src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=700&q=80`} alt={`${title} service`} className="transition duration-300 hover:scale-105"/></div><div className="p-6"><CheckCircle2 className="mb-4 text-[#65b916]"/><h2 className="text-lg font-black text-navy">{title}</h2><p className="mt-2 min-h-16 text-sm leading-6 text-slate-500">{description}</p><Link href="/booking-service" className="mt-4 inline-flex items-center gap-2 text-xs font-black text-navy">REQUEST A QUOTE <ArrowRight size={14}/></Link></div></article>)}</div></section>
  </main><SiteFooter/></>;
}
