import Link from "next/link";
import { ArrowRight, BadgeCheck, HeartHandshake, ShieldCheck } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "../components/site-shell";
import { SectionImage } from "../components/section-image";

export default function TeamPage() {
  return <><SiteHeader/><main>
    <PageHero eyebrow="Our team" title="Good people. Professional care." description="Our cleaning and restoration team is here to make it easier to care for your home, with clear communication and thoughtful service at every step." image="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=2000&q=85"/>
    <section className="section-pad"><div className="container-width grid gap-6 md:grid-cols-3">
      {[{ icon: HeartHandshake, title: "Respect for your space", text: "We approach every home and business with care, courtesy and attention to detail.", image: "photo-1581578731548-c64695cc6952" }, { icon: BadgeCheck, title: "Focused on the work", text: "We take time to understand your cleaning needs and explain the service before getting started.", image: "photo-1603712725038-e9334ae8f39f" }, { icon: ShieldCheck, title: "Here when you need us", text: "From routine cleaning to restoration questions, our team helps you find the right next step.", image: "photo-1527515637462-cff94eecc1ac" }].map(({ icon: Icon, title, text, image }) => <article key={title} className="overflow-hidden rounded-2xl bg-[#f7fbf3]"><div className="h-52"><SectionImage src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=800&q=80`} alt="Cleaning professional at work"/></div><div className="p-7"><Icon className="mb-5 text-[#65b916]" size={28}/><h2 className="text-xl font-black text-navy">{title}</h2><p className="mt-3 text-sm leading-6 text-slate-500">{text}</p></div></article>)}
    </div><div className="container-width mt-10 text-center"><Link href="/contact" className="btn-primary">MEET US AND GET IN TOUCH <ArrowRight size={14}/></Link></div></section>
  </main><SiteFooter/></>;
}
