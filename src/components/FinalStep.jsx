import { useLocation } from "react-router-dom";
import Nav from "./Navbar.component";
import MailImg from "../assets/mailimg.png";
import DribbleLogo from "../svg/DribbleLogo";
import DribbleIcon from "../svg/DribbleIcon";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { useState } from "react";

export default function FinalStep() {
  const [dataShown, setDataShown] = useState(false);
  const location = useLocation();
  const formData = location.state;
  const UserImg1 = formData.selectedImage;
  const selectedDefaultImage = formData.selectedImage;

  const handleshowFormData = () => {
    setDataShown(!dataShown);
  };

  const trimValue = (value, maxLength = 50) => {
    if (typeof value === "string" && value.length > maxLength) {
      return `${value.substring(0, maxLength)}...`;
    }
    return value;
  };

  return (
    <>
      <Nav img1={UserImg1} img2={selectedDefaultImage} />
      {/* hero section */}
      <section className="flex items-center justify-center px-6 font-mona-sans my-16">
        <div className="flex flex-col justify-center items-center max-w-6xl p-6 pt-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-center">
            Please verify your mail
          </h1>
          <div className=" w-40 h-40 flex justify-center items-center">
            <img src={MailImg} className="w-full object-cover" alt="" />
          </div>
          <div className="text-content text-gray-500 text-center">
            <p>
              Please verify your email address.We've sent a confirmation email
              to:
            </p>{" "}
            <br />
            <span className=" font-bold mt-2 text-black">
              {formData.email}
            </span>{" "}
            <br />
            <br />
            <p>
              Click the confirmation link in that email to begin using Dribble.
            </p>{" "}
            <br />
            <p>
              Didn't receive the email? Check your spam folder,it may have been
              caught by a filter.If <br /> you didn't see it ,you can{" "}
              <span className=" text-dribblePink font-semibold">
                resend the confirmation mail.
              </span>
            </p>{" "}
            <br />
            <p>
              Wrong email address?{" "}
              <span className=" text-dribblePink font-semibold">
                Change it{" "}
              </span>
            </p>
            <br />
            <hr />
            <br />
            <p>
              I have not used any Backend for now. You can click the{" "}
              <span className="border-b-2">"View Data"</span>
              button below to see the user information. <br />
              <button
                onClick={handleshowFormData}
                className="h-10 bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-lg px-10 font-bold text-center mb-4 lg:mb-5 mt-4"
              >
                {dataShown ? "Hide Form Data" : "Show Form Data"}
              </button>
            </p>
          </div>
        </div>
      </section>
      <div className=" flex justify-center mb-14  text-left  w-full ">
        {dataShown && (
          <div
            id="formData"
            className="bg-[#292D34] p-10 rounded-lg shadow-xl shadow-gray-400"
          >
            {Object.entries(formData).map(([key, value]) => (
              <p key={key} className="">
                <strong className="text-[#D76870]">{key}:</strong>{" "}
                <span className="text-[#91B873]">
                  {trimValue(value + " ", 30)}
                </span>
              </p>
            ))}
          </div>
        )}
      </div>
      {/* footer */}
      <footer className="relative container mx-auto p-6 font-mona-sans text-[14px] text-gray-700 bg-gray-100  ">
        <div className="flex-col md:flex-row p-6 items-center md:items-start w-full flex gap-10 mt-10">
          <div id="left-part" className="dribble-info w-full md:w-96">
            <div className="pt-2 flex justify-center md:justify-start ">
              <DribbleLogo
                className="ml-[-54px] h-7 "
                fill="rgb(235, 74, 138)"
              />
            </div>
            <p className="mt-5 hidden md:block">
              Dribbble is the world's leading <br />
              community for creatives to share, grow,
              <br /> and get hired.
            </p>
            <div className="contacts flex gap-3 mt-5">
              <DribbleIcon color="#3D3F4D" className="w-6 h-6" />
              <XIcon />
              <FacebookIcon />
              <InstagramIcon />
              <PinterestIcon />
            </div>
          </div>

          <div id="fordesigner" className="text-left w-full">
            <p className="font-bold ">For Designer</p>
            <ul className="flex-col hidden md:flex gap-4 justify-center my-4">
              <li>Go Pro!</li>
              <li>Explore design work</li>
              <li>Design blog</li>
              <li>Overtime podcast</li>
              <li>Playoffs</li>
              <li>Weekly Warm-Up</li>
              <li>Refer a Friend</li>
              <li>Code of conduct</li>
            </ul>
          </div>
          {/* hire desinger */}
          <div id="hiredesigner" className="text-left w-full">
            <p className="font-bold ">Hire designers</p>
            <ul className="hidden md:flex flex-col gap-4 justify-center my-4">
              <li>Post a job opening</li>
              <li>Post a freelance project</li>
              <li>Search for designers</li> <br />
            </ul>
            <p className="font-bold ">Brands</p>
            <ul className="hidden md:flex flex-col gap-4 justify-center my-4">
              <li>Advertise with us</li>
            </ul>
          </div>
          {/* company */}
          <div id="company" className="text-left w-full">
            <p className="font-bold ">Company</p>
            <ul className="hidden md:flex flex-col gap-4 justify-center my-4">
              <li>About</li>
              <li>Careers</li>
              <li>Support</li>
              <li>Overtime podcast</li>
              <li>Media kit</li>
              <li>Testimonials</li>
              <li>API</li>
              <li>Terms of service</li>
              <li>Privacy policy</li>
              <li>Cookie policy</li>
            </ul>
          </div>
          {/* directories */}
          <div id="directories" className="text-left w-full">
            <p className="font-bold ">Directories</p>
            <ul className="hidden md:flex flex-col gap-4 justify-center my-4">
              <li>Design jobs</li>
              <li>Design jobs</li>
              <li>Freelance designers for hire</li>
              <li>Overtime podcast</li>
              <li>Tags</li>
              <li>Places</li>
            </ul>
            <p className="font-bold ">Design assets</p>
            <ul className="hidden md:flex flex-col gap-4 justify-center my-4">
              <li>Dribbble Marketplace</li>
              <li>Creative Market</li>
              <li>Fontspring</li>
              <li>Font Squirrel</li>
            </ul>
          </div>
          {/* design resources */}
          <div id="design resources" className="text-left w-full">
            <p className="font-bold text-left">Design Resources</p>
            <ul className="hidden md:flex flex-col gap-4 justify-center my-4">
              <li>Freelancing</li>
              <li>Design Hiring</li>
              <li>Design Portfolio</li>
              <li>Design Education</li>
              <li>Creative Process</li>
              <li>Design Industry Trends</li>
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-gray-00 flex items-center justify-between mx-5">
          <div className="py-10">
            <h1>
              <span>&copy;</span> 2023 Dribble.All rights reserved.
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <p>
              <span className="font-bold">20,501,853</span> shots dribbled
            </p>
            <div className="ml-2 w-6 h-6 rounded-full bg-[#E84887]">
              <DribbleIcon className="w-6 h-6" color="#C32561" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
