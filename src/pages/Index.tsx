import { Layout } from '@/components/layout';
import {
  HeroSection,
  CategoriesSection,
  FeaturedClinicsSection,
  PopularProceduresSection,
  LocationsSection,
  WhyKoreaSection,
  LatestBlogSection,
  CTASection,
} from '@/components/sections';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategoriesSection />
      <FeaturedClinicsSection />
      <PopularProceduresSection />
      <LocationsSection />
      <WhyKoreaSection />
      <LatestBlogSection />
      <CTASection />
    </Layout>
  );
};

export default Index;