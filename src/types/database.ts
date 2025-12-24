// Database types for external Supabase integration
// These types match the PRD schema for bestskincareinkorea

export interface Category {
  id: string;
  slug: string;
  name: string;
  name_ko?: string;
  description?: string;
  icon?: string;
  display_order: number;
  created_at: string;
}

export interface Procedure {
  id: string;
  slug: string;
  name: string;
  name_ko?: string;
  category_id?: string;
  category?: Category;
  description?: string;
  content?: string;
  price_min?: number;
  price_max?: number;
  price_currency: string;
  duration?: string;
  recovery_time?: string;
  anesthesia?: string;
  featured_image?: string;
  before_after_images: string[];
  meta_title?: string;
  meta_description?: string;
  keywords: string[];
  faqs: FAQ[];
  is_published: boolean;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Clinic {
  id: string;
  slug: string;
  name: string;
  name_ko?: string;
  description?: string;
  short_description?: string;
  address?: string;
  address_ko?: string;
  neighborhood: string;
  latitude?: number;
  longitude?: number;
  phone?: string;
  email?: string;
  website?: string;
  kakao_id?: string;
  main_image?: string;
  images: string[];
  rating: number;
  review_count: number;
  languages: string[];
  certifications: string[];
  is_recommended: boolean;
  is_verified: boolean;
  is_published: boolean;
  meta_title?: string;
  meta_description?: string;
  created_at: string;
  updated_at: string;
}

export interface ClinicProcedure {
  id: string;
  clinic_id: string;
  procedure_id: string;
  price?: number;
  note?: string;
  clinic?: Clinic;
  procedure?: Procedure;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  content: string;
  category?: string;
  procedures: string[];
  keywords: string[];
  featured_image?: string;
  author: string;
  meta_title?: string;
  meta_description?: string;
  is_published: boolean;
  is_featured: boolean;
  published_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Review {
  id: string;
  clinic_id: string;
  author_name: string;
  author_country?: string;
  rating: number;
  title?: string;
  content: string;
  procedure_name?: string;
  visit_date?: string;
  is_verified: boolean;
  is_published: boolean;
  created_at: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  country?: string;
  procedure_interest?: string;
  clinic_id?: string;
  message: string;
  status: 'new' | 'contacted' | 'completed';
  created_at: string;
}

export interface Neighborhood {
  id: string;
  slug: string;
  name: string;
  name_ko?: string;
  description?: string;
  clinic_count: number;
  display_order: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

// Database response types
export type Tables = {
  categories: Category;
  procedures: Procedure;
  clinics: Clinic;
  clinic_procedures: ClinicProcedure;
  blog_posts: BlogPost;
  reviews: Review;
  inquiries: Inquiry;
  neighborhoods: Neighborhood;
};