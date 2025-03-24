import React, { useState } from "react";
import { DarkButton } from "../ui/darkButton";

import { Calendar, CheckCheck, User } from "lucide-react";
import { Nav } from "../nav";
import Link from "next/link";

const BookingModal = () => {
  const [step, setStep] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const handleConfirmation = () => setShowConfirmation(true);

  return (
    <div className="bg-[url('../images/bg2.png')] bg-cover bg-no-repeat">
      <Nav />

      <div className="font-raleway py-20 md:py-36 px-6 flex flex-col items-center justify-center">
        {/* step 1 */}
        {step === 1 && (
          <div className="rounded-2xl lg:w-1/2 w-full lg:px-12 bg-white px-4 lg:py-12 py-6 text-[#2E2F38]  flex flex-col justify-center items-center">
            <p className="text-center font-bold pb-6 text-2xl lg:text-3xl font-quicksand">
              1/2
            </p>
            <form
              className="flex flex-col gap-4 
             w-full  justify-center items-center"
            >
              <input
                type="text"
                className="border-[0.5px] rounded-xl p-2 w-full placeholder:text-[#2E2F38] border-[#2E2F3899] opacity-60"
                placeholder="Full name"
              />
              <input
                type="email"
                className="border-[0.5px] rounded-xl p-2 w-full placeholder:text-[#2E2F38] border-[#2E2F3899] opacity-60"
                placeholder="Email Address"
              />
              <input
                type="text"
                className="border-[0.5px] rounded-xl p-2 w-full placeholder:text-[#2E2F38] border-[#2E2F3899] opacity-60"
                placeholder="Phone number"
              />
              <input
                type="text"
                className="border-[0.5px] rounded-xl p-2 w-full placeholder:text-[#2E2F38] border-[#2E2F3899] "
                placeholder="2 Bedroom flat Apartment - Doncaster"
              />
              <div onClick={nextStep} className="w-full">
                <DarkButton classname="w-full mt-6" text="Next" />
              </div>
            </form>
          </div>
        )}
        {/* step 2 */}
        {step === 2 && (
          <div className="rounded-2xl lg:w-1/2 w-full lg:px-12 px-4 lg:py-12 py-6 text-[#2E2F38] bg-white flex flex-col justify-center items-center">
            <p className="text-center font-bold pb-6 text-2xl lg:text-3xl font-quicksand">
              2/2
            </p>
            <form className="flex flex-col gap-4 w-full  justify-center items-center">
              <div className="border-[0.5px] rounded-xl w-full  flex justify-between items-center border-[#2E2F3899] opacity-60">
                <div className="flex gap-2 p-2 w-full items-center">
                  <Calendar />
                  <p>Check In</p>
                </div>
                <div className="flex gap-2 p-2 w-full border-l-[0.5px] border-[[#2E2F38] items-center">
                  <Calendar />
                  <p>Check Out</p>
                </div>
              </div>
              <div className="border-[0.5px] items-center flex gap-2 rounded-xl p-2 w-full  border-[#2E2F3899] opacity-60">
                <User />
                <p>Guest</p>
              </div>
              <select
                name="agency"
                className="border-[0.5px] rounded-xl p-2 w-full  border-[#2E2F3899]"
              >
                <option value="yes">Are you an agency?</option>
                <option value="no">No, I am not</option>
              </select>
              <select
                name="guest"
                className="border-[0.5px] rounded-xl p-2 w-full border-[#2E2F3899] "
              >
                <option value="yes">Are you the main guest?</option>
                <option value="no">No, I am not</option>
              </select>

              <div className="flex flex-row justify-between items-center lg:gap-32 gap-10 pt-6 lg:px-0 px-2">
                <div>
                  <button
                    className="custom-gradient-text my-4 border-b-custom-gradient text-lg lg:text-xl font-bold font-quicksand"
                    onClick={prevStep}
                  >
                    Back
                  </button>
                </div>
                <div className="w-full">
                  <button
                    onClick={nextStep}
                    className="custom-gradient font-bold font-quicksand text-white rounded-full  px-4 py-2   text-lg lg:text-xl transition duration-300 transform hover:scale-105"
                  >
                    Proceed to Confirm
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
        {/* step 3 */}
        {showConfirmation && (
          <div className="bg-[#1D7F40] mx-12 justify-center items-center rounded-md w-full text-white p-4 lg:text-2xl text-sm lg:mb-0 mb-6 text-center flex gap-2">
            <CheckCheck />
            <p>
              Congratulations, your booking reserve has been added successfully.
            </p>
            {/* this div only comes on top of the div below when confirm reservation button is clicked */}
          </div>
        )}
        {step === 3 && (
          <div className="rounded-2xl lg:px-12 bg-white lg:w-1/2 w-full px-4 lg:py-12 py-6 text-[#2E2F38]  flex flex-col justify-center  items-center">
            <p className="text-center text-xl lg:text-3xl py-6 font-semibold font-quicksand">
              Brief instruction goes here. Brief instruction goes here.
            </p>
            <div className="flex flex-col gap-4 border-[0.5px]  w-full p-4  border-[#2E2F3899] rounded-2xl">
              <div className="lg:text-2xl text-xl">
                <p className="border-b-[0.5px] pt-2 border-[#2E2F38] flex justify-between">
                  <span>€ 50.00 / night</span>{" "}
                  <span className="font-bold">€ 50.00</span>
                </p>
                <p className="border-b-[0.5px] pt-2  border-[#2E2F38] flex justify-between">
                  <span>Caution fee</span>{" "}
                  <span className="font-bold">€ 10.00</span>
                </p>
                <p className="border-b-[0.5px] pt-2 border-[#2E2F38] flex justify-between">
                  <span className="font-bold">Total price</span>{" "}
                  <span className="font-bold">€ 60.00</span>
                </p>
                <p className="border-b-[0.5px] pt-2 border-[#2E2F38] flex justify-between">
                  <span>Refundable fee</span>{" "}
                  <span className="font-bold">€ 50.00</span>
                </p>
                <p className=" pt-2 flex justify-between">
                  <span>Non-refundable fee</span>{" "}
                  <span className="font-bold"> € 10.00</span>
                </p>

                <div className="w-full py-6">
                  <button
                    onClick={handleConfirmation}
                    className="w-full custom-gradient py-2 mt-6 font-bold font-quicksand rounded-full text-white text-lg lg:text-xl transition duration-300 transform hover:scale-105"
                  >
                    Confirm Reservation
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="rounded-2xl lg:px-12 bg-white lg:w-1/2 w-full px-4 lg:py-12 py-6 text-[#2E2F38]  flex flex-col justify-center  items-center">
          <p className="font-quicksand text-2xl lg:text-3xl font-bold py-6 custom-gradient-text">
            Thank You!
          </p>
          <p className="text-center text-xl lg:text-2xl py-6 font-medium font-quicksand">
            Your booking has successfully been reserved.
            <span className="font-bold">Booking No: BOOSTR549-1156789</span>
            Please ensure to complete your payments before 6 hour validity
            window expires.
          </p>
        </div>
        <Link href={"/reservations"}>
          <button className="w-full custom-gradient py-2 mt-6 font-bold font-quicksand rounded-full text-white text-lg lg:text-xl transition duration-300 transform hover:scale-105">
            My Reservation
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookingModal;
