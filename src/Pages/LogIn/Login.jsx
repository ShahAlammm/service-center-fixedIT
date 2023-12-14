import Swal from "sweetalert2";
import SocialLogin from "../../Components/SectionTitle/SocialLogin";
import img from "../../assets/authentication.gif";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signIn } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password).then(() => {
      Swal.fire({
        position: "top-start",
        icon: "success",
        title: `Log In successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="shadow-2xl p-10">
          <div className="hero-content flex-col lg:flex-row">
            <div>
              <img src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm font-semibold">
              <h1 className="text-5xl text-center p-3 font-bold">Login now!</h1>
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />

                  {/* <button className="btn btn-outline btn-error btn-xs mt-3">
                    validate
                  </button> */}
                </div>
                <div className="form-control mt-5">
                  <input
                    // disabled={disabled}
                    type="submit"
                    value="Sign in"
                    className="btn bg-[#26DEBE] text-white"
                  />
                </div>
              </form>
              <p className="text-center text-blue-600 font-bold">
                <Link to={"/signup"}>New here? Create a New Account</Link>
              </p>
              <p className="text-center font-semibold">Or sign in with</p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
