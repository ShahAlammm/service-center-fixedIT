import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Card from "../../../Components/Card/Card";
import ParcelHero from "../../../Components/ParcelHero/ParcelHero";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ParcelMan = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");

      // Filter users based on role (modify as needed)
      const filteredUsers = res.data.filter(
        (user) => user.role === "deliveryMan"
      );

      return filteredUsers;
    },
  });
  return (
    <>
      <div className="container m-auto">
        <SectionTitle heading={"Our Technician"}></SectionTitle>
      </div>
      <div className="container m-auto pb-20 pt-12 md:px-36 px-10 gap-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
          {users.slice(0,5).map((item) => (
            <Card key={item._id} item={item}></Card>
          ))}
        </div>
      </div>
      <ParcelHero></ParcelHero>
    </>
  );
};

export default ParcelMan;
