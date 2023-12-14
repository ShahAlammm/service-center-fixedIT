import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const {googleSignIn} = useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const handleGoogle = () => {
        googleSignIn().then((res) => {
          Swal.fire({
            position: "top-start",
            icon: "success",
            title: `Log In successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
          const userInfo = {
              email: res.user.email,
              name: res.user.displayName,
            };
            axiosPublic.post("/users", userInfo).then(() => {
            });
            navigate('/')
          });
        };
  return (
    <div>
      <div className="divider w-2/3 m-auto"></div>
      <div className="flex justify-center gap-10 mt-6">
        <button
          onClick={handleGoogle}
          className="btn btn-circle bg-[#26DEBE]"
        >
          <FaGoogle></FaGoogle>
        </button>
        <button className="btn btn-circle bg-[#26DEBE]">
          <FaGithub></FaGithub>
        </button>
        <button className="btn btn-circle bg-[#26DEBE]">
          <FaFacebookF></FaFacebookF>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
