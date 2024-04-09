import { useEffect, useState } from "react";

export default function Cards({ headerTxt, onClick, img, isReset }) {
  useEffect(() => {
    if (isReset) {
      setIsSelected(false);
    }
  }, [isReset]);

  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    setIsSelected(!isSelected);
    onClick();
  };
  return (
    <div
      onClick={handleClick}
      className={` ${
        isSelected ? "border-pink-500 mt-24 " : "border-gray-00 mt-0"
      } cursor-pointer relative   w-80 h-80  border-2  rounded-xl justify-center mt-0 md:mt-16 items-center flex flex-col  transition-all duration-300`}
    >
      <div
        className={` ${
          isSelected ? "relative bottom-14" : ""
        } flex flex-col justify-center items-center  transition-all duration-300`}
      >
        <img src={img} className={`p-6 object-cover`} alt="" />
        <div className="px-6 text-center">
          <h1 className="text-xl font-bold">{headerTxt}</h1>
          <br />
          <p
            className={` ${
              isSelected ? "block" : "hidden"
            } text-gray-500 mb-1 transition-all duration-300`}
          >
            With over 7 million shots from a vast community of designers,
            Dribbble is the leading source for design inspiration
          </p>
        </div>
        <div
          className="mb-6 w-8 h-8 border rounded-full  "
          name="card1"
          id="card1"
        >
          {isSelected ? (
            <svg
              className="p-1 text-white bg-pink-500 rounded-full "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
