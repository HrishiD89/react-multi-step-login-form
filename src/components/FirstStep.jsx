import DribbleLogog from "../assets/wordmark.svg";
import LeftImage from "../assets/drbbb_4x.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function FirstStep() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    termsAgreement: false,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorContainer = document.getElementById("error-text");
    errorContainer.innerHTML = "";

    if (
      !formData.name ||
      !formData.username ||
      !formData.email ||
      !formData.password
    ) {
      const p = document.createElement("p");
      const text = document.createTextNode("Please fill in all fields");
      p.appendChild(text);
      p.className = "mt-8 text-red-500 text-base font-normal";
      errorContainer.appendChild(p);

      setTimeout(function () {
        errorContainer.removeChild(p);
      }, 3000);
      return;
    }

    if (!formData.termsAgreement) {
      const p = document.createElement("p");
      const text = document.createTextNode("Please agree to the terms");
      p.appendChild(text);
      p.className = "mt-8 text-red-500 text-base font-normal";
      errorContainer.appendChild(p);

      setTimeout(function () {
        errorContainer.removeChild(p);
      }, 5000); // 5000 milliseconds = 5 seconds

      return;
    }

    navigate("/SecondStep", { state: formData });
  };

  return (
    <div className="flex flex-col lg:flex-row w-screen h-screen overflow-x-hidden lg:overflow-y-hidden">
      {/* Left Sidebar */}
      <section className="left-sidebar lg:w-4/12 bg-[#F5D38D] ">
        <div className="left-side-bar-content p-4 pb-0 lg:p-10">
          <a href="#">
            <img className="h-7" src={DribbleLogog} alt="My Happy SVG" />
          </a>
          <h1 className="mt-4 lg:mt-10 text-[#856014] text-2xl lg:text-3xl font-extrabold mb-10 lg:mb-20">
            Discover the world's top <br /> Designers & Creatives.
          </h1>
          <div className="mt-4 lg:mt-8 lg:mb-20">
            <img src={LeftImage} alt="dribble-background" className="w-full" />
          </div>
          <span className=" mb-4 lg:mb-10  mt-4 lg:mt-8">
            Art by{" "}
            <a className="underline" href="https://dribbble.com/tarka">
              Peter Tarka
            </a>
          </span>
        </div>
      </section>
      {/* Right Sidebar */}
      <section className="right-sidebar lg:w-8/12 bg-white p-4 lg:p-8 flex justify-center items-center">
        <p className="font-semibold absolute hidden md:top-10 lg:block right-10 ">
          Already a member? <span className=" text-blue-800">Sign In</span>
        </p>
        <main className="">
          <div className="auth-content font-mona-sans overflow-y-auto p-10 md:p-20">
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 lg:mt-10 mb-4 lg:mb-8">
              Sign up to Dribble
              <span id="error-text"></span>
            </h2>
            <form action="/" onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                  <div className="flex-1">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-bold"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-[#F2F2F3] w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John"
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="username"
                      className="block text-gray-700 font-bold"
                    >
                      Username
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="bg-[#F2F2F3] w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="eg: JohnThunder123"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-[#F2F2F3] w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="account@refero.design"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-gray-700 font-bold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="bg-[#F2F2F3] w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="6+ characters"
                  />
                </div>
              </div>
              <div className="flex space-x-2 mt-4 lg:mt-5">
                <input
                  type="checkbox"
                  name="termsAgreement"
                  id="terms-agreement"
                  checked={formData.termsAgreement}
                  onChange={handleInputChange}
                  className="p-2 w-5 h-5"
                />

                <p className="text-gray-">
                  Creating an account means you are okay with our{" "}
                  <span className="text-violet-600">
                    Terms of <br /> Service, Privacy Policy,
                  </span>{" "}
                  and our default{" "}
                  <span className="text-violet-600">
                    Notification <br /> Settings.
                  </span>
                </p>
              </div>

              <Button buttonTxt="Create Account" />
              <p className="max-w-xs text-xs text-gray-400 ">
                This site is protected by reCAPTCHA and the Google <br />{" "}
                <span className="text-violet-600">Privacy Policy</span> and{" "}
                <span className="text-violet-600">Terms of Service</span> apply.
              </p>
            </form>
          </div>
        </main>
      </section>
    </div>
  );
}

export default FirstStep;
