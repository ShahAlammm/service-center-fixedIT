import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);
const Payment = () => {
  return (
    <div className="container m-auto">
      <SectionTitle
        heading={"PAYMENT"}
      ></SectionTitle>
      <div className="card shadow-2xl p-10">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
