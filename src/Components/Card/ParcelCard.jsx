import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const ParcelCard = ({ item, refetch }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    parcelType,
    requestedDeliveryDate,
    status,
    price,
    _id,
    deliveryManId,
  } = item || {};

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
        const res = await axiosSecure.delete(`/bookings/${_id}`);
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

  const [rating, setRating] = useState("");
  const [feedback, setFeedback] = useState("");
  const handleInput = (event) => {
    let inputValue = event.target.value;

    if (/^[0-5]$/.test(inputValue)) {
      setRating(inputValue);
    } else {
      setRating("");
    }
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value); // Update the feedback state on input change
  };

  const handleReviewSubmit = async (event) => {
    event.preventDefault();

    const res = await axiosSecure.post(`/reviews`, {
      parcelId: item._id,
      reviewerEmail: user.email,
      reviewerName: user.displayName,
      rating: Number(rating),
      reviewDate: requestedDeliveryDate,
      feedback: feedback,
    });
    if (res.data.acknowledged === true) {
      Swal.fire({
        position: "top-start",
        icon: "success",
        title: `Added review successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
      setRating(" ");
      setFeedback(" ");
    }
  };
  return (
    <div>
      <div className="cart items-start bg-base-200">
        <div className="card-body">
          <div className="">
            <h1 className="text-xl font-bold">1. Parcel Type : {parcelType}</h1>
            <h1 className="text-xl font-bold">
              2. Requested Delivery Date : {requestedDeliveryDate}
            </h1>
            <h1 className="text-xl font-bold">
              3. Approximate Delivery Date :
            </h1>
            <h1 className="text-xl font-bold">
              4. BookingDate : {requestedDeliveryDate}
            </h1>
            <h1 className="text-xl font-bold">
              5. Delivery Men ID : {deliveryManId}
            </h1>
            <h1 className="text-xl font-bold">
              6. Booking Status : {status} ...
            </h1>
            <h1 className="text-xl font-bold">7. Price : {price}</h1>
          </div>
          <div className="space-x-10 md:space-x-60 my-5">
            <div className="join join-vertical lg:join-horizontal">
              {status === "pending" ? (
                <button
                  onClick={() => handleDeleteItem(item)}
                  className="btn bg-red-600 text-white join-item"
                >
                  CANCEL
                </button>
              ) : (
                <button
                  disabled
                  className="btn bg-red-600 text-white join-item"
                >
                  CANCEL
                </button>
              )}
              {status === "pending" ? (
                <Link to={`/dashboard/updateItem/${_id}`}>
                  <button className="btn bg-indigo-700 text-white join-item">
                    UPDATE
                  </button>
                </Link>
              ) : (
                <button
                  disabled
                  className="btn bg-indigo-700 text-white join-item"
                >
                  UPDATE
                </button>
              )}
              {status === "delivered" ? (
                <>
                  <button
                    className="btn join-item bg-green-400 text-white"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    REVIEW
                  </button>
                  <dialog id="my_modal_1" className="modal">
                    <form onSubmit={handleReviewSubmit} className="modal-box">
                      <div>
                        <h3 className="font-bold text-lg mb-5">
                          Give your Review
                        </h3>
                        <input
                          type="number"
                          name="rating"
                          placeholder="Enter a rating (0-5)"
                          min="0"
                          max="5"
                          step="1"
                          value={rating}
                          onInput={handleInput}
                          className="input input-bordered w-full max-w-xs mb-5"
                        />
                        <input
                          className="input input-bordered input-lg w-full max-w-xs  mr-5"
                          type="text"
                          name="text"
                          placeholder="Feedback"
                          value={feedback} // Bind the input value to the feedback state
                          onChange={handleFeedbackChange}
                        />
                        <button className="btn btn-secondary">submit</button>
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </form>
                  </dialog>
                </>
              ) : (
                <button
                  disabled
                  className="btn join-item bg-green-400 text-white"
                >
                  REVIEW
                </button>
              )}
            </div>
          </div>
          <div className="divider divider-neutral"></div>
          <Link to={'/dashboard/payment'}><button className="btn bg-[#26DEBE] font-bold">Pay Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ParcelCard;
