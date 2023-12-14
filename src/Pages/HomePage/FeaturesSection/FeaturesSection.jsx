import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Lottie from "lottie-react";
import fast from "../../../assets/mobile.json";
import safety from "../../../assets/laptop.json";
import author from "../../../assets/pc.json";
const FeaturesSection = () => {
  return (
    <div className="container m-auto ">
      <SectionTitle heading={"our features"}></SectionTitle>
      <div className="grid  items-center  justify-center gap-5 lg:grid-cols-3">
        <div className="card">
          <figure>
            <Lottie animationData={fast}></Lottie>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold text-4xl">Mobile Services</h2>
          </div>
        </div>
        <div className="card">
          <figure>
            <Lottie animationData={safety}></Lottie>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold text-4xl">Laptop Services</h2>
          </div>
        </div>
        <div className="card">
          <figure>
            <Lottie animationData={author}></Lottie>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold text-4xl">
              Desktop & Server Services
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
