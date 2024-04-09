import { useState } from "react";
import DribbleLogo from "../svg/DribbleLogo";
import { useNavigate, useLocation } from "react-router-dom";
import Cards from "./Cards.component";

import CardImg1 from "../assets/onboarding-designer_4x-removebg-preview.png";
import CardImg2 from "../assets/onboarding-hiring_4x-removebg-preview.png";
import CardImg3 from "../assets/onboaring-inspiration_4x-removebg-preview.png";

export default function ThirdStep() {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    ...location.state,
    selectedOptions: [],
  });
  const [isReset, setIsReset] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleBack = () => {
    navigate("/SecondStep", { state: formData });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    const combinedData = { ...formData };
    console.log(combinedData);
    navigate("/FinalStep", { state: combinedData });
  };

  const handleOptionSelect = (option) => {
    setIsFormValid(true);

    setFormData((prevFormData) => {
      const updatedOptions = prevFormData.selectedOptions.includes(option)
        ? prevFormData.selectedOptions.filter((item) => item !== option)
        : [...prevFormData.selectedOptions, option];

      return {
        ...prevFormData,
        selectedOptions: updatedOptions,
      };
    });
  };

  const handleReset = () => {
    setIsReset(true);
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedOptions: [],
    }));
    setIsFormValid(false);
  };

  return (
    <>
      <nav className="relative container mx-auto p-6">
        <div className="flex justify-between md:justify-start items-center">
          <div className="pt-2">
            <DribbleLogo className="h-7" fill="rgb(235, 74, 138)" />
          </div>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg"
            onClick={handleBack}
          >
            <span className=" text-gray-600 text-xl font-bold">&lt;</span>
          </button>
        </div>
      </nav>
      <section className="flex items-center justify-center px-6 font-mona-sans">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center max-w-6xl p-6 pt-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
            What brings you to Dribble?
          </h2>
          <p className="text-gray-600 text-xl text-center mb-3">
            Select the option that best describes you. Don't worry, you can
            explore other options later.
          </p>
          <div className="card-section flex flex-col md:flex-row md:space-x-8 gap-8">
            <Cards
              img={CardImg1}
              headerTxt="I am a designer looking to share my work"
              isReset={isReset}
              onClick={() => handleOptionSelect("designer")}
            />
            <Cards
              img={CardImg2}
              headerTxt="I am looking to hire a Designer"
              isReset={isReset}
              onClick={() => handleOptionSelect("hire")}
            />
            <Cards
              img={CardImg3}
              headerTxt="I am looking for design inspiration"
              isReset={isReset}
              onClick={() => handleOptionSelect("inspiration")}
            />
          </div>
          <div className="bottom-section flex flex-col justify-center items-center text-center mt-10">
            <h2
              className={` ${
                !isFormValid ? "hidden" : "flex-block"
              }  text-xl font-bold mb-4 text-center`}
            >
              Anything else? You can select multiple
            </h2>
            <button
              type="submit"
              className={`h-10 bg-pink-500 hover:bg-pink-600 focus:border-none text-white p-2 rounded-lg px-24 font-bold text-center mb-4 lg:mb-5 mt-3 ${
                !isFormValid ? "disabled:bg-[#F8B9D1]" : ""
              }`}
              disabled={!isFormValid}
            >
              Finish
            </button>
            <button
              type="button"
              className={`inline-flex ${
                !isFormValid ? "hidden" : ""
              } justify-start   rounded-md text-bold px-4  font-bold text-gray-400 hover:bg-gray-50 focus:outline-none 0`}
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
}
