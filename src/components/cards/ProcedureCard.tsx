import { Link } from 'react-router-dom';
import { Clock, DollarSign, Building2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface ProcedureCardProps {
  slug: string;
  name: string;
  category?: string;
  image?: string;
  priceMin?: number;
  priceMax?: number;
  recoveryTime?: string;
  clinicCount?: number;
  isFeatured?: boolean;
}

export function ProcedureCard({
  slug,
  name,
  category,
  image,
  priceMin,
  priceMax,
  recoveryTime,
  clinicCount,
  isFeatured,
}: ProcedureCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link to={`/procedure/${slug}`}>
      <Card className="group overflow-hidden card-hover h-full">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-accent">
              <span className="font-serif text-3xl text-primary/40">✨</span>
            </div>
          )}
          {isFeatured && (
            <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
              Featured
            </Badge>
          )}
          {category && (
            <Badge variant="secondary" className="absolute top-3 right-3">
              {category}
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-serif text-lg font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {name}
          </h3>

          <div className="mt-3 space-y-2">
            {(priceMin || priceMax) && (
              <div className="flex items-center gap-2 text-sm">
                <DollarSign className="h-4 w-4 text-primary" />
                <span className="font-medium">
                  {priceMin && priceMax
                    ? `${formatPrice(priceMin)} - ${formatPrice(priceMax)}`
                    : priceMin
                    ? `From ${formatPrice(priceMin)}`
                    : formatPrice(priceMax!)}
                </span>
              </div>
            )}

            {recoveryTime && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Recovery: {recoveryTime}</span>
              </div>
            )}

            {clinicCount !== undefined && clinicCount > 0 && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Building2 className="h-4 w-4" />
                <span>{clinicCount} clinics available</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}