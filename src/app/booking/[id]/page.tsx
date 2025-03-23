"use client";
import BookingDetails from "@/components/booking/bookingDetails";
import BookingModal from "@/components/booking/bookingModal";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ThirdParty from "@/components/thirdParty";
import React, { useState } from "react";

export default function BookingDetailsPage() {
  const [isBooking, setIsBooking] = useState(false);
  return (
    <div>
      {!isBooking && (
        <Hero
          text1={"Enjoy"}
          text2={"your next vacation with our rental"}
          text3={"homes"}
          availability={false}
        />
      )}
      {!isBooking && (
        <BookingDetails onBookHouseClick={() => setIsBooking(true)} />
      )}

      {isBooking && <BookingModal />}

      <ThirdParty />
      <Footer />
    </div>
  );
}
