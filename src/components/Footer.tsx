import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.jpg"
              alt="Guest Australia"
              width={200}
              height={80}
              className="h-20 w-auto mb-3 brightness-200"
            />
            <p className="text-white/60 text-sm">Your Australian Vacation Expert</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-3 text-sand text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/" className="hover:text-sand transition-colors">Home</Link></li>
              <li><Link href="/itineraries" className="hover:text-sand transition-colors">Itineraries</Link></li>
              <li><Link href="/travel-planning" className="hover:text-sand transition-colors">Travel Planning</Link></li>
              <li><Link href="/travel-information" className="hover:text-sand transition-colors">Travel Information</Link></li>
              <li><Link href="/blog" className="hover:text-sand transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold mb-3 text-sand text-sm uppercase tracking-wider">Contact</h4>
            <p className="text-sm text-white/70 mb-4">michael@guestaustralia.com</p>
            <div className="flex space-x-4">
              <a href="https://geni.us/AustraliaPlaylist" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white/50 hover:text-sand transition-colors">
                <i className="fa-brands fa-youtube text-lg" />
              </a>
              <a href="http://facebook.com/GUESTOZ" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/50 hover:text-sand transition-colors">
                <i className="fa-brands fa-facebook-f text-lg" />
              </a>
              <a href="https://www.instagram.com/guestaustralia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/50 hover:text-sand transition-colors">
                <i className="fa-brands fa-instagram text-lg" />
              </a>
              <a href="https://nz.linkedin.com/in/michaelnees" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/50 hover:text-sand transition-colors">
                <i className="fa-brands fa-linkedin-in text-lg" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/40">
          &copy; 2026 Guest Australia. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
