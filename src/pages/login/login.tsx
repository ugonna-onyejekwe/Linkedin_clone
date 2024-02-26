import "./login.scss";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import login_img from "../../assets/login-img.png";
import { Input_field } from "../../components/inputfield/input";
import { Link } from "react-router-dom";

export const Login = (): React.JSX.Element => {
  return (
    <section className="login_container">
      <div className="nav">
        <div className="container">
          <div className="logo">
            <h1>
              linked <span>{<FaLinkedin className="icon" />}</span>
            </h1>
          </div>

          <div className="btns">
            <Link to={"/sign_up"}>join now</Link>
            <Link to={"/login"}>sign in</Link>
          </div>
        </div>
      </div>

      <div className="wrapper container">
        <div className="txt_con">
          <h1>Welcome to your professional community</h1>
          <div className="con">
            <form action="#">
              <div className="input_con">
                <label htmlFor="email">email or phone</label>
                <Input_field type={"text"} />
              </div>
              <div className="input_con">
                <label htmlFor="password">password</label>
                <Input_field type={"password"} />
              </div>

              <a href="#" className="forget_pass">
                Forgot password?
              </a>
              <button>sign in</button>
            </form>

            <div className="divider">or</div>
            <p className="policy">
              By clicking Continue, you agree to LinkedIn’s
              <a href="#">User Agreement</a>, <a href="#">Privacy Policy</a>,
              and
              <a href="#">Cookie Policy</a>.
            </p>

            <div className="action_btns">
              <button>
                <span>{<FcGoogle />}</span>continue with google
              </button>
              <button>new to linkedin? jion now</button>
            </div>
          </div>
        </div>

        <div className="img_con">
          <img src={login_img} alt="img" />
        </div>
      </div>
    </section>
  );
};
