import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/properties", label: "Properties" },
    { path: "/owners", label: "For Property Owners" },
    { path: "/tenants", label: "For Tenants" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[var(--luxe-navy)] text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/">
              <div className="flex flex-col cursor-pointer">
                <h1 className="text-2xl md:text-3xl font-bold text-[var(--luxe-gold)]">
                  Luxe Property Solutions
                </h1>
                <p className="text-xs md:text-sm text-gray-300">
                  Premium Asset Management Services
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span
                    className={`px-4 py-2 rounded transition-all ${
                      location === item.path
                        ? "bg-[var(--luxe-gold)] text-[var(--luxe-navy)] font-semibold"
                        : "text-white hover:bg-[var(--luxe-gold)]/20 hover:text-[var(--luxe-gold)]"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-white/10 rounded"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden pb-4 space-y-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span
                    className={`block px-4 py-2 rounded transition-all ${
                      location === item.path
                        ? "bg-[var(--luxe-gold)] text-[var(--luxe-navy)] font-semibold"
                        : "text-white hover:bg-[var(--luxe-gold)]/20"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[var(--luxe-navy)] text-white mt-auto">
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold text-[var(--luxe-gold)] mb-4">
                Luxe Property Solutions
              </h3>
              <p className="text-gray-300 mb-4">
                Premium asset management services tailored to discerning
                property owners who demand excellence, transparency, and
                exceptional results.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-[var(--luxe-gold)] mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link href={item.path}>
                      <span className="text-gray-300 hover:text-[var(--luxe-gold)] transition-colors">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-[var(--luxe-gold)] mb-4">
                Contact Us
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>📞 314-201-1239</li>
                <li>📧 info@luxepropertysolutions.com</li>
                <li>📍 555 Washington Ave</li>
                <li className="pl-5">Suite 310</li>
                <li className="pl-5">St. Louis, MO 63101</li>
              </ul>
            </div>

            {/* Login Section */}
            <div>
              <h3 className="text-xl font-bold text-[var(--luxe-gold)] mb-4">
                Access Portal
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/login">
                    <span className="text-gray-300 hover:text-[var(--luxe-gold)] transition-colors">
                      Tenant Login
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/owner-login">
                    <span className="text-gray-300 hover:text-[var(--luxe-gold)] transition-colors">
                      Owner Login
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/admin-login">
                    <span className="text-gray-300 hover:text-[var(--luxe-gold)] transition-colors">
                      Admin Login
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Luxe Property Solutions. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

