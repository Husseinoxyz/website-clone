import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { ImageCardSliderSection } from "@/components/home/image-card-slider-section";
import { MedicalEcosystemSection } from "@/components/home/medical-ecosystem-section";
import { FiveDModelSection } from "@/components/home/five-d-model-section";
import { GlobalSection } from "@/components/home/global-section";
import { WhyOXYZSection } from "@/components/home/why-oxyz-section";
import { SymposiumSection } from "@/components/home/symposium-section";
import { GallerySection } from "@/components/home/gallery-section";
import { RegistrationCTASection } from "@/components/home/registration-cta-section";
import { InstagramReelsSection } from "@/components/home/instagram-reels-section";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ImageCardSliderSection />
        <MedicalEcosystemSection />
        <GlobalSection />
        <WhyOXYZSection />
        <FiveDModelSection />
        <SymposiumSection />
        <GallerySection />
        <RegistrationCTASection />
        <InstagramReelsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
