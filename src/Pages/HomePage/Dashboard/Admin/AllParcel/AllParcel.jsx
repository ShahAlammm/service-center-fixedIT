import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";
import { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const AllParcel = () => {
  const [manage, setManage] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const axiosSecure = useAxiosSecure();

  const { data: books = [], refetch } = useQuery({
    queryKey: ["bookings"], 
    queryFn: async () => {
      const response = await axiosSecure.get("/bookings");
      return response.data;
    },
  });

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

  const { handleSubmit, register, setValue } = useForm();

  const handleSelect = (id) => {
    setValue("deliveryManId", id);
  };

  const handleManage = (id) => {
    setManage(id);
  };

  const handleStatusChange = (selectedStatus) => {
    setValue("status", selectedStatus);
  };

  const onSubmit = async (data) => {
    const update = {
      deliveryManId: data.deliveryManId,
      status: data.status,
    };

    const res = await axiosSecure.patch(
      `/bookings/update-status/${manage}`,
      update
    );

    if (res.data.modifiedCount > 0) {
      // show success
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Parcel is updated`,
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    }
  };

  const handleSearch = () => {
    refetch();
  };
  return (
    <div>
      <div>
        <SectionTitle heading={"MANAGE ALL USERS"}></SectionTitle>
      </div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">
            Total User : {books.length}
          </h1>
        </div>
        <div className="border-2 rounded-2xl px-2">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <button onClick={handleSearch} className="btn btn-secondary">
            Search
          </button>
        </div>
      </div>
      <div className="overflow-x-auto rounded-xl">
        <table className="table ">
          {/* head */}
          <thead className="bg-[#26DEBE] uppercase text-gray-600">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone</th>
              <th>Booking Date</th>
              <th>Requested Delivery Date</th>
              <th>Cost</th>
              <th>Status</th>
              <th>Manage action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {books?.map((item, index) => (
              <tr key={item._id} className="font-semibold">
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.bookingDate}</td>
                <td>{item.requestedDeliveryDate}</td>
                <td>{item.price} TK</td>
                <td>{item.status}</td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      document.getElementById("my_modal_4").showModal(),
                        handleManage(item?._id);
                    }}
                  >
                    Manage
                  </button>
                  <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                      <div className="overflow-x-auto">
                        <div className="overflow-x-auto">
                          <table className="table">
                            {/* head */}
                            <thead>
                              <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Ratings</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {users?.map((user, index) => (
                                <tr key={user._id}>
                                  <th>{index + 1}</th>
                                  <td>
                                    <div className="flex items-center gap-3">
                                      <div className="avatar">
                                        <div className="mask mask-circle w-12 h-12">
                                          <img
                                            src={user.image}
                                            alt="Avatar Tailwind CSS Component"
                                          />
                                        </div>
                                      </div>
                                      <div>
                                        <div className="font-bold">
                                          {user.name}
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td>{user.phoneNumber}</td>
                                  <td>{user.averageRatings}</td>
                                  <th>
                                    <button
                                      onClick={() => handleSelect(user._id)}
                                      className="btn btn-outline btn-primary uppercase"
                                    >
                                      Select
                                    </button>
                                  </th>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        {/*  */}
                      </div>
                      <div className="divider divider-neutral">!###!</div>
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex space-x-5 mt-5"
                      >
                        <div className="form-control space-y-3">
                          <label>
                            <span className="text-lg">Status :</span>
                          </label>
                          <select
                            {...register("status", { required: true })}
                            className="select select-secondary w-full max-w-xs"
                            onChange={(e) => handleStatusChange(e.target.value)}
                          >
                            <option disabled value="default">
                              Pick your status
                            </option>
                            <option value="pending">Pending</option>
                            <option value="no the way">No the way</option>
                            <option value="delivered">Delivered</option>
                          </select>
                        </div>
                        <div className="form-control space-y-3">
                          <label>
                            <span className="text-lg">Delivery Man Id</span>
                          </label>
                          <input
                            className="input input-secondary w-full max-w-xs"
                            {...register("deliveryManId", { required: true })}
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn text-xl btn-secondary mt-10"
                        >
                          CONFIRM
                        </button>
                      </form>
                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllParcel;
