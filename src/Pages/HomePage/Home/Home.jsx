import Lottie from "lottie-react";
import Banner from "../Banner/Banner";
import phone from "../../../assets/phone.json";
import FeaturesSection from "../FeaturesSection/FeaturesSection";
import ParcelMan from "../ParcelMan/ParcelMan";
import NumberCount from "../../../Components/Statistic/NumberCount";
import Map from "../../../Components/Map/Map";
import { Link } from "react-router-dom";
const Home = () => {


  return (
    <div>
      <Banner></Banner>

      <div className="hero-content flex-col lg:flex-row container m-auto max-h-min">
        <div className="card w-1/2">
          <div className="w-full">
            <Lottie animationData={phone}></Lottie>
          </div>
        </div>
        <div className="card w-1/2 justify-center text-left space-y-5">
          <h2 className="text-xl lg:text-5xl font-bold font-serif">
            Do You Want A Fast <br /> Service? Just Call Us.
          </h2>
          <p className="text-xl">
            Aenean quis sagittis sem. Sed volutpat quam a imperdiet volutpat.
            Quisque maximus nibh elit, nec molestie erat tincidunt sit amet.
            Duis nec ante molestie, volutpat mi ac, convallis quam. Fusce
            laoreet bibendum luctus. Maecenas malesuada fermentum mi.
          </p>
          <Link to={'/aboutUs'}><button className="btn bg-[#26DEBE] lg:w-2/12 uppercase">Call us</button></Link>
        </div>
      </div>
      <FeaturesSection></FeaturesSection>
      <NumberCount></NumberCount>
      <ParcelMan></ParcelMan>
      <Map></Map>
    </div>
  );
};

export default Home;
