import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import ThirdParty from "@/components/thirdParty";
import React from "react";

export default function GalleryPage() {
  return (
    <div className="bg-white">
      <Gallery />
      <ThirdParty />
      <Footer />
    </div>
  );
}
