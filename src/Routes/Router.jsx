import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/LogIn/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import AllUsers from "../Pages/HomePage/Dashboard/Admin/AllUsers";
import Bookings from "../Pages/HomePage/Dashboard/User/Bookings";
import MyParcel from "../Pages/HomePage/Dashboard/User/MyParcel";
import UpdateItem from "../Pages/HomePage/Dashboard/User/UpdateItem";
import UserProfile from "../Pages/HomePage/Dashboard/User/UserProfile";
import Statistics from "../Pages/HomePage/Dashboard/Admin/Statistics/Statistics";
import AllParcel from "../Pages/HomePage/Dashboard/Admin/AllParcel/AllParcel";
import DeliveryMan from "../Pages/HomePage/Dashboard/DeliveryMan/DeliveryMan";
import MyDelivery from "../Pages/HomePage/Dashboard/DeliveryMan/MyDelivery";
import BlogPage from "../Pages/BlogPage/BlogPage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Review from "../Pages/HomePage/Dashboard/DeliveryMan/Review";
import Error from "../Pages/Error/Error";
import Payment from "../Pages/Payment/Payment";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "allParcels",
        element: <AllParcel></AllParcel>,
      },
      {
        path: "deliveryMan",
        element: <DeliveryMan></DeliveryMan>,
      },
      {
        path: "myDelivery",
        element: <MyDelivery></MyDelivery>,
      },
      {
        path: "review",
        element: <Review></Review>,
      },
      {
        path: "profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "bookings",
        element: <Bookings></Bookings>,
      },
      {
        path: "myParcel",
        element: <MyParcel></MyParcel>,
      },
      {
        path: "updateItem/:id",
        element: <UpdateItem></UpdateItem>,
        loader: ({ params }) =>
          fetch(
            `https://parcel-management-server-two.vercel.app/bookings/${params.id}`
          ),
      },
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
    ],
  },
]);

export default Router;
