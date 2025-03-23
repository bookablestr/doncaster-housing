import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ThirdParty from "@/components/thirdParty";
import React from "react";
export default function ContactPage() {
  return (
    <div>
      <Hero
        classname="pb-32"
        text1={"We are"}
        text2={"always ready to help and answer your"}
        text3={"questions"}
        availability={false}
      />{" "}
      <Contact />
      <ThirdParty />
      <Footer />
    </div>
  );
}
