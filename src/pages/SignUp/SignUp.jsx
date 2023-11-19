import { Link } from "react-router-dom";
import leftSide from "../../assets/loginleft.png"
const SignUp = () => {
    return (
        <div className="hero min-h-screen bg-img">
      <div className="hero-content flex flex-col md:flex-row bg-img shadow-xl p-16">
        <div className="text-center md:w-1/2 lg:text-left">
          <img src={leftSide} alt="" />
        </div>
        <div className="card md:w-1/2 max-w-sm shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="name"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
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
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="py-2 rounded-md bg-[#D1A054B2] text-white cursor-pointer"
                type="submit"
                value="Login"
              />
            </div>
          </form>
            <div className="text-center">
              <h1 className="text-[#D1A054B2] mb-2">
               already registered? <Link to="/login"><span className="font-bold">Go to Login</span></Link>
              </h1>
            </div>
        </div>
      </div>
    </div>
    );
};

export default SignUp;