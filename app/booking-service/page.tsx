import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "../components/site-shell";
import { SectionImage } from "../components/section-image";
import { BookingForm } from "../components/booking-form";

export default function BookingServicePage() {
  return <><SiteHeader/><main>
    <PageHero eyebrow="Booking service" title="Let’s find the right time for your service." description="Tell us what you need and our team will help coordinate the next steps for your cleaning or restoration service." image="https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=2000&q=85"/>
    <section className="section-pad bg-[#f6f9f3]"><div className="container-width grid items-start gap-8 lg:grid-cols-[1.4fr_.6fr]"><BookingForm/><aside className="space-y-5 lg:sticky lg:top-28"><div className="h-52 overflow-hidden rounded-2xl"><SectionImage src="https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?auto=format&fit=crop&w=900&q=80" alt="A freshly cleaned home"/></div><div className="rounded-2xl bg-navy p-7 text-white"><h2 className="text-xl font-black">Need help right away?</h2><p className="mt-3 text-sm leading-6 text-slate-300">Call our team to discuss availability or urgent restoration needs.</p><a href="tel:5203909976" className="btn-primary mt-5"><Phone size={15}/>CALL 520-390-9976</a></div><div className="rounded-2xl border border-slate-200 bg-white p-7"><p className="eyebrow">Still deciding?</p><h2 className="mt-3 text-xl font-black text-navy">Explore our services</h2><p className="mt-3 text-sm leading-6 text-slate-500">Review the cleaning and restoration options before you request a time.</p><Link href="/services" className="btn-outline mt-5">VIEW SERVICES <ArrowRight size={14}/></Link></div></aside></div></section>
  </main><SiteFooter/></>;
}
