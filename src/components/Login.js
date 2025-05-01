import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { vercelURL } from "../utils/constant";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const makeLoginApiCall = async () => {
    try {
      const res = await fetch(vercelURL + "login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailId,
          password,
        }),
        credentials: "include",
      });

      const data = await res.json(); // Convert response to JSON
      //   console.log(data); // Log the server response

      dispatch(addUser(data));
      navigate("/");
    } catch (err) {
      setError(err?.response?.data);
      // console.log(err);
    }
  };

  const makeSignUpCall = async () => {
    try {
      const res = await fetch(vercelURL + "signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          emailId,
          password,
        }),
        credentials: "include",
      });

      const data = await res.json(); // Convert response to JSON
      console.log(data); // Log the server response

      dispatch(addUser(data));
      navigate("/editprofile");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className=" justify-center mt-4">
        <div className="flex flex-col shadow-xl">
          <div className="grid gap-3 m-3">
            <h2 className="font-bold text-[3rem] text-center">
              {" "}
              {isLoginForm ? "Login" : "Sign Up"}
            </h2>

            {!isLoginForm && (
              <>
                <label className="flex w-full mb-2">
                  <div className="w-6/12">
                    <span className="text-[2rem] font-bold">First Name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here First Name"
                    className="w-6/12 p-2 border-2 border-black font-bold text-[2rem]"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
                <label className="flex w-full mb-2">
                  <div className="w-6/12">
                    <span className="text-[2rem] font-bold">Last Name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here Last Name"
                    className="w-6/12 p-2 border-2 border-black font-bold text-[2rem]"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>
              </>
            )}

            <label className="flex w-full mb-2">
              <div className="w-6/12">
                <span className="text-[2rem] font-bold">Email Id</span>
              </div>
              <input
                type="text"
                placeholder="Type here Email Id"
                className="w-6/12 p-2 border-2 border-black font-bold text-[2rem]"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>
            <label className="flex w-full mb-2">
              <div className="w-6/12">
                <span className="text-[2rem] font-bold">Password</span>
              </div>
              <input
                type="text"
                placeholder="Type here Password"
                className="w-6/12 p-2 border-2 border-black font-bold text-[2rem]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <p className="text-red-600">{Error}</p>
            <div className="text-center">
              <button
                className="font-bold text-[2rem] text-white p-4 rounded-xl bg-red-600"
                onClick={isLoginForm ? makeLoginApiCall : makeSignUpCall}
              >
                {isLoginForm ? "Login" : "Sign Up"}
              </button>
            </div>
            <h1 className="text-center">
              {isLoginForm ? (
                <>
                  Are You New User ?{" "}
                  <span
                    className="text-red-600"
                    onClick={() => setIsLoginForm(false)}
                  >
                    Sign Up
                  </span>
                </>
              ) : (
                <p className="text-[1.5rem]">
                  Already have Account here{" "}
                  <span
                    className="text-red-600"
                    onClick={() => setIsLoginForm(true)}
                  >
                    Login !
                  </span>
                </p>
              )}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
