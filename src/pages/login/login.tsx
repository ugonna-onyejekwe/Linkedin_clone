import "./login.scss";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import login_img from "../../assets/login-img.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, database } from "../../firebase_config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDocs, collection } from "firebase/firestore";

export const Login = (): React.JSX.Element => {
  const [email, setEmail] = useState("");
  const [showpass, setShowpass] = useState(false);
  const [password, setPassword] = useState("");
  // const [userList, setUserList] = useState([]);

  const usersRef = collection(database, "qualified-users");

 

  const getdb = async () => {
    try {
      const db = await getDocs(usersRef);
      const filtereddb = db.docs.map((i) => ({
        ...i.data(),
        id: i.id,
      }));
      console.log(filtereddb);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getdb();
  }, []);

  const signin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      alert(err);
    }
  };

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
            <form>
              <div className="input_con">
                <label htmlFor="email">email or phone</label>
                {/* <Input_field type={"text"} /> */}
                <input
                  type={"email"}
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input_con">
                <label htmlFor="password">password</label>
                {/* <Input_field type={"password"} /> */}
                <div className="password_con">
                  <input
                    type={showpass ? "text" : "password"}
                    value={password}
                    onChange={(e: any) => setPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setShowpass(!showpass);
                    }}
                  >
                    {showpass ? "hide" : "show"}
                  </button>
                </div>
              </div>

              <a href="#" className="forget_pass">
                Forgot password?
              </a>
              <button
                onClick={(e) => {
                  e.preventDefault;
                  signin();
                }}
                type="submit"
              >
                sign in
              </button>
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
