import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PosterSliderSection } from "@/components/home/poster-slider-section";
import { VerticalPathwaySection } from "@/components/home/vertical-pathway-section";
import { FeaturedCertificationSection } from "@/components/home/featured-certification-section";
import { TrainingSection } from "@/components/home/training-section";
import { StatsFeaturesSection } from "@/components/home/stats-features-section";
import { CountdownSection } from "@/components/home/countdown-section";
import { FiveDModelSection } from "@/components/home/five-d-model-section";
import { QuoteSection } from "@/components/home/quote-section";
import { DrGiselaSection } from "@/components/home/dr-gisela-section";
import { MedicalEcosystemSection } from "@/components/home/medical-ecosystem-section";
import { GallerySection } from "@/components/home/gallery-section";
import { RegistrationCTASection } from "@/components/home/registration-cta-section";
import { InstagramReelsSection } from "@/components/home/instagram-reels-section";
import { CTASection } from "@/components/home/cta-section";

// Sections removed from the home page to reduce repetition (components kept for reuse):
// LibraryHubSection, ImageCardSliderSection, GlobalSection, WhyOXYZSection,
// ClinicalMachinesSection,
// MedicalTechnologyGallerySection

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero + event essentials */}
        <PosterSliderSection />
        <CountdownSection />

        {/* 2. What OXYZ offers and why it is credible */}
        <VerticalPathwaySection />
        <FeaturedCertificationSection />
        <StatsFeaturesSection />
        <FiveDModelSection />
        <TrainingSection />

        {/* 3. People and proof */}
        <DrGiselaSection />
        <MedicalEcosystemSection />
        <QuoteSection />
        <InstagramReelsSection />
        <GallerySection />

        {/* 4. Conversion */}
        <RegistrationCTASection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
