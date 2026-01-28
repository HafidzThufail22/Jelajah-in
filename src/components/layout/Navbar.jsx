import { useState, memo, useCallback } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Destinasi", href: "/#destinasi" },
  { name: "Paket", href: "/#paket" },
  { name: "Kontak", href: "/#kontak" },
];

export const Navbar = memo(function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = useCallback((href) => {
    setIsOpen(false);
    // Handle hash links for same-page navigation
    if (href.startsWith("/#")) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <MapPin className="w-8 h-8 text-cyan-700" />
            <span className="text-xl font-bold text-gray-900">
              Jelajah<span className="text-cyan-700">.in</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-600 hover:text-cyan-700 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button variant="cyan" size="lg" asChild>
              <Link to="/pesan">Pesan Sekarang</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={toggleMenu}
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-64 pb-4" : "max-h-0",
          )}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-600 hover:text-cyan-700 font-medium transition-colors"
                onClick={() => handleNavClick(link.href)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="cyan" className="w-full" asChild>
              <Link to="/pesan">Pesan Sekarang</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
});
