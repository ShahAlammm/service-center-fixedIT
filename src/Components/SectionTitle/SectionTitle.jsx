import Lottie from "lottie-react";
import shift from "../../assets/section.json";

const SectionTitle = ({ heading }) => {
  return (
    <div className="mb-10 md:w-4/12 text-center mx-auto">
      <p className="text-lg flex justify-center items-center">
        <span>
          <Lottie className="w-60 h-56" animationData={shift}></Lottie>
        </span>
      </p>
      <progress className="progress progress-secondary w-72"></progress>
      <h3 className="text-3xl uppercase font-serif font-semibold py-4">
        {heading}
      </h3>
      <progress className="progress progress-secondary w-72"></progress>
    </div>
  );
};

export default SectionTitle;
