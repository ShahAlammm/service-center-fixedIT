import SectionTitle from "../SectionTitle/SectionTitle";

const Map = () => {
  return (
    <div className="container m-auto pt-20">
      <div>
        <SectionTitle heading={"your location"}></SectionTitle>
        <div className="hero container m-auto">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://i.ibb.co/cCVdrCK/delivery-man-saluting-removebg-preview.png"
              className="max-w-sm rounded-lg"
            />
            <div>
                <img src="https://i.ibb.co/3cy12Mq/maps-dmpu-1248.webp"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
