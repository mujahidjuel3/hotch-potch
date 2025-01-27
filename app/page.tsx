import BannerSection from "@/components/banner-section";
import ClientSection from "@/components/client-section";
import ProjectDescription from "@/components/description-section";
import FeaturesSection from "@/components/feature-section";
import FeaturesSection2 from "@/components/feature-section2";
import Footer from "@/components/footer";
import FooterBottom from "@/components/footer-bottom";
import Header from "@/components/heder";
import HeroSection from "@/components/hero-section";
import PackageCard from "@/components/package-card";
import ReviewCard from "@/components/review-card";
import ToolsSection from "@/components/tools-section";
import { FC } from "react";


const HomePage: FC = () => {
  return (
    <div className="container min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
     <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Clients Section */}
      <ClientSection />

      {/* Features Section */}
      <FeaturesSection />
      <FeaturesSection2 />

      {/* Tools Section */}
      <ToolsSection />

      {/* Project Description Section */}
      <ProjectDescription />

      {/* Review Card Section */}
      <ReviewCard />

      {/* Package Card Section */}
      <PackageCard />

      {/*Banner Section */}
      <BannerSection />

      {/* Footer Section */}
      <Footer />

      {/* Footer Bottom Section */}
      <FooterBottom />
    </div>
  );
};

export default HomePage;
