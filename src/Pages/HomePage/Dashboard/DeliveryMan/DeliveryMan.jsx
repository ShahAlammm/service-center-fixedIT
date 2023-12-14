import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

const DeliveryMan = () => {
  
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");

      // Filter users based on role (modify as needed)
      const filteredUsers = res.data.filter(
        (user) => user.role === "deliveryMan"
      );

      return filteredUsers;
    },
  });

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your user has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div>
        <SectionTitle heading={"MANAGE Delivery man"}></SectionTitle>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">Total User : {users.length}</h1>
      </div>
      <div className="overflow-x-auto rounded-xl">
        <table className="table ">
          {/* head */}
          <thead className="bg-[#26DEBE] uppercase text-gray-600">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>parcel delivered</th>
              <th>review</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((user, index) => (
              <tr key={user._id} className="font-semibold">
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.parcelsDelivered}</td>
                <td>{user.averageRatings}</td>
                <td>
                  {user.role === "deliveryMan"
                    ? "Delivery Man"
                    : user.role === "admin"
                    ? "Admin"
                    : ""}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliveryMan;
