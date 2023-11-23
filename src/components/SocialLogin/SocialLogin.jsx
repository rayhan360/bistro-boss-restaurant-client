import { BsGoogle } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            const userInfo = {
                name: result.user?.displayName,
                email: result.user?.email
            }
            axiosPublic.post("/users", userInfo)
            .then(res => {
                console.log(res.data);
                navigate("/")
            })
        })
    }
  return (
    <div>
        <div className="divider mx-6"></div>
      <div>
    <button onClick={handleGoogleSignIn} className="btn">
          <BsGoogle></BsGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
