import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useBookings from "../../../../hooks/useBooking";
import { useQuery } from "@tanstack/react-query";


const MyDelivery = () => {

  const { bookings, refetch } = useBookings();
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      const filteredUsers = res.data.filter(
        (user) => user.role === "deliveryMan"
      );

      return filteredUsers;
    },
  });

  const deliveryMan = users.length > 0 ? users[0] : null;

  // Filter bookings based on the deliveryMan's _id
  const forDeliveryMan = bookings.filter(
    (booking) =>
      booking.deliveryManId === (deliveryMan ? deliveryMan._id : null)
  );

  

  const handleDeleteItem = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/bookings/${forDeliveryMan._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your Parcel has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  const handleDeliverParcel = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, deliver it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Trigger the deliver parcel mutation
      }
    });
  };

  return (
    <>
      {" "}
      <div>
        <SectionTitle heading={"My delivery"}></SectionTitle>
        <h1 className="text-3xl font-bold mb-4">
          {/* My Delivery List: {parcels.length} */}
        </h1>
        <div className="overflow-x-auto rounded-xl">
          <table className="table">
            <thead className="bg-[#26DEBE] uppercase text-gray-600">
              <tr>
                <th>User Name</th>
                <th>Receiver Name</th>
                <th>User Phone</th>
                <th>Requested Date</th>
                <th>Approximate Date</th>
                <th>Receiver Number</th>
                <th>Receiver Address</th>
                <th>Location</th>
                <th>Cancel</th>
                <th>Deliver</th>
              </tr>
            </thead>
            <tbody>
              {forDeliveryMan?.map((parcel) => (
                <tr key={parcel._id}>
                  <td>{parcel.name}</td>
                  <td>{parcel.receiverName}</td>
                  <td>{parcel.phoneNumber}</td>
                  <td>{parcel.bookingDate}</td>
                  <td>{parcel.requestedDeliveryDate}</td>
                  <td>{parcel.receiverPhoneNumber}</td>
                  <td>{parcel.parcelDeliveryAddress}</td>
                  <td>
                    {/* Add a button or link to view location */}
                    <button
                      className="btn btn-outline btn-primary"
                      onClick={() => {
                        // Handle view location
                      }}
                    >
                      Location
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline btn-danger"
                      onClick={() => handleDeleteItem(parcel._id)}
                    >
                      Cancel
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline btn-success"
                      onClick={() => handleDeliverParcel(parcel._id)}
                    >
                      Deliver
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyDelivery;
