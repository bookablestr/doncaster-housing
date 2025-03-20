import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HomeBody from "@/components/homeBody";
import ThirdParty from "@/components/thirdParty";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeBody />
      <Faq />
      <ThirdParty />
      <Footer />
    </div>
  );
}
