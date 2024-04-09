import { useState } from "react";
import Profile1 from "../assets/profile1.avif";
import Profile2 from "../assets/profile2.avif";
import Profile3 from "../assets/profile3.avif";
import Profile4 from "../assets/profile4.avif";
import { useNavigate, useLocation } from "react-router-dom";
import DribbleLogo from "../svg/DribbleLogo";

const SecondStep = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    ...location.state,
    selectedImage: null,
    selectedDefaultImage: null,
    location: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prevData) => ({
        ...prevData,
        selectedImage: reader.result,
        selectedDefaultImage: null,
      }));
      validateForm();
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy"; // Explicitly set the drop effect to "copy"
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prevData) => ({
        ...prevData,
        selectedImage: reader.result,
        selectedDefaultImage: null,
      }));
      validateForm();
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageSelection = (imageUrl) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedImage: imageUrl,
      selectedDefaultImage: imageUrl,
    }));
    setIsDropdownOpen(false);
    validateForm();
  };

  const handleLocationChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      location: event.target.value,
    }));
    validateForm();
  };

  const validateForm = () => {
    setIsFormValid(
      formData.selectedImage !== null && formData.location.trim() !== ""
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const combinedData = { ...formData };
    // console.log(combinedData);
    navigate("/ThirdStep", { state: combinedData });
  };

  const handleReset = () => {
    setFormData((prevData) => ({
      ...prevData,
      selectedImage: null,
      selectedDefaultImage: null,
      location: "",
    }));
  };

  return (
    <>
      <nav className="relative container mx-auto p-6">
        <div className="flex justify-start items-center">
          <div className="pt-2">
            <DribbleLogo className="h-7" fill="rgb(235, 74, 138)" />
          </div>
        </div>
      </nav>
      <section
        id="hero"
        className="flex items-center justify-center px-6 font-mona-sans "
      >
        <form onSubmit={handleSubmit} className="flex flex-col max-w-6xl p-6">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Welcome! Let's create your profile
          </h2>
          <p className="text-gray-600 text-center md:text-left mb-8">
            Let others get to know you better! You can do these later
          </p>
          <div id="avatar_container" className="container">
            <h2 className="text-2xl font-bold mb-3 text-center md:text-left">
              Add an avatar
            </h2>
            <div className="p-6 container flex justify-center flex-col md:flex-row  items-center">
              <div
                className="w-44 h-44 rounded-full border-4 border-dashed border-[#DEDFDF] flex items-center justify-center"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                {formData.selectedImage || formData.selectedDefaultImage ? (
                  <img
                    src={
                      formData.selectedImage || formData.selectedDefaultImage
                    }
                    alt="Selected"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400">
                    <i className="p-6 text-3xl fa-solid fa-camera"></i>
                  </span>
                )}
              </div>
              <div className="image_field flex justify-center md:justify-start items-center md:items-start flex-col  space-y-5  md:ml-10">
                <label
                  htmlFor="image-upload"
                  className="mt-4 border-2 block  text-center w-40 border-[#E8E9E9] py-3 px-5 font-bold rounded-lg cursor-pointer"
                >
                  Choose image
                </label>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      className="flex flex-col justify-center items-center md:flex-row w-full  rounded-md text-bold px-4 py-2 font-bold text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                      id="menu-button"
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      Or Choose one of our defaults
                      <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  {isDropdownOpen && (
                    <div className="origin-top-right absolute right-0 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1 flex justify-between " role="none">
                        <a
                          href="#"
                          className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100  hover:text-gray-900 cursor-pointer "
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-0"
                          onClick={() => handleImageSelection(Profile1)}
                        >
                          <img
                            className="w-14 h-14 object-cover"
                            src={Profile1}
                            alt="Image 1"
                          />
                        </a>
                        <a
                          href="#"
                          className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100  hover:text-gray-900 cursor-pointer "
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-1"
                          onClick={() => handleImageSelection(Profile2)}
                        >
                          <img
                            className="w-14 h-14 object-cover"
                            src={Profile2}
                            alt="Image 2"
                          />
                        </a>
                        <a
                          href="#"
                          className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100  hover:text-gray-900 cursor-pointer "
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-2"
                          onClick={() => handleImageSelection(Profile3)}
                        >
                          <img
                            src={Profile3}
                            alt="Image 3"
                            className="w-14 h-14 object-cover"
                          />
                        </a>
                        <a
                          href="#"
                          className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100  hover:text-gray-900 cursor-pointer "
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-3"
                          onClick={() => handleImageSelection(Profile4)}
                        >
                          <img
                            src={Profile4}
                            alt="Image 4"
                            className="w-14 h-14 object-cover"
                          />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-7 flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold mb-3 ">Add your location</h2>
            <input
              className="border-b-2 py-3 text-xl pl-2 w-full"
              type="text"
              name="location"
              id="location"
              value={formData.location}
              placeholder="Enter your location"
              onChange={handleLocationChange}
            />
            <br />
            <button
              type="submit"
              className={`h-10 w-1/2 flex justify-center bg-pink-500 hover:bg-pink-600 focus:border-none text-white p-2 rounded-lg px-24 font-bold text-center mb-4 lg:mb-5 mt-3 ${
                !isFormValid ? "disabled:bg-[#F8B9D1]" : ""
              }`}
              disabled={!isFormValid}
            >
              Next
            </button>

            <button
              type="button"
              className={`inline-flex  ${
                !isFormValid ? "hidden" : ""
              } justify-start w-full pl-16 rounded-md text-bold px-4 py-2 font-bold text-gray-400 hover:bg-gray-50 focus:outline-none 0`}
              id="reset-button"
              aria-haspopup="true"
              onClick={handleReset}
            >
              or Press RETURN
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default SecondStep;
