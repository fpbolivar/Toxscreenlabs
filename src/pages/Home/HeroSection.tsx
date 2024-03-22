import AppButton from "../../common/Button";

export default function HeroSection() {
  const scrollToTox = () => {
    const element = document.getElementById("tox-test");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-[86vh] overflow-hidden flex items-center">
      <img
        src="/background.png"
        alt="background image"
        className=" w-full absolute top-0 left-0 z-0 min-h-[86vh] blur-[1px] object-cover md:object-fit"
      />
      <div className="w-[85%] m-auto">
        <div className="z-10 relative">
          <h1
            style={{ textShadow: "0px 0px 16px white" }}
            className="text-2xl smtext-3xl lg:text-5xl lg:leading-[3.5rem] font-bold text-darkBlue lg:w-[40rem]"
          >
            Tox Screen Labs {"\n"} <br /> Strategic Laboratory Partner for Rehab
            Centers, Treatment Facilities & more.
          </h1>
          <p className="text-sm sm:text-2xs lg:w-[40rem] mt-4">
            At Tox Screen Labs, we are radically committed to providing
            cutting-edge testing services including Tox Screens, UTI Testing &
            more with a dedicated laser-sharp focus on your operational
            expectations.
          </p>
          <div className="flex mt-6 justify-start">
            <div onClick={scrollToTox}>
              <AppButton title="About Our Test" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
