import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "../components/site-shell";
import { SectionImage } from "../components/section-image";
import { blogPosts } from "../lib/blog";

export default function BlogPage() {
  return <><SiteHeader/><main>
    <PageHero eyebrow="Steamy Concepts blog" title="Helpful tips for a cleaner space." description="Care advice and practical information from our cleaning and restoration team." image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"/>
    <section className="section-pad"><div className="container-width grid gap-6 md:grid-cols-2 lg:grid-cols-3">{blogPosts.map((post, index) => <article key={post.slug} className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgba(7,23,70,.06)]"><div className="h-52 shrink-0"><SectionImage src={["https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80"][index]} alt={post.title}/></div><div className="flex flex-1 flex-col p-7"><p className="eyebrow">{post.date}</p><h2 className="mt-3 text-xl font-black text-navy">{post.title}</h2><p className="mt-3 flex-1 text-sm leading-6 text-slate-500">{post.summary}</p><Link href={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-2 text-xs font-black text-navy">READ ARTICLE <ArrowRight size={14}/></Link></div></article>)}</div></section>
  </main><SiteFooter/></>;
}
