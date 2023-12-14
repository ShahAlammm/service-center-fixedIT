import Lottie from "lottie-react";
import parcel from "../../../assets/bannerLotti.json";
import banner from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[800px]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="hero-content flex-col lg:flex-row-reverse gap-10">
            <div className="text-center lg:text-left space-y-6">
              <h1 className="text-3xl lg:text-7xl font-bold ">
                Reliable Service <br />
                Every Time
              </h1>
              <p className="">
                Nullam ac aliquam purus. Donec tempor, metus sed porttitor
                posuere, elit sapien rutrum elit, eget tincidunt nisl tortor nec
                metus. Donec tempor rhoncus convallis.
              </p>
            </div>
            <div className="card  w-full max-w-xl  ">
              <div className="col-span-4">
                <Lottie loop={true} animationData={parcel}></Lottie>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
