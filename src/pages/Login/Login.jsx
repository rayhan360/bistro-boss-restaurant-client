import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import leftSide from "../../assets/loginleft.png"
import "./login.css"
import { useEffect } from 'react';


const Login = () => {

  useEffect(()=> {
    loadCaptchaEnginge(6); 
  }, [])

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
  return (
    <div className="hero min-h-screen bg-img">
      <div className="hero-content flex flex-col md:flex-row bg-img shadow-xl p-16">
        <div className="text-center md:w-1/2 lg:text-left">
          <img src={leftSide} alt="" />
        </div>
        <div className="card md:w-1/2 max-w-sm shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
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
            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                placeholder="type the captcha above"
                name="captcha"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input className="py-2 rounded-md bg-[#D1A054B2] text-white" type="submit" value="Login" />
            </div>
          <div className="text-center">
            <h1 className="text-[#D1A054B2]">new here? <span className="font-bold">create a account</span></h1>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
