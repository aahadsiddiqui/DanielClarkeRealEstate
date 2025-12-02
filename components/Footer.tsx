import Link from "next/link";
import { Home, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-midnight text-lavender">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lavender/20">
                <Home className="h-6 w-6 text-lavender" />
              </div>
              <span className="text-xl font-bold">Danny Real Estate</span>
            </div>
            <p className="text-sm text-lavender/80">
              Your trusted partner in finding the perfect home. We make real estate dreams come true.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-lavender/80 hover:text-lavender transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-lavender/80 hover:text-lavender transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-lavender/80 hover:text-lavender transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-lavender/80 hover:text-lavender transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/properties" className="text-lavender/80 hover:text-lavender transition-colors">
                  Browse Properties
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-lavender/80 hover:text-lavender transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-lavender/80 hover:text-lavender transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-lavender/80 hover:text-lavender transition-colors">
                  Sell Your Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-lavender/80 hover:text-lavender transition-colors">
                  Buying Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-lavender/80 hover:text-lavender transition-colors">
                  Selling Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-lavender/80 hover:text-lavender transition-colors">
                  Market Trends
                </Link>
              </li>
              <li>
                <Link href="#" className="text-lavender/80 hover:text-lavender transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-lavender/80">
              <li>123 Real Estate Ave</li>
              <li>New York, NY 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@dannyrealestate.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-lavender/20 text-center text-sm text-lavender/60">
          <p>&copy; {new Date().getFullYear()} Danny Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

