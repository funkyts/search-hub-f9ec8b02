import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt?: string;
  image?: string;
  category?: string;
  author?: string;
  publishedAt?: string;
  isFeatured?: boolean;
}

export function BlogCard({
  slug,
  title,
  excerpt,
  image,
  category,
  author = 'Best Skincare in Korea',
  publishedAt,
  isFeatured,
}: BlogCardProps) {
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Link to={`/blog/${slug}`}>
      <Card className="group overflow-hidden card-hover h-full">
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-accent">
              <span className="font-serif text-4xl text-primary/40">📝</span>
            </div>
          )}
          {category && (
            <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground">
              {category}
            </Badge>
          )}
        </div>
        <CardContent className="p-5">
          <h3 className="font-serif text-xl font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {excerpt && (
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
              {excerpt}
            </p>
          )}

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="h-3 w-3" />
                {author}
              </span>
              {publishedAt && (
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {formatDate(publishedAt)}
                </span>
              )}
            </div>
            <ArrowRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}