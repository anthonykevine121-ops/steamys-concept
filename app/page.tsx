"use client";

import { useState } from "react";
import {
  ArrowRight, Check, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Clock3, Droplets, Fan,
  Home, Phone, ShieldCheck, Sparkles, Star, Truck, Waves,
  Sofa, Grid2X2, Wind, MapPin, BadgeCheck, CalendarDays
} from "lucide-react";
import { SiteHeader } from "./components/site-shell";
import { SectionImage } from "./components/section-image";

const services = [
  { icon: Sofa, title: "Carpet Cleaning", text: "Deep-cleaning that removes embedded dirt, odors and everyday buildup, leaving your carpets fresh.", image: "photo-1558317374-067fb5f30001" },
  { icon: Grid2X2, title: "Tile & Grout Cleaning", text: "Professional cleaning that lifts stubborn grime and restores the look of your tiled floors.", image: "photo-1600607687939-ce8a6c25118c" },
  { icon: Sparkles, title: "Upholstery Cleaning", text: "Gentle, effective care for sofas, chairs and other favorite furniture pieces.", image: "photo-1555041469-a586c61ea9bc" },
  { icon: Fan, title: "Air Duct Cleaning", text: "Help improve indoor air quality by clearing dust and debris from your ventilation system.", image: "photo-1621905251189-08b45d6a269e" },
  { icon: Waves, title: "Artificial Turf Cleaning", text: "Refresh outdoor turf with a thorough clean that helps remove dirt, odors and buildup.", image: "photo-1600585154340-be6161a56a0c" },
  { icon: Home, title: "Luxury Vinyl Plank", text: "Specialized floor care that protects your finish and brings back a beautiful clean.", image: "photo-1600210492486-724fe5c67fb0" },
  { icon: Droplets, title: "Water Damage Restoration", text: "Fast response and professional support when unexpected water damage happens.", image: "photo-1581578731548-c64695cc6952" },
  { icon: ShieldCheck, title: "Mold Remediation", text: "Careful assessment and remediation support to help restore a healthier indoor space.", image: "photo-1513694203232-719a280e022f" }
];

const offers = [
  { name: "3 Rooms Carpet Cleaning", detail: "Deep carpet cleaning for three rooms. Fresh floors, no everyday buildup.", price: "$99", tag: "POPULAR" },
  { name: "Tile & Grout Cleaning Special", detail: "Refresh your tile floors with a professional deep clean.", price: "$50", tag: "LIMITED TIME" },
  { name: "Upholstery Cleaning", detail: "Professional cleaning for sofas, chairs and upholstered furniture.", price: "20%", suffix: " OFF", tag: "SAVE MORE" },
  { name: "Carpet + Tile Cleaning Bundle", detail: "Combine two essential services and save on your home refresh.", price: "SAVE", suffix: " MORE", tag: "BUNDLE" }
];

const reasons = [
  ["Trusted local professionals", "Friendly, trained technicians who treat your home with care."],
  ["Advanced cleaning equipment", "Professional-grade tools for a deeper, more consistent clean."],
  ["Reliable & convenient", "Clear communication, flexible scheduling and dependable service."],
  ["Emergency restoration support", "A responsive team when water damage cannot wait."]
];

const testimonials = [
  { name: "Jordan M.", loc: "Tucson, AZ", quote: "The team was friendly, on time and did a fantastic job on our carpets. The whole home feels fresher.", img: "photo-1558317374-067fb5f30001" },
  { name: "Angela R.", loc: "Oro Valley, AZ", quote: "Booking was simple and the results were better than expected. I would absolutely recommend them.", img: "photo-1600607687939-ce8a6c25118c" },
  { name: "Michael T.", loc: "Marana, AZ", quote: "Professional from the first call to the finished job. They explained everything and treated our home with care.", img: "photo-1581578731548-c64695cc6952" }
];

function SectionHeading({ eyebrow, title, highlight }: { eyebrow: string; title: string; highlight?: string }) {
  return <div className="mx-auto mb-10 max-w-2xl text-center"><p className="eyebrow mb-3">{eyebrow}</p><h2 className="section-title">{title} {highlight && <span className="text-[#69bd16]">{highlight}</span>}</h2></div>;
}

function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  return <form className={`rounded-2xl bg-white p-5 text-navy shadow-soft ${compact ? "" : "md:p-7"}`} onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
    <div className="mb-4"><h3 className="text-xl font-black">Get a Fast, Free Quote</h3><p className="mt-1 text-xs text-slate-500">Tell us what you need cleaned. We’ll be in touch.</p></div>
    <div className="space-y-3">
      <select className="field" required defaultValue=""><option value="" disabled>Select a service</option>{services.map(s => <option key={s.title}>{s.title}</option>)}</select>
      <input className="field" placeholder="ZIP code" required />
      <input className="field" placeholder="Your name" required />
      <input className="field" type="tel" placeholder="Phone number" required />
      {!compact && <input className="field" type="email" placeholder="Email address" />}
      <button className="btn-primary w-full" type="submit">{sent ? "REQUEST RECEIVED" : "CHECK AVAILABILITY"} <ArrowRight size={15}/></button>
      {sent && <p className="text-center text-xs font-semibold text-green-700">Thanks! Your request is ready. Connect a form service to receive submissions.</p>}
      <p className="text-center text-[10px] text-slate-400">No obligation • Friendly local service</p>
    </div>
  </form>;
}

export default function HomePage() {
  const nav = ["Home", "Services", "Our Team", "Blog", "Booking Service", "About", "Contact"];
  const links = ["/", "/services", "/team", "/blog", "/booking-service", "/about", "/contact"];
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonial = testimonials[testimonialIndex];

  function showTestimonial(direction: -1 | 1) {
    setTestimonialIndex(index => (index + direction + testimonials.length) % testimonials.length);
  }

  return <main className="overflow-x-clip">
    <SiteHeader/>

    <section id="home" className="relative isolate min-h-[650px] bg-navy text-white">
      <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{backgroundImage:"url('https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?auto=format&fit=crop&w=2000&q=85')"}}/>
      <div className="absolute inset-0 -z-10 bg-hero-shade"/>
      <div className="container-width grid min-h-[650px] items-center gap-10 py-16 lg:grid-cols-[1.15fr_.75fr]">
        <div className="max-w-[620px]"><p className="mb-5 text-xs font-black uppercase tracking-[.18em] text-lime">Arizona’s trusted cleaning & restoration experts</p><h1 className="text-5xl font-black leading-[.99] tracking-[-.055em] sm:text-6xl lg:text-[68px]">A Cleaner Home.<br/><span className="text-lime">Fast Help</span> When<br/>Damage Happens.</h1><p className="mt-6 max-w-lg text-sm leading-7 text-slate-200">Professional carpet, tile, upholstery and specialty floor cleaning — plus reliable water damage restoration. We make your home feel fresh, healthy and renewed.</p><div className="mt-7 flex flex-wrap gap-3"><a className="btn-primary" href="#contact">BOOK A CLEANING <ArrowRight size={15}/></a><a className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-[11px] font-black text-white hover:bg-white/10" href="#emergency">REQUEST EMERGENCY HELP <Phone size={14}/></a></div><div className="mt-7 grid max-w-lg grid-cols-2 gap-3 text-[11px] font-semibold text-slate-100">{["Trusted local professionals","Advanced cleaning equipment","Residential & commercial","Emergency restoration support"].map(t=><p key={t} className="flex items-center gap-2"><CheckCircle2 size={15} className="shrink-0 text-lime"/>{t}</p>)}</div></div>
        <div className="mx-auto w-full max-w-[390px]"><QuoteForm/></div>
      </div>
      <div className="absolute bottom-0 left-0 h-5 w-full bg-lime" style={{clipPath:"polygon(0 70%,10% 20%,20% 60%,32% 10%,45% 65%,57% 15%,69% 65%,82% 10%,92% 55%,100% 15%,100% 100%,0 100%)"}}/>
    </section>

    <section id="services" className="section-pad bg-white">
      <div className="container-width"><SectionHeading eyebrow="Our services" title="Professional Cleaning And" highlight="Restoration Services"/>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{services.map((s,i)=><article key={s.title} className={`group overflow-hidden rounded-[25px] border border-[#e8f1df] text-center transition hover:-translate-y-1 hover:shadow-soft ${i===1?"bg-lime/15": "bg-[#f7fbf3]"}`}><div className="h-36 overflow-hidden"><SectionImage src={`https://images.unsplash.com/${s.image}?auto=format&fit=crop&w=700&q=80`} alt={s.title}/></div><div className="px-5 pb-6 pt-5"><div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-lime shadow-lg"><s.icon size={25}/></div><h3 className="mb-2 text-sm font-black text-navy">{s.title}</h3><p className="min-h-[64px] text-[11px] leading-5 text-slate-500">{s.text}</p><a href="#contact" className="btn-outline mt-4">LEARN MORE <ArrowRight size={12}/></a></div></article>)}</div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5"><a href="#contact" className="btn-primary">GET A FREE ESTIMATE <ArrowRight size={14}/></a><a href="tel:5203909976" className="flex items-center gap-2 text-xs font-bold text-navy"><Phone size={19}/> <span>Call Now<strong className="block text-base">520-390-9976</strong></span></a></div>
      </div>
    </section>

    <section id="emergency" className="relative bg-navy py-20 text-white">
      <div className="absolute inset-0 opacity-15" style={{backgroundImage:"url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80')",backgroundSize:"cover",backgroundPosition:"center"}}/>
      <div className="container-width relative grid items-center gap-10 md:grid-cols-2">
        <div className="relative min-h-[310px] overflow-hidden rounded-[28px] bg-[#10285d]"><img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=85" alt="Professional restoration technician at work" className="absolute inset-0 h-full w-full object-cover opacity-90"/><div className="absolute bottom-5 left-5 rounded-2xl bg-lime px-5 py-3 text-navy"><strong className="block text-3xl font-black">24/7</strong><span className="text-[10px] font-black uppercase">Emergency response</span></div></div>
        <div><p className="eyebrow text-lime">Water damage</p><h2 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl">Water Damage<br/><span className="text-lime">Can’t Wait.</span></h2><p className="mt-5 max-w-lg text-sm leading-7 text-slate-300">When water damage strikes, quick action matters. Steamy Concepts is ready to help assess the situation, remove excess water and support the restoration process.</p><ul className="mt-5 space-y-3 text-xs text-slate-200">{["Responsive emergency assistance","Professional equipment and experienced technicians","Clear communication from start to finish"].map(x=><li key={x} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-lime"/>{x}</li>)}</ul><div className="mt-7 flex flex-wrap items-center gap-5"><a href="#contact" className="btn-primary">REQUEST EMERGENCY HELP <ArrowRight size={14}/></a><a href="tel:5203909976" className="flex items-center gap-2 font-black"><Phone className="text-lime"/>520-390-9976</a></div></div>
      </div>
    </section>

    <section id="specials" className="section-pad bg-[#fbfcfa]">
      <div className="container-width"><div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow mb-3">Limited-time cleaning specials</p><h2 className="section-title max-w-xl">Professional Cleaning<br/>at a <span className="text-[#69bd16]">Better Value.</span></h2></div><p className="max-w-sm text-xs leading-6 text-slate-500">Refresh your home and enjoy great value with our current cleaning offers. Ask our team which specials are available.</p></div>
        <div className="grid gap-5 sm:grid-cols-2">{offers.map((o,i)=><article key={o.name} className="grid overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_8px_30px_rgba(7,23,70,.06)] sm:grid-cols-[1fr_42%]"><div className="p-6"><span className="rounded-full bg-lime/20 px-3 py-1 text-[9px] font-black tracking-wider text-[#559c0d]">{o.tag}</span><h3 className="mt-4 text-lg font-black text-navy">{o.name}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{o.detail}</p><p className="mt-4 text-3xl font-black text-[#6abd16]">{o.price}<span className="text-base">{o.suffix}</span></p><a href="#contact" className="btn-primary mt-4">BOOK THIS SPECIAL <ArrowRight size={13}/></a></div><img src={["https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80"][i]} alt={o.name} className="h-48 w-full object-cover sm:h-full"/></article>)}</div>
      </div>
    </section>

    <section id="about" className="section-pad bg-white">
      <div className="container-width grid items-center gap-12 md:grid-cols-2"><div className="relative"><img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1100&q=85" alt="Cleaning professional" className="h-[420px] w-full rounded-[28px] object-cover"/><div className="absolute -bottom-5 right-4 rounded-2xl bg-lime p-5 text-navy shadow-soft"><strong className="block text-3xl font-black">100%</strong><span className="text-[10px] font-black uppercase">Care in every clean</span></div></div><div><p className="eyebrow">About Steamy Concepts</p><h2 className="section-title mt-3">A Cleaner, Healthier<br/><span className="text-[#69bd16]">Home Starts Here.</span></h2><p className="mt-5 text-sm leading-7 text-slate-500">We believe a clean space makes room for better living. Our team brings professional care, reliable service and attention to detail to every home and business we serve.</p><div className="mt-7 space-y-5">{reasons.map(([title,desc])=><div key={title} className="flex gap-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime/20 text-[#5cae0a]"><BadgeCheck size={20}/></div><div><h3 className="text-sm font-black text-navy">{title}</h3><p className="mt-1 text-xs leading-5 text-slate-500">{desc}</p></div></div>)}</div><a href="#contact" className="btn-primary mt-8">MORE ABOUT US <ArrowRight size={14}/></a></div></div>
    </section>

    <section className="bg-[#f5f9f1] py-16">
      <div className="container-width"><SectionHeading eyebrow="Why homeowners choose us" title="Professional Results." highlight="Real Peace of Mind."/><div className="mb-6 h-56 overflow-hidden rounded-[25px]"><SectionImage src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85" alt="Fresh, clean living room"/></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[{n:"4.9/5",t:"Customer satisfaction",i:Star},{n:"1,000+",t:"Spaces refreshed",i:Home},{n:"24/7",t:"Emergency support",i:Clock3},{n:"100%",t:"Care and attention",i:ShieldCheck}].map(x=><div key={x.t} className="rounded-2xl border border-[#e6efdd] bg-white p-6 text-center"><x.i size={24} className="mx-auto mb-3 text-[#65b916]"/><p className="text-3xl font-black text-navy">{x.n}</p><p className="mt-1 text-xs text-slate-500">{x.t}</p></div>)}</div></div>
    </section>

    <section className="section-pad bg-white">
      <div className="container-width"><SectionHeading eyebrow="Simple from start to finish" title="A Better Clean in" highlight="Four Easy Steps."/><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{[{n:"01",t:"Request a quote",d:"Tell us about your space and the service you need.",i:CalendarDays,img:"photo-1558317374-067fb5f30001"},{n:"02",t:"Choose a time",d:"We’ll find a convenient appointment that works for you.",i:Clock3,img:"photo-1505693416388-ac5ce068fe85"},{n:"03",t:"We get to work",d:"Our team arrives ready with professional equipment.",i:Sparkles,img:"photo-1581578731548-c64695cc6952"},{n:"04",t:"Enjoy the refresh",d:"Relax and enjoy a cleaner, fresher space.",i:CheckCircle2,img:"photo-1600607687939-ce8a6c25118c"}].map(x=><div key={x.n} className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_10px_35px_rgba(7,23,70,.05)]"><div className="h-36"><SectionImage src={`https://images.unsplash.com/${x.img}?auto=format&fit=crop&w=700&q=80`} alt={x.t}/></div><div className="relative p-6"><span className="absolute right-5 top-4 text-3xl font-black text-[#e8f4dc]">{x.n}</span><div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-lime"><x.i size={25}/></div><h3 className="text-sm font-black text-navy">{x.t}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{x.d}</p></div></div>)}</div></div>
    </section>

    <section id="reviews" className="bg-navy py-20 text-white">
      <div className="container-width">
        <SectionHeading eyebrow="Kind words from our clients" title="Hear What Our" highlight="Customers Say"/>
        <div className="mx-auto max-w-4xl">
          <article key={testimonial.name} aria-live="polite" className="testimonial-fade-up grid overflow-hidden rounded-2xl bg-white text-navy shadow-[0_12px_40px_rgba(0,0,0,.2)] md:grid-cols-2">
            <div className="h-56 md:h-full"><SectionImage src={`https://images.unsplash.com/${testimonial.img}?auto=format&fit=crop&w=900&q=85`} alt={`Home cleaned for ${testimonial.name}`}/></div>
            <div className="flex flex-col justify-center p-7 md:p-10">
              <div aria-label="5 out of 5 stars" className="mb-5 flex gap-1 text-[#75c51c]">{Array.from({length: 5}).map((_, i) => <Star key={i} size={16} fill="currentColor"/>)}</div>
              <p className="text-lg font-semibold leading-8 text-slate-700">“{testimonial.quote}”</p>
              <div className="mt-7 border-t border-slate-100 pt-5"><p className="font-black">{testimonial.name}</p><p className="mt-1 text-xs text-slate-400">{testimonial.loc}</p></div>
            </div>
          </article>
          <div className="mt-6 flex items-center justify-between">
            <button type="button" onClick={() => showTestimonial(-1)} aria-label="Previous testimonial" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10"><ChevronLeft size={20}/></button>
            <div className="flex items-center gap-2" aria-label="Choose a testimonial">
              {testimonials.map((item, index) => <button key={item.name} type="button" onClick={() => setTestimonialIndex(index)} aria-label={`Show testimonial from ${item.name}`} aria-current={index === testimonialIndex ? "true" : undefined} className={`h-2.5 rounded-full transition-all ${index === testimonialIndex ? "w-7 bg-lime" : "w-2.5 bg-white/40 hover:bg-white/70"}`}/>)}
            </div>
            <button type="button" onClick={() => showTestimonial(1)} aria-label="Next testimonial" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10"><ChevronRight size={20}/></button>
          </div>
          <p className="sr-only">Testimonial {testimonialIndex + 1} of {testimonials.length}</p>
        </div>
      </div>
    </section>

    <section id="contact" className="section-pad bg-[#f6f9f3]">
      <div className="container-width grid overflow-hidden rounded-[28px] bg-white shadow-soft md:grid-cols-[1fr_.9fr]"><div className="relative isolate overflow-hidden bg-navy p-7 text-white md:p-10"><SectionImage src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=85" alt="" className="absolute inset-0 -z-20 opacity-30"/><div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy/95 to-navy/60"/><p className="eyebrow text-lime">Let’s get started</p><h2 className="mt-3 text-4xl font-black leading-tight">Ready for a<br/><span className="text-lime">Cleaner Space?</span></h2><p className="mt-5 max-w-md text-sm leading-7 text-slate-300">Request your free estimate today. Tell us what you need and our friendly team will help you find the right service.</p><div className="mt-8 space-y-5"><a href="tel:5203909976" className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-lime"><Phone/></span><span><small className="block text-[10px] text-slate-400">CALL OUR TEAM</small><strong>520-390-9976</strong></span></a><div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-lime"><MapPin/></span><span><small className="block text-[10px] text-slate-400">SERVICE AREA</small><strong>Arizona and surrounding areas</strong></span></div></div></div><div className="p-7 md:p-10"><h3 className="mb-1 text-2xl font-black text-navy">Get Your Free Estimate</h3><p className="mb-6 text-xs text-slate-500">Complete the form and we’ll follow up with you.</p><QuoteForm compact/></div></div>
    </section>

    <footer className="bg-[#061333] py-14 text-white"><div className="container-width"><div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"><div><a href="#home" className="flex items-center gap-2"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime text-navy"><Sparkles size={22}/></span><span className="leading-none"><strong className="block text-base font-black">STEAMY</strong><strong className="block text-[11px] tracking-[.16em] text-lime">CONCEPTS</strong></span></a><p className="mt-5 max-w-xs text-xs leading-6 text-slate-400">Professional cleaning and restoration services to help your home look and feel its best.</p></div><div><h4 className="mb-4 text-xs font-black uppercase tracking-wider text-lime">Quick links</h4><div className="space-y-3 text-xs text-slate-300">{nav.map((n,i)=><a key={n} href={links[i]} className="block hover:text-lime">{n}</a>)}</div></div><div><h4 className="mb-4 text-xs font-black uppercase tracking-wider text-lime">Our services</h4><div className="space-y-3 text-xs text-slate-300">{services.slice(0,5).map(s=><a key={s.title} href="#services" className="block hover:text-lime">{s.title}</a>)}</div></div><div><h4 className="mb-4 text-xs font-black uppercase tracking-wider text-lime">Get in touch</h4><a href="tel:5203909976" className="block text-lg font-black">520-390-9976</a><p className="mt-3 text-xs leading-6 text-slate-400">Mon–Sat: 8:00am – 6:00pm<br/>Emergency support available</p><a href="#contact" className="btn-primary mt-5">REQUEST A QUOTE <ArrowRight size={13}/></a></div></div><div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[10px] text-slate-500 sm:flex-row"><p>© {new Date().getFullYear()} Steamy Concepts. All rights reserved.</p><p>Cleaning • Restoration • Care</p></div></div></footer>
    <a href="tel:5203909976" className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-lime text-navy shadow-xl md:hidden" aria-label="Call us"><Phone size={20}/></a>
  </main>;
}
