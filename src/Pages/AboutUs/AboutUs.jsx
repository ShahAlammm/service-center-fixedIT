

const AboutUs = () => {
  return (
  <div className="container m-auto py-24 xl:pt-44">
      <div className="about-us-page p-8">
      <section className="about-section mb-8">
        <h1 className="text-4xl font-bold mb-4">About FixedIT</h1>
        <p className="text-xl font-bold">
          Welcome to FixedIT, where we are committed to revolutionizing the device repairing experience.
        </p>
        <p className="text-lg font-semibold mt-2">
          Our mission is to provide a seamless, efficient, and secure platform for users to send and receive parcels.
          We understand the importance of timely and device repairing, and that's why we've crafted FixedIT
          to meet the diverse needs of our users.
        </p>
      </section>

      <section className="team-section mb-8">
        <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="team-member mx-4 mb-4">
            <img className="rounded-full w-32 h-32 object-cover" src="https://i.ibb.co/Vt2KzsJ/images-3.jpg" alt="Team Member 1" />
            <h3 className="text-xl font-bold mt-2">John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member mx-4 mb-4">
            <img className="rounded-full w-32 h-32 object-cover" src="https://i.ibb.co/QpYGQpP/download.jpg" alt="Team Member 2" />
            <h3 className="text-xl font-bold mt-2">Jane Smith</h3>
            <p>Lead Developer</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>

      <section className="vision-section">
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p className="text-lg">
          At Delivery Express, we envision a future where parcel delivery is not just a service but an experience.
          We strive to continuously innovate, ensuring that our users, delivery personnel, and administrators have
          access to cutting-edge technology and a user-friendly platform.
        </p>
        <p className="text-lg mt-2">
          Join us on this journey as we redefine the standards of parcel delivery and create a network that connects
          people and businesses seamlessly.
        </p>
      </section>
    </div>
  </div>
  );
};

export default AboutUs;
