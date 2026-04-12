import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Australia Travel Blog | Guest Australia",
  description: "Travel tips, guides, and insights for planning your Australian holiday — from an expert with 30+ years of local experience.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Australia Travel Blog</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Tips, guides, and insights to help you plan the perfect Australian adventure.
        </p>
      </PageHeader>

      {/* YouTube Channel CTA */}
      <section className="bg-dark text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/70 mb-3">Watch our Australia travel videos on YouTube</p>
          <a
            href="https://www.youtube.com/channel/UC6gwLUsb-0r75TDPiDZ5Y1A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Subscribe to Our Channel
          </a>
        </div>
      </section>

      <section className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow group border border-gray-100"
              >
                {/* Thumbnail: YouTube frame or OG image or gradient fallback */}
                <div className="relative h-44 bg-gradient-to-br from-stone-600 via-amber-800/50 to-stone-700 overflow-hidden">
                  {post.youtubeIds.length > 0 ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://img.youtube.com/vi/${post.youtubeIds[0]}/mqdefault.jpg`}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-red-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                          <svg className="w-5 h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </>
                  ) : post.ogImage ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.ogImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white/80 px-6 text-center">
                        {post.title}
                      </span>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-terra text-sm font-semibold">{post.date}</p>
                    {post.youtubeIds.length > 0 && (
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">
                        Video
                      </span>
                    )}
                  </div>
                  <h2 className="text-lg font-bold text-dark mb-3 group-hover:text-terra transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-dark/50 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                  <span className="text-terra font-semibold text-sm group-hover:underline">
                    Read More &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
