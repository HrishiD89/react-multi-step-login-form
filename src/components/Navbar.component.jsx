import DribbleLogo from "../svg/DribbleLogo";
import Button from "./Button";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = ({ img1, img2 }) => {
  return (
    <nav className=" mx-auto font-mona-sans border-b-2 border-gray-00 py-3">
      <div className="flex justify-start items-center">
        <a href="/">
          <div className="pt-2" id="nav-logo">
            <DribbleLogo className="h-7" fill="black" />
          </div>
        </a>
        <div
          id="nav-items"
          className="w-full  flex-row justify-evenly  items-center  flex"
        >
          <div className="nav-links w-full ">
            <ul className=" font-bold text-gray-500 cursor-pointer hidden xl:flex space-x-10">
              <li>Inspiration</li>
              <li>Find Work</li>
              <li>Learn Design</li>
              <li>Go Pro</li>
              <li>Hire Developer</li>
            </ul>
          </div>
          <div className="nav-right   justify-center items-center gap-8 text-center hidden md:flex">
            <div className="search-input flex bg-[#F2F4F5] rounded-md ">
              <div className="search-icon px-3 flex items-center">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="search"
                className="bg-[#F2F4F5] flex-1 py-2 pr-3 outline-none rounded-md cursor-pointer"
              />
            </div>

            <div className="bag-icon">
              <WorkHistoryIcon className=" text-gray-400 cursor-pointer" />
            </div>

            <div className="avatar">
              <Avatar src={img1 || img2} />
            </div>
            <Button className=" mr-8 cursor-pointer" buttonTxt="Upload" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
