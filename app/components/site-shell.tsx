"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock3, Menu, Phone, Sparkles, X } from "lucide-react";
import { SectionImage } from "./section-image";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Team", href: "/team" },
  { label: "Blog", href: "/blog" },
  { label: "Booking Service", href: "/booking-service" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export function PageHero({ eyebrow, title, description, image }: { eyebrow: string; title: string; description: string; image: string }) {
  return <section className="relative isolate overflow-hidden bg-navy py-20 text-white">
    <SectionImage src={image} alt="" priority className="absolute inset-0 -z-20 opacity-35"/>
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/55"/>
    <div className="container-width"><p className="eyebrow text-lime">{eyebrow}</p><h1 className="mt-3 max-w-3xl text-4xl font-black sm:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200">{description}</p></div>
  </section>;
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return <>
    <div className="bg-navy text-white">
      <div className="container-width flex min-h-9 items-center justify-between text-[10px]">
        <p className="hidden sm:block">Arizona’s trusted cleaning & restoration experts</p>
        <div className="ml-auto flex items-center gap-5">
          <span className="flex items-center gap-1"><Clock3 size={12} className="text-lime"/> Mon–Sat: 8am–6pm</span>
          <a href="tel:5203909976" className="flex items-center gap-1 font-bold"><Phone size={12} className="text-lime"/>520-390-9976</a>
        </div>
      </div>
    </div>
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="container-width flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-lime"><Sparkles size={23}/></span>
          <span className="leading-none"><strong className="block text-[17px] font-black tracking-tight text-navy">STEAMY</strong><strong className="block text-[12px] font-black tracking-[.17em] text-[#6cbf18]">CONCEPTS</strong></span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {navigation.map(({ label, href }) => <Link key={href} href={href} className="text-[11px] font-bold text-slate-600 transition hover:text-[#5eae0c]">{label}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:5203909976" className="text-right text-[10px] leading-tight text-slate-500">Call for service<strong className="block text-sm text-navy">520-390-9976</strong></a>
          <Link className="btn-primary" href="/booking-service">BOOK CLEANING <ArrowRight size={14}/></Link>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg border border-slate-200 p-2 lg:hidden" aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
      </div>
      {menuOpen && <nav className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
        {navigation.map(({ label, href }) => <Link onClick={() => setMenuOpen(false)} key={href} href={href} className="block border-b border-slate-100 py-3 text-sm font-bold">{label}</Link>)}
        <Link href="/booking-service" onClick={() => setMenuOpen(false)} className="btn-primary mt-4 w-full">BOOK CLEANING <ArrowRight size={14}/></Link>
      </nav>}
    </header>
  </>;
}

export function SiteFooter() {
  return <footer className="bg-[#061333] py-10 text-white">
    <div className="container-width flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
      <Link href="/" className="flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime text-navy"><Sparkles size={20}/></span>
        <span className="leading-none"><strong className="block text-sm font-black">STEAMY</strong><strong className="block text-[10px] tracking-[.16em] text-lime">CONCEPTS</strong></span>
      </Link>
      <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-300">
        {navigation.map(({ label, href }) => <Link key={href} href={href} className="hover:text-lime">{label}</Link>)}
      </nav>
      <p className="text-xs text-slate-400">© {new Date().getFullYear()} Steamy Concepts</p>
    </div>
  </footer>;
}
