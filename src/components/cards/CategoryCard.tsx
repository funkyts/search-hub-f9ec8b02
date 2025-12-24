import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  slug: string;
  name: string;
  icon: LucideIcon;
  procedureCount?: number;
  description?: string;
}

export function CategoryCard({
  slug,
  name,
  icon: Icon,
  procedureCount,
  description,
}: CategoryCardProps) {
  return (
    <Link to={`/category/${slug}`}>
      <div className="group flex flex-col items-center p-6 rounded-xl bg-card border border-border card-hover text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent group-hover:bg-primary transition-colors">
          <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>
        <h3 className="mt-4 font-serif text-base font-semibold text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        {procedureCount !== undefined && (
          <p className="mt-1 text-sm text-muted-foreground">
            {procedureCount} procedures
          </p>
        )}
        {description && (
          <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}