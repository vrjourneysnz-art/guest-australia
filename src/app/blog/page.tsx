import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Australia Travel Blog | Guest Australia",
  description: "Travel tips, guides, and insights for planning your Australian holiday — from an expert with 30+ years of local experience.",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative bg-dark text-white py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-800/90 via-amber-900/70 to-stone-700/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Australia Travel Blog</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Tips, guides, and insights to help you plan the perfect Australian adventure.
          </p>
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
                <div className="bg-gradient-to-br from-stone-600 via-amber-800/50 to-stone-700 h-44 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="relative text-sm font-bold text-white/80 px-6 text-center">
                    {post.title}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-terra text-sm font-semibold mb-2">{post.date}</p>
                  <h2 className="text-lg font-bold text-dark mb-3 group-hover:text-terra transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-dark/50 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                  <span className="text-terra font-semibold text-sm group-hover:underline">
                    Read More <i className="fa-solid fa-arrow-right text-xs" />
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
