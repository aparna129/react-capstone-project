import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import bgimage from "../images/bgimage.png";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [box, setBox] = useState(false);
  const [error, seterror] = useState(false);

  const text = "Field is required";

  const navigate = useNavigate();

  function navigator() {
    navigate("/category");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      username.length === 0 ||
      email.length === 0 ||
      mobile.length === 0 ||
      box === false
    ) {
      seterror(true);
    } else {
      seterror(false);
      const userData = {
        name,
        username,
        email,
        mobile,
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      navigator();
    }
  };

  return (
    <div>
      <div className="flex">
        <div>
          <img alt="bgimage" className="bg-image" src={bgimage} />
          <div>
            <p className="text1">Discover new things on</p>
            <p className="text2">Superapp</p>
          </div>
        </div>

        <div className="user-details">
          <p className="text3">Super app</p>
          <p className="text4">Create your new account</p>

          <form>
            <input
              style={{
                border: error & (name.length === 0) ? "1px solid red" : "none",
              }}
              className="input"
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            ></input>
            {error && name.length === 0 ? (
              <p>
                <label>{text}</label>
              </p>
            ) : (
              ""
            )}
            <input
              style={{
                border:
                  error & (username.length === 0) ? "1px solid red" : "none",
              }}
              className="input"
              type="text"
              name="username"
              placeholder="UserName"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            {error && username.length === 0 ? (
              <p>
                <label>{text}</label>
              </p>
            ) : (
              ""
            )}
            <input
              style={{
                border: error & (email.length === 0) ? "1px solid red" : "none",
              }}
              className="input"
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>{" "}
            {error && email.length === 0 ? (
              <p>
                <label>{text}</label>
              </p>
            ) : (
              ""
            )}
            <input
              style={{
                border: error & (mobile.length === 0) ? "1px solid red" : "none",
              }}
              className="input"
              type="text"
              name="mobile"
              placeholder="Mobile"
              onChange={(e) => setMobile(e.target.value)}
            ></input>{" "}
            {error && mobile.length === 0 ? (
              <p>
                <label>{text}</label>
              </p>
            ) : (
              ""
            )}
            <p className="text5">
              <input
                type="checkbox"
                onChange={(e) => setBox(e.target.checked)}
              ></input>
              <span className="share">
                Share my registration data with Superapp
              </span>
            </p>
            {error && !box ? (
              <p>
                <label>Check this box if you want to proceed</label>
              </p>
            ) : (
              ""
            )}
            <p className="bt-n">
              <button type="submit" className="button" onClick={handleSubmit}>
                SIGN UP
              </button>
            </p>
          </form>

          <p className="text6">
            By clicking on Sign up. you agree to Superapp{" "}
            <span className="green-text">
              Terms and <p>Conditions of Use</p>
            </span>
          </p>
          <p className="text6">
            To learn more about how Superapp collects, uses, shares and{" "}
            <p>
              protects your personal data please head Superapp{" "}
              <span className="green-text">
                Privacy<p>Policy</p>{" "}
              </span>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Register;
