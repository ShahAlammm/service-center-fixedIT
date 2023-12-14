const ParcelHero = () => {
  return (
    <div className="hero min-h-[600px] container m-auto shadow-2xl">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://i.ibb.co/s1qWxr5/percel.webp"
          className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Experience our Service !!</h1>
          <p className="py-6 text-lg">
          Ensuring the safety of your parcels is our paramount concern at
              Fast Parcel. We employ secure packaging techniques, using
              high-quality materials to minimize the risk of damage during
              transit. Real-time tracking keeps you informed about your parcel's
              journey, offering transparency and reassurance. Our experienced
              staff handles each parcel with precision and care, and for
              additional peace of mind, we provide insurance options to cover
              the value of your shipments. Trust Fast Parcel for a heightened
              standard of parcel safety, delivering not only packages but also
              confidence in reliable and secure parcel services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParcelHero;
