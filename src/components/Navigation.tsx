"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const itineraryDropdown = [
  { label: "Lifestyle Holidays", href: "/itineraries/lifestyle" },
  { label: "Family Holidays", href: "/itineraries/family" },
  { label: "Honeymoon Packages", href: "/itineraries/honeymoon" },
  { label: "Australia & NZ", href: "/itineraries/australia-nz" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Guest Australia"
              width={200}
              height={80}
              className="h-20 w-auto py-1"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-dark hover:text-terra transition-colors text-sm font-semibold">
              Home
            </Link>

            {/* Itineraries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                href="/itineraries"
                className="text-dark hover:text-terra transition-colors flex items-center gap-1 text-sm font-semibold"
              >
                Itineraries
                <i className="fa-solid fa-chevron-down text-xs" />
              </Link>
              {dropdownOpen && (
                <div className="absolute top-full left-0 bg-white text-dark rounded shadow-lg py-2 min-w-[200px] border border-gray-100">
                  {itineraryDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm hover:bg-warm hover:text-terra transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/travel-planning" className="text-dark hover:text-terra transition-colors text-sm font-semibold">
              Travel Planning
            </Link>
            <Link href="/travel-information" className="text-dark hover:text-terra transition-colors text-sm font-semibold">
              Travel Information
            </Link>
            <Link href="/blog" className="text-dark hover:text-terra transition-colors text-sm font-semibold">
              Blog
            </Link>
            <Link
              href="/travel-planning"
              className="bg-terra text-white px-5 py-2 rounded text-sm font-semibold hover:bg-terra-dark transition-colors"
            >
              Plan My Trip
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-dark"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <i className="fa-solid fa-xmark text-xl" />
            ) : (
              <i className="fa-solid fa-bars text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4">
          <div className="px-4 space-y-1 pt-2">
            <Link
              href="/"
              className="block py-2.5 text-dark hover:text-terra transition-colors font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/itineraries"
              className="block py-2.5 text-dark hover:text-terra transition-colors font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Itineraries
            </Link>
            {itineraryDropdown.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 pl-4 text-sm text-dark/70 hover:text-terra transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/travel-planning"
              className="block py-2.5 text-dark hover:text-terra transition-colors font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Travel Planning
            </Link>
            <Link
              href="/travel-information"
              className="block py-2.5 text-dark hover:text-terra transition-colors font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Travel Information
            </Link>
            <Link
              href="/blog"
              className="block py-2.5 text-dark hover:text-terra transition-colors font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/travel-planning"
              className="inline-block bg-terra text-white px-5 py-2 rounded text-sm font-semibold hover:bg-terra-dark transition-colors mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Plan My Trip
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
