import { Link } from 'react-router-dom';
import { Star, MapPin, Badge as BadgeIcon, Languages } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface ClinicCardProps {
  slug: string;
  name: string;
  image?: string;
  rating: number;
  reviewCount: number;
  neighborhood: string;
  languages?: string[];
  isRecommended?: boolean;
  isVerified?: boolean;
  shortDescription?: string;
}

export function ClinicCard({
  slug,
  name,
  image,
  rating,
  reviewCount,
  neighborhood,
  languages = [],
  isRecommended,
  isVerified,
  shortDescription,
}: ClinicCardProps) {
  return (
    <Link to={`/clinic/${slug}`}>
      <Card className="group overflow-hidden card-hover h-full">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
              <span className="font-serif text-2xl text-primary/50">{name.charAt(0)}</span>
            </div>
          )}
          <div className="absolute top-3 left-3 flex gap-2">
            {isRecommended && (
              <Badge className="bg-primary text-primary-foreground">
                Recommended
              </Badge>
            )}
            {isVerified && (
              <Badge variant="secondary" className="bg-success text-success-foreground">
                Verified
              </Badge>
            )}
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-serif text-lg font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {name}
          </h3>
          
          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-warning text-warning" />
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
            <span className="text-sm text-muted-foreground">({reviewCount} reviews)</span>
          </div>

          <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="capitalize">{neighborhood}</span>
          </div>

          {languages.length > 0 && (
            <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
              <Languages className="h-4 w-4" />
              <span>{languages.slice(0, 2).join(', ')}</span>
            </div>
          )}

          {shortDescription && (
            <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
              {shortDescription}
            </p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}