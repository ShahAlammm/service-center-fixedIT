import { FaTrashAlt } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { useState } from "react";
const PAGE_SIZE = 5;
const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      const filteredUsers = res.data.filter(
        (user) => user.role !== "deliveryMan"
      );

      return filteredUsers;
    },
  });

  const totalPages = Math.ceil(users.length / PAGE_SIZE);

  const paginatedUsers = users.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin now!`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };
  const handleMakeDeliveryMan = (user) => {
    axiosSecure.patch(`/users/deliveryMan/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is a Delivery Man now!`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <div>
        <SectionTitle heading={"MANAGE ALL USERS"}></SectionTitle>
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
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {paginatedUsers?.map((user, index) => (
              <tr key={user._id} className="font-semibold">
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "deliveryMan" ? (
                    "Delivery Man"
                  ) : user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <div className="space-x-2">
                      <button
                        onClick={() => handleMakeDeliveryMan(user)}
                        className="btn bg-[#26DEBE] text-white uppercase"
                      >
                        delivery man
                      </button>
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-secondary text-white uppercase"
                      >
                        make admin
                      </button>
                    </div>
                  )}
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

        <div className="text-center mt-20 space-x-4">
          <button
            className="btn btn-primary"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>{` ${currentPage} of ${totalPages}`}</span>
          <button
            className="btn btn-primary"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
