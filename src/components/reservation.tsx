import React from "react";
import houseImg from "@/images/bg2.png";
import Image from "next/image";
const Reservation = () => {
  return (
    <div className="bg-white py-10 lg:px-12 px-6">
      <div className="text-[#2E2F38] flex gap-2 items-center">
        <div className="bg-[#CCE9FF] text-2xl p-2 rounded-full font-bold">
          NJ
        </div>
        <div>
          <p className="font-bold">Name Joe</p>
          <p>namejoe@gmail.com</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 my-10 text-[#2E2F38]">
        <div>
          <table className="w-full border-[0.5px] border-[#2E2F38] rounded-xl">
            <thead className="text-base text-left rounded-t-xl lg:text-xl font-semibold">
              <tr>
                <th className="p-3">Property</th>
                <th className="p-3">Price</th>
                <th className="p-3">Duration</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody className="text-xs lg:text-xl rounded-b-xl">
              <tr>
                <td className="p-3">
                  <div className="flex lg:flex-row flex-col items-center gap-4">
                    <Image
                      src={houseImg}
                      alt="house"
                      width={100}
                      height={100}
                      className="rounded-xl lg:h-[96px] lg:w-[72px] h-[50px] w-[50px]"
                    />
                    <div>
                      <p className="font-bold">2 Bedroom flat</p>
                      <p>Doncaster, United Kingdom</p>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <span className="font-bold text-base lg:text-xl">
                    € 50.00{" "}
                  </span>
                  <span className="text-xs lg:text-base">/night</span>
                </td>
                <td className="p-3">1 night</td>
                <td className="p-3">
                  <button className="custom-gradient-text text-xs lg:text-xl font-bold border-b-custom-gradient  font-quicksand">
                    Cancel Reservation
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-3">
                  <div className="flex lg:flex-row flex-col items-center gap-4">
                    <Image
                      src={houseImg}
                      alt="house"
                      width={100}
                      height={100}
                      className="rounded-xl lg:h-[96px] lg:w-[72px] h-[50px] w-[50px]"
                    />
                    <div>
                      <p className="font-bold">2 Bedroom flat</p>
                      <p>Doncaster, United Kingdom</p>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <span className="font-bold text-base lg:text-xl">
                    € 50.00{" "}
                  </span>
                  <span className="text-xs lg:text-base">/night</span>
                </td>
                <td className="p-3">1 night</td>
                <td className="p-3">
                  <button className="custom-gradient-text text-xs lg:text-xl font-bold border-b-custom-gradient  font-quicksand">
                    Cancel Reservation
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-3">
                  <div className="flex lg:flex-row flex-col items-center gap-4">
                    <Image
                      src={houseImg}
                      alt="house"
                      width={100}
                      height={100}
                      className="rounded-xl lg:h-[96px] lg:w-[72px] h-[50px] w-[50px]"
                    />
                    <div>
                      <p className="font-bold">2 Bedroom flat</p>
                      <p>Doncaster, United Kingdom</p>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <span className="font-bold text-base lg:text-xl">
                    € 50.00{" "}
                  </span>
                  <span className="text-xs lg:text-base">/night</span>
                </td>
                <td className="p-3">1 night</td>
                <td className="p-3">
                  <button className="custom-gradient-text text-xs lg:text-xl font-bold border-b-custom-gradient  font-quicksand">
                    Cancel Reservation
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="rounded-2xl h-fit px-4 border-[0.5px] border-[#2E2F38] bg-white lg:w-1/2 w-full   text-[#2E2F38]  flex flex-col justify-center  ">
          <p className=" text-xl lg:text-2xl py-6 font-semibold font-quicksand">
            Order Summary
          </p>
          <div className="flex flex-col gap-4 border-[0.5px]  w-full p-4  border-[#2E2F3899] rounded-2xl">
            <div className="lg:text-2xl text-lg">
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
            </div>
          </div>

          <div className="w-full py-6">
            <button className="w-full custom-gradient py-2 mt-6 font-bold font-quicksand rounded-full text-white text-lg lg:text-xl transition duration-300 transform hover:scale-105">
              Complete Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
