import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import ParcelCard from "../../../../Components/Card/ParcelCard";
import useBooking from "../../../../hooks/useBooking";

const MyParcel = () => {


  const { bookings, refetch } = useBooking();

  return (
    <div>
      <SectionTitle heading={"My Bookings"}></SectionTitle>
      <div className=" grid xl:grid-cols-2 gap-5">
        {bookings?.map((item) => (
          <ParcelCard key={item._id} item={item} refetch={refetch}></ParcelCard>
        ))}
      </div>
    </div>
  );
};

export default MyParcel;
