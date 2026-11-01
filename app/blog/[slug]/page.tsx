import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "../../components/site-shell";
import { SectionImage } from "../../components/section-image";
import { blogPosts } from "../../lib/blog";

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(article => article.slug === slug);

  if (!post) notFound();

  return <><SiteHeader/><main>
    <div className="bg-navy pt-8"><div className="container-width"><Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold text-lime"><ArrowLeft size={14}/>ALL ARTICLES</Link></div><PageHero eyebrow={post.date} title={post.title} description={post.summary} image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"/></div>
    <article className="section-pad"><div className="container-width max-w-4xl space-y-10">{post.sections.map((section, index) => <section key={section.heading} className={`grid items-center gap-6 md:grid-cols-2 ${index % 2 ? "md:[&>div:first-child]:order-2" : ""}`}><div className="h-64 overflow-hidden rounded-2xl"><SectionImage src={["https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80"][index]} alt={section.heading}/></div><div><h2 className="text-2xl font-black text-navy">{section.heading}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{section.body}</p></div></section>)}<Link href="/booking-service" className="btn-primary mt-3">TALK TO OUR TEAM</Link></div></article>
  </main><SiteFooter/></>;
}
