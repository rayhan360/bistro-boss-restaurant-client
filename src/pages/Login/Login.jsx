import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import leftSide from "../../assets/loginleft.png"
import "./login.css"


const Login = () => {
  const captchaRef = useRef(null)
  const [disabled, setDisabled] = useState(true)

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

    const handleValidateCaptcha = () => {
      const user_captcha_value = captchaRef.current.value;

      if(validateCaptcha(user_captcha_value)){
        setDisabled(false)
      }else{
        setDisabled(true)
      }
      
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
                ref={captchaRef}
                placeholder="type the captcha above"
                name="captcha"
                className="input input-bordered"
                required
              />
              <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button>
            </div>
            <div className="form-control mt-6">
              <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
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
