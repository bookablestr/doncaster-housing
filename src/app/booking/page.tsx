import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ThirdParty from "@/components/thirdParty";
import React from "react";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero
        text1={"Reserve"}
        text2={"your next shortlet apartment with"}
        text3={"us"}
      />

      <ThirdParty />
      <Footer />
    </div>
  );
}
