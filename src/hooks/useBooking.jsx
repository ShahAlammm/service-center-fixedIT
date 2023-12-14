// Import necessary dependencies
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useBookings = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { email } = user || {};
  // Use useQuery hook to fetch data
  const { refetch, data: bookings = [] } = useQuery({
    queryKey: ["bookings", email], // Confirm that 'email' is correctly passed
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?email=${email}`);
      return res.data;
    },
  });

  // Return the necessary data and functions
  return { bookings, refetch };
};

export default useBookings;
