import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PosterSliderSection } from "@/components/home/poster-slider-section";
import { VerticalPathwaySection } from "@/components/home/vertical-pathway-section";
import { FeaturedCertificationSection } from "@/components/home/featured-certification-section";
import { LibraryHubSection } from "@/components/home/library-hub-section";
import { StatsFeaturesSection } from "@/components/home/stats-features-section";
import { ClinicalMachinesSection } from "@/components/home/clinical-machines-section";
import { CountdownSection } from "@/components/home/countdown-section";
import { ImageCardSliderSection } from "@/components/home/image-card-slider-section";
import { MedicalEcosystemSection } from "@/components/home/medical-ecosystem-section";
import { FiveDModelSection } from "@/components/home/five-d-model-section";
import { GlobalSection } from "@/components/home/global-section";
import { WhyOXYZSection } from "@/components/home/why-oxyz-section";
import { TrainingSection } from "@/components/home/training-section";
import { GallerySection } from "@/components/home/gallery-section";
import { RegistrationCTASection } from "@/components/home/registration-cta-section";
import { InstagramReelsSection } from "@/components/home/instagram-reels-section";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <PosterSliderSection />
        <VerticalPathwaySection />
        <FeaturedCertificationSection />
        <LibraryHubSection />
        <StatsFeaturesSection />
        <ClinicalMachinesSection />
        <CountdownSection />
        <ImageCardSliderSection />
        <MedicalEcosystemSection />
        <GlobalSection />
        <WhyOXYZSection />
        <FiveDModelSection />
        <TrainingSection />
        <GallerySection />
        <RegistrationCTASection />
        <InstagramReelsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
