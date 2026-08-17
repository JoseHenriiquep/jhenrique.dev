import siteContent from "../content/site.json";
import AboutSection from "../components/sections/AboutSection/AboutSection";
import ContactSection from "../components/sections/ContactSection/ContactSection";
import FaqSection from "../components/sections/FaqSection/FaqSection";
import HeroSection from "../components/sections/HeroSection/HeroSection";
import PortfolioSection from "../components/sections/PortfolioSection/PortfolioSection";
import ProcessSection from "../components/sections/ProcessSection/ProcessSection";
import ServicesSection from "../components/sections/ServicesSection/ServicesSection";
import SignalSection from "../components/sections/SignalSection/SignalSection";
import SiteFooter from "../components/layout/SiteFooter/SiteFooter";
import SiteHeader from "../components/layout/SiteHeader/SiteHeader";

export default function Home() {
  return (
    <main id="inicio">
      <SiteHeader />
      <HeroSection content={siteContent.hero} />
      <ServicesSection services={siteContent.services} />
      <SignalSection benefits={siteContent.benefits} />
      <PortfolioSection portfolio={siteContent.portfolio} />
      <AboutSection content={siteContent.about} skills={siteContent.skills} />
      <ProcessSection process={siteContent.process} />
      <FaqSection faq={siteContent.faq} />
      <ContactSection content={siteContent.contact} />
      <SiteFooter />
    </main>
  );
}
