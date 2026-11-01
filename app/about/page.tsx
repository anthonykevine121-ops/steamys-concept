import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "../components/site-shell";
import { SectionImage } from "../components/section-image";

export default function AboutPage() {
  return <><SiteHeader/><main>
    <PageHero eyebrow="About Steamy Concepts" title="A cleaner, healthier home starts here." description="We believe a clean space makes room for better living. We provide professional cleaning and restoration services for homes and businesses in Arizona and surrounding areas." image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"/>
    <section className="section-pad"><div className="container-width grid items-center gap-10 md:grid-cols-2"><div className="h-80 overflow-hidden rounded-[28px] md:h-[420px]"><SectionImage src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1100&q=85" alt="Cleaning professional caring for a home"/></div><div><p className="eyebrow">Our approach</p><h2 className="section-title mt-3">Reliable service, with care in every clean.</h2><p className="mt-5 text-sm leading-7 text-slate-500">From the first conversation to the finished service, our goal is to make the process clear and convenient. We listen to what you need, explain your options and help you take the next step.</p><ul className="mt-6 space-y-5">{["Friendly, local service", "Professional cleaning equipment", "Residential and commercial care", "Responsive restoration support"].map(item => <li key={item} className="flex items-center gap-3 text-sm font-bold text-navy"><CheckCircle2 className="shrink-0 text-[#65b916]"/>{item}</li>)}</ul><Link href="/services" className="btn-primary mt-8">EXPLORE OUR SERVICES <ArrowRight size={14}/></Link></div></div></section>
  </main><SiteFooter/></>;
}
