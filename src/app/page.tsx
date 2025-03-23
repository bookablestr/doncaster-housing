import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HomeBody from "@/components/homeBody";
import Testimonial from "@/components/testimonial";
import ThirdParty from "@/components/thirdParty";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero
        text1={"Enjoy"}
        text2={"your next vacation with our rental"}
        text3={"homes"}
        availability={true}
      />
      <HomeBody />

      <Faq />
      <Testimonial />
      <ThirdParty />
      <Footer />
    </div>
  );
}
