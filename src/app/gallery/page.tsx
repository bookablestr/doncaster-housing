import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import ThirdParty from "@/components/thirdParty";
import React from "react";

export default function GalleryPage() {
  return (
    <div className="text-black">
      <Gallery />
      <ThirdParty />
      <Footer />
    </div>
  );
}
