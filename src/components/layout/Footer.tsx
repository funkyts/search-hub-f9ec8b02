import { Link } from 'react-router-dom';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  procedures: [
    { name: 'Rhinoplasty', href: '/procedure/rhinoplasty' },
    { name: 'Double Eyelid', href: '/procedure/double-eyelid-surgery' },
    { name: 'V-Line Surgery', href: '/procedure/v-line-surgery' },
    { name: 'Liposuction', href: '/procedure/liposuction' },
    { name: 'All Procedures', href: '/procedure' },
  ],
  locations: [
    { name: 'Gangnam', href: '/neighborhood/gangnam' },
    { name: 'Cheongdam', href: '/neighborhood/cheongdam' },
    { name: 'Sinsa', href: '/neighborhood/sinsa' },
    { name: 'Apgujeong', href: '/neighborhood/apgujeong' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Guide', href: '/guide' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-primary" fill="currentColor" />
              <span className="font-serif text-xl font-semibold text-foreground">
                Best<span className="text-primary">Skincare</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Your trusted guide to skincare and plastic surgery in Korea. Find the best clinics, compare prices, and make informed decisions.
            </p>
            <div className="mt-6 space-y-2">
              <a href="mailto:hello@bestskincareinkorea.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <Mail className="h-4 w-4" />
                hello@bestskincareinkorea.com
              </a>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Seoul, South Korea
              </p>
            </div>
          </div>

          {/* Procedures */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Procedures</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.procedures.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Locations</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.locations.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Best Skincare in Korea. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}