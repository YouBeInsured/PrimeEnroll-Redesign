import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import Logo from "./Logo";
import AgentPortalModal from "./AgentPortalModal";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-2 left-2 right-2 lg:top-4 lg:left-4 lg:right-4 z-50 transition-all duration-500 rounded-3xl ${
          isScrolled
            ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 shadow-xl shadow-black/10 dark:shadow-black/30"
            : "bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-white/20 dark:border-gray-700/20 shadow-lg shadow-black/5 dark:shadow-black/20"
        }`}
        style={{
          backdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'blur(28px) saturate(200%)',
          WebkitBackdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'blur(28px) saturate(200%)'
        }}
      >
        <div className="container mx-auto px-6 lg:px-10">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile Menu Button - Moved to Left */}
            <Button
              variant="ghost"
              className="lg:hidden p-6 h-auto w-auto -ml-8"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-16 w-16" />
              ) : (
                <Menu className="h-16 w-16" />
              )}
            </Button>

            <Link href="/" className="lg:flex-1">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors font-medium"
              >
                {t("nav.services")}
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors font-medium"
              >
                {t("nav.testimonials")}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors font-medium"
              >
                {t("nav.about")}
              </button>

              {/* Language Toggle */}
              <div className="flex items-center space-x-2 text-sm">
                <Button
                  variant={language === "en" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setLanguage("en")}
                  className="px-2 py-1 h-7"
                >
                  EN
                </Button>
                <Button
                  variant={language === "es" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setLanguage("es")}
                  className="px-2 py-1 h-7"
                >
                  ES
                </Button>
              </div>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="p-2 h-10 w-10"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              {/* Agent Portal / User Info */}
              {isAuthenticated && user ? (
                <Link href="/dashboard">
                  <Button className="bg-primary-500 hover:bg-primary-600 text-white">
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <Button
                  onClick={() => setIsPortalModalOpen(true)}
                  className="bg-primary-500 hover:bg-primary-600 text-white"
                >
                  {t("nav.agentPortal")}
                </Button>
              )}
            </div>

          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="px-4 py-4 space-y-4">
                <button
                  onClick={() => scrollToSection("services")}
                  className="block text-gray-600 dark:text-gray-300 hover:text-primary-500 text-left w-full py-2"
                >
                  {t("nav.services")}
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="block text-gray-600 dark:text-gray-300 hover:text-primary-500 text-left w-full py-2"
                >
                  {t("nav.testimonials")}
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-gray-600 dark:text-gray-300 hover:text-primary-500 text-left w-full py-2"
                >
                  {t("nav.about")}
                </button>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex space-x-2">
                    <Button
                      variant={language === "en" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setLanguage("en")}
                    >
                      EN
                    </Button>
                    <Button
                      variant={language === "es" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setLanguage("es")}
                    >
                      ES
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" onClick={toggleTheme}>
                    {theme === "dark" ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </Button>
                </div>

                {isAuthenticated && user ? (
                  <Link href="/dashboard">
                    <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white">
                      Dashboard
                    </Button>
                  </Link>
                ) : (
                  <Button
                    onClick={() => {
                      setIsPortalModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white"
                  >
                    {t("nav.agentPortal")}
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      <AgentPortalModal
        isOpen={isPortalModalOpen}
        onClose={() => setIsPortalModalOpen(false)}
      />
    </>
  );
}
