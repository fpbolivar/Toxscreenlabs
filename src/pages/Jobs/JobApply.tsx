import AppButton from "../../common/Button";
import { IoMdClose } from "react-icons/io";

export default function JobApply({ close }: { close: any }) {
  return (
    <div className="w-[100%] bg-black/30 fixed top-0 left-0 h-screen flex items-center justify-center">
      <div className="bg-white text-black py-4 px-10 rounded-md w-[30rem] h-[80vh] overflow-auto relative">
        <div
          className="absolute top-2 left-2 text-2xl cursor-pointer"
          onClick={close}
        >
          <IoMdClose />
        </div>
        <h1 className="font-bold text-3xl text-darkBlue mt-2 text-center mb-4">
          Apply Form
        </h1>
        <form action="#" className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Enter your name</label>
            <input
              className="w-full rounded-md px-4 !py-2 border-black/50 outline-none border bg-lightGray"
              type="text"
              name="name"
              placeholder="name"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="address">Enter your address</label>
            <input
              className="w-full bg-lightGray rounded-md px-4 !py-2 border-black/50 outline-none border"
              type="address"
              name="address"
              placeholder="address"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="dob">Enter your dob</label>
            <input
              className="w-full bg-lightGray rounded-md px-4 !py-2 border-black/50 outline-none border"
              type="date"
              name="dob"
              placeholder="dob"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="socialSecurityNumber">
              Enter your Social Security number
            </label>
            <input
              className="w-full bg-lightGray rounded-md px-4 !py-2 border-black/50 outline-none border"
              type="number"
              name="socialSecurityNumber"
              placeholder="social security number"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phoneNumber">Enter your Phone number</label>
            <input
              className="w-full bg-lightGray rounded-md px-4 !py-2 border-black/50 outline-none border"
              type="number"
              name="phoneNumber"
              placeholder="Phone number"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Enter your Email Address</label>
            <input
              className="w-full bg-lightGray rounded-md px-4 !py-2 border-black/50 outline-none border"
              type="email"
              name="email"
              placeholder="email address"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="highestEduLevel">
              Enter your Highest Education Level
            </label>
            <input
              className="w-full bg-lightGray rounded-md px-4 !py-2 border-black/50 outline-none border"
              type="text"
              name="highestEduLevel"
              placeholder="Highest Education Level"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="yearsOfMedicalSales">
              Enter your Years of Medical Sales
            </label>
            <input
              className="w-full bg-lightGray rounded-md px-4 !py-2 border-black/50 outline-none border"
              type="number"
              name="yearsOfMedicalSales"
              placeholder="Years of Medical Sales"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="yearsOfSales">Enter your Years of Sales</label>
            <input
              className="w-full bg-lightGray rounded-md px-4 !py-2 border-black/50 outline-none border"
              type="number"
              name="yearsOfSales"
              placeholder="Years of Sales"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="resume">Upload resume</label>
            <input
              className="w-full bg-lightGray rounded-md px-4 !py-2 border-black/50 outline-none border"
              type="file"
              name="resume"
              placeholder="Years of Sales"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <div>
              <AppButton title="Submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
