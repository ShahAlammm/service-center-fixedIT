import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useDeliveryMan = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isDeliveryMan, isPending: isDeliveryManLoading } = useQuery({
    queryKey: [user?.email, "deliveryMan"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/deliveryMan/${user.email}`);
      return res.data?.deliveryMan;
    },
  });
  return [isDeliveryMan, isDeliveryManLoading];
};

export default useDeliveryMan;
