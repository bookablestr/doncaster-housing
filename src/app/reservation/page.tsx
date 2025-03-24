import Footer from "@/components/footer";
import { Nav } from "@/components/nav";
import Reservation from "@/components/reservation";
import ThirdParty from "@/components/thirdParty";
import React from "react";

export default function ReservationPage() {
  return (
    <div className="bg-white">
      <Nav />
      <Reservation />
      <ThirdParty />
      <Footer />
    </div>
  );
}
