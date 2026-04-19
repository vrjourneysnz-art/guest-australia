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
        <Link href="/australia-travel-blogs" className="text-sand text-sm hover:underline mb-4 inline-block">
          &larr; Back to Blog
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <p className="text-white/50">{post.date}</p>
      </PageHeader>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured YouTube Video */}
          {post.youtubeIds.length > 0 && (
            <div className="mb-10">
              <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${post.youtubeIds[0]}`}
                  title={post.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <p className="text-center text-sm text-dark/40 mt-3">
                Watch on{" "}
                <a
                  href={`https://www.youtube.com/watch?v=${post.youtubeIds[0]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline font-medium"
                >
                  YouTube
                </a>
              </p>
            </div>
          )}

          {/* Featured OG Image (if no video) */}
          {post.youtubeIds.length === 0 && post.ogImage && (
            <div className="mb-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.ogImage}
                alt={post.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Article Content */}
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
              if (trimmed.startsWith("#### "))
                return (
                  <h4 key={i} className="text-lg font-semibold text-dark mt-6 mb-2">
                    {trimmed.replace("#### ", "")}
                  </h4>
                );
              if (trimmed.startsWith("##### "))
                return (
                  <h5 key={i} className="text-base font-semibold text-dark mt-4 mb-2">
                    {trimmed.replace("##### ", "")}
                  </h5>
                );
              if (trimmed.startsWith("- "))
                return (
                  <li key={i} className="text-dark/70 leading-relaxed ml-4 mb-1">
                    {trimmed.replace("- ", "")}
                  </li>
                );
              if (trimmed.startsWith("> "))
                return (
                  <blockquote key={i} className="border-l-4 border-terra pl-4 italic text-dark/60 my-4">
                    {trimmed.replace("> ", "")}
                  </blockquote>
                );
              return (
                <p key={i} className="text-dark/70 leading-relaxed mb-4">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Additional YouTube Videos */}
          {post.youtubeIds.length > 1 && (
            <div className="mt-12">
              <h3 className="text-xl font-bold text-dark mb-4">More Videos</h3>
              <div className="space-y-6">
                {post.youtubeIds.slice(1).map((ytId) => (
                  <div key={ytId} className="relative w-full pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${ytId}`}
                      title="Related video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* YouTube Channel CTA */}
          <div className="mt-12 bg-gray-900 rounded-lg p-8 text-center text-white">
            <div className="flex items-center justify-center gap-3 mb-3">
              <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <h3 className="text-xl font-bold">Watch More Australia Travel Videos</h3>
            </div>
            <p className="text-white/60 mb-4">
              Subscribe to our YouTube channel for destination guides, travel tips, and itinerary inspiration.
            </p>
            <a
              href="https://geni.us/AustraliaPlaylist"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-semibold transition-colors"
            >
              Visit Our YouTube Channel
            </a>
          </div>

          {/* Plan Your Trip CTA */}
          <div className="mt-8 text-center bg-sand rounded-lg p-8">
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
