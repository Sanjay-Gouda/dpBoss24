import { useState } from "react";
import { API_ENDPOINT, API_ENDPOINT_LOCAL } from "../Constants/httpinstance";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({});

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // const isValidEmail = useValidEmail();

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleLoginAPI = async () => {
    setLoading(true);
    const payload = {
      email: loginDetails.email,
      password: loginDetails.password,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    try {
      const res = await fetch(
        `${API_ENDPOINT}/auth/satta/login`,
        requestOptions
      );

      const data = await res.json();
      const token = data.result.accessToken;
      localStorage.setItem("admin_token", token);
      setLoading(false);

      if (data.type === "SUCCESS") {
        navigate("/admin");
        toast.success("Welcome to Dashboard");
      }

      if (data.type == "ERROR") {
        toast.error("Invalid Credentials");
      }
    } catch (err) {
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  const handleSubmit = () => {
    if (loginDetails.email === "") {
      toast.info("Email address can not  be empty");
    } else if (!isValidEmail(loginDetails.email)) {
      toast.error("Invalid email address");
    } else if (loginDetails.password === "") {
      toast.info("Password can not be empty");
    } else {
      handleLoginAPI();
    }
  };

  return (
    <>
      <section className="bg-primary  w-full ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Sign in to DP-Boss account
              </h1>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  onChange={handleChange}
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="example@gmail.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required=""
                />
              </div>

              <button
                onClick={handleSubmit}
                className=" w-full bg-blue-100 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                {loading ? "Loading..." : "Submit"}
                {/* Submit */}
              </button>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer position="top-center" />
    </>
  );
};

export default Login;
