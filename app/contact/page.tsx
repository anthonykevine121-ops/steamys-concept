import Link from "next/link";
import { ArrowRight, Clock3, MapPin, Phone } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "../components/site-shell";
import { SectionImage } from "../components/section-image";

export default function ContactPage() {
  return <><SiteHeader/><main>
    <PageHero eyebrow="Contact us" title="We’re ready to help with your next clean." description="Contact Steamy Concepts for service questions, estimates and restoration support." image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"/>
    <section className="section-pad"><div className="container-width grid gap-5 md:grid-cols-3">
      <a href="tel:5203909976" className="overflow-hidden rounded-2xl bg-[#f7fbf3]"><div className="h-44"><SectionImage src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=700&q=80" alt="Cleaning team ready to take your call"/></div><div className="p-7"><Phone className="mb-5 text-[#65b916]"/><h2 className="text-lg font-black text-navy">Call our team</h2><p className="mt-2 text-sm text-slate-500">520-390-9976</p></div></a>
      <div className="overflow-hidden rounded-2xl bg-[#f7fbf3]"><div className="h-44"><SectionImage src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80" alt="Comfortable home interior"/></div><div className="p-7"><Clock3 className="mb-5 text-[#65b916]"/><h2 className="text-lg font-black text-navy">Business hours</h2><p className="mt-2 text-sm text-slate-500">Monday–Saturday, 8am–6pm</p></div></div>
      <div className="overflow-hidden rounded-2xl bg-[#f7fbf3]"><div className="h-44"><SectionImage src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80" alt="Arizona desert landscape"/></div><div className="p-7"><MapPin className="mb-5 text-[#65b916]"/><h2 className="text-lg font-black text-navy">Service area</h2><p className="mt-2 text-sm text-slate-500">Arizona and surrounding areas</p></div></div>
    </div><div className="container-width mt-10"><Link href="/booking-service" className="btn-primary">REQUEST A BOOKING <ArrowRight size={14}/></Link></div></section>
  </main><SiteFooter/></>;
}
