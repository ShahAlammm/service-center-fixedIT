import { useForm } from "react-hook-form";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMAGE_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UserProfile = () => {

  const { user } = useAuth();
  const { displayName, email } = user || {};
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit } = useForm();

  const { data: userData=[] , refetch } = useQuery({
    queryKey: ["users", email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${email}`);
      return res.data;
    },
  });


  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };

    const response = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    if (response.data.success) {
      const menuItem = {
        image: response.data.data.display_url,
      };

      const res = await axiosPublic.patch(`/users/${email}`, menuItem);
      if (res.data.modifiedCount > 0) {
        // show success
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch()
      }
    }
  };


  return (
    <div className="w-full h-screen container m-auto">
      <SectionTitle heading={"welcome"}></SectionTitle>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-40 h-40 mb-3 rounded-full shadow-lg"
          src={userData[0]?.image}
        />
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Upload Photo
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Upload Photo</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="file"
                {...register("image")}
                className="file-input file-input-bordered file-input-accent w-full max-w-xs mt-5"
              />
              <button type="submit" className="btn btn-secondary ml-4">
                submit
              </button>
            </form>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        <h5 className="m-3 text-2xl font-medium text-gray-900 dark:text-white">
          Name : {displayName}
        </h5>
        <span className="text-lg text-gray-500 dark:text-gray-400">
          Email :<span className="text-red-600 font-bold"> {email}</span>
        </span>
        <div className="flex mt-4 md:mt-6">
          {/* <Rating name="half-rating-read" defaultValue={averageRatings} precision={0.5} readOnly /> */}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
