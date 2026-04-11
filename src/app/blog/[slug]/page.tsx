import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPost, blogPosts } from "@/data/blog";
import PageHeader from "@/components/PageHeader";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Guest Australia`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <PageHeader>
        <Link href="/blog" className="text-sand text-sm hover:underline mb-4 inline-block">
          <i className="fa-solid fa-arrow-left text-xs mr-1" /> Back to Blog
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <p className="text-white/50">{post.date}</p>
      </PageHeader>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n").map((line, i) => {
              const trimmed = line.trim();
              if (!trimmed) return null;
              if (trimmed.startsWith("## "))
                return (
                  <h2 key={i} className="text-2xl font-bold text-dark mt-10 mb-4">
                    {trimmed.replace("## ", "")}
                  </h2>
                );
              if (trimmed.startsWith("### "))
                return (
                  <h3 key={i} className="text-xl font-bold text-dark mt-8 mb-3">
                    {trimmed.replace("### ", "")}
                  </h3>
                );
              if (trimmed.startsWith("*") && trimmed.endsWith("*"))
                return (
                  <p key={i} className="italic text-dark/40 mt-8">
                    {trimmed.replace(/\*/g, "")}
                  </p>
                );
              return (
                <p key={i} className="text-dark/70 leading-relaxed mb-4">
                  {trimmed}
                </p>
              );
            })}
          </div>

          <div className="mt-16 text-center bg-sand rounded-lg p-8">
            <h2 className="text-2xl font-bold text-dark mb-3">
              Ready to Plan Your Trip?
            </h2>
            <p className="text-dark/50 mb-6">
              Let Michael help you create the perfect Australian itinerary.
            </p>
            <Link
              href="/travel-planning"
              className="inline-block bg-terra text-white px-8 py-3 rounded font-semibold hover:bg-terra-dark transition-colors"
            >
              Plan My Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
