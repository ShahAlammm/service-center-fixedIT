import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  FaChartPie,
  FaClipboardCheck,
  FaEnvelope,
  FaHome,
  FaListAlt,
  FaListUl,
  FaStar,
  FaUserAlt,
  FaUsers,
  FaWalking,
} from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useDeliveryMan from "../hooks/useDeliveryMan";
import { useEffect } from "react";

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();
  const [isDeliveryMan] = useDeliveryMan();

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard/statistics");
    if (isDeliveryMan) {
      navigate("/dashboard/myDelivery");
    }
    if (!isAdmin && !isDeliveryMan) {
      navigate("/dashboard/profile");
    }
  }, [navigate, isDeliveryMan, isAdmin]);

  return (
    <div className="flex container m-auto">
      <div
        style={{ backgroundImage: "url(https://i.ibb.co/J2q5qBj/img4.jpg)" }}
        className="w-40 md:w-72 min-h-screen bg-cover"
      >
        <h1 className="md:text-3xl mt-14 uppercase md:p-5 text-center text-black font-serif font-bold">
          Fast Parcel
        </h1>
        <ul className="menu md:text-lg font-serif uppercase md:mt-24">
          {isAdmin ? (
            <ul>
              <li className="text-black">
                <NavLink to="/dashboard/statistics">
                  <FaChartPie className="md:w-7 md:h-10"></FaChartPie>Statistics
                </NavLink>
              </li>

              <li className="text-black">
                <NavLink to="/dashboard/allParcels">
                  <FaListUl className="md:w-7 md:h-10"></FaListUl>All Bookings
                </NavLink>
              </li>
              <li className="text-black">
                <NavLink to="/dashboard/deliveryMan">
                  <FaWalking className="md:w-7 md:h-10"></FaWalking>All Delivery
                  Men
                </NavLink>
              </li>
              <li className="text-black">
                <NavLink to="/dashboard/users">
                  <FaUsers className="md:w-7 md:h-10"></FaUsers>All Users
                </NavLink>
              </li>
            </ul>
          ) : isDeliveryMan ? (
            <ul>
              <li className="text-black">
                <NavLink to="/dashboard/myDelivery">
                  <FaListUl className="md:w-7 md:h-10"></FaListUl>My Product
                  List
                </NavLink>
              </li>
              <li className="text-black">
                <NavLink to="/dashboard/review">
                  <FaStar className="md:w-7 md:h-10"></FaStar>My Reviews
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul>
              <li className="text-black">
                <NavLink to="/dashboard/profile">
                  <FaUserAlt className="md:w-7 md:h-10"></FaUserAlt>My Profile
                </NavLink>
              </li>
              <li className="text-black">
                <NavLink to="/dashboard/bookings">
                  <FaListAlt className="md:w-7 md:h-10"></FaListAlt>Book Service

                </NavLink>
              </li>
              <li className="text-black">
                <NavLink to="/dashboard/myParcel">
                  <FaClipboardCheck className="md:w-7 md:h-10"></FaClipboardCheck>
                  My Booking
                </NavLink>
              </li>
            </ul>
          )}
        </ul>
        {/* Shard  */}
        <div className="divider divider-neutral"></div>
        <ul className="menu md:text-lg font-serif uppercase">
          <li className="text-black">
            <NavLink to="/">
              <FaHome className="md:w-7 md:h-10"></FaHome>Home
            </NavLink>
          </li>
          <li className="text-black">
            <NavLink to="/aboutUs">
              <FaEnvelope className="md:w-7 md:h-10"></FaEnvelope>contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-10 bg-cover bg-opacity-80">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
