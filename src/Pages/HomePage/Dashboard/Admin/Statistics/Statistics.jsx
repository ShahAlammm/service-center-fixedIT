// Statistics.js
import { useQuery } from "@tanstack/react-query";

import BarChart from "./BarChart";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";

const Statistics = () => {
  const axiosSecure = useAxiosSecure();

  const { data: items = [] } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings`);
      return res.data;
    },
  });

  const bookingsPerDay = items?.reduce((acc, item) => {
    const date = item?.requestedDeliveryDate;
    const existingEntry = acc.find((entry) => entry.date === date);

    if (existingEntry) {
      existingEntry.bookingCount += 1;
    } else {
      acc.push({
        date,
        bookingCount: 1,
      });
    }

    return acc;
  }, []);

  return (
    <div>
      <SectionTitle heading={"Statistics"}></SectionTitle>
      <div>
        <BarChart data={bookingsPerDay} />
      </div>
    </div>
  );
};

export default Statistics;
