import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navigation = [
  { name: 'Procedures', href: '/procedure' },
  { name: 'Clinics', href: '/clinic' },
  { name: 'Blog', href: '/blog' },
  { name: 'Guide', href: '/guide' },
  { name: 'About', href: '/about' },
];

const categories = [
  { name: 'Nose Surgery', href: '/category/nose-surgery' },
  { name: 'Eye Surgery', href: '/category/eye-surgery' },
  { name: 'Face Lift', href: '/category/face-lift' },
  { name: 'Skin Care', href: '/category/skin-care' },
  { name: 'Botox & Fillers', href: '/category/botox-fillers' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container-custom" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-primary" fill="currentColor" />
            <span className="font-serif text-xl font-semibold text-foreground">
              Best<span className="text-primary">Skincare</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Procedures <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {categories.map((cat) => (
                  <DropdownMenuItem key={cat.name} asChild>
                    <Link to={cat.href}>{cat.name}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild>
                  <Link to="/procedure" className="font-medium text-primary">
                    View All Procedures
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {navigation.slice(1).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button asChild>
              <Link to="/consultation">Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block rounded-lg px-3 py-2 text-base font-medium ${
                    isActive(item.href)
                      ? 'bg-accent text-primary'
                      : 'text-foreground hover:bg-muted'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 px-3">
                <Button asChild className="w-full">
                  <Link to="/consultation" onClick={() => setMobileMenuOpen(false)}>
                    Free Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}