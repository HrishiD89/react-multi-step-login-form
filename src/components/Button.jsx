export default function Button({ buttonTxt, type, className, disabled }) {
  return (
    <button
      type={type}
      className={`h-10 bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-lg px-10 font-bold text-center mb-4 lg:mb-5 mt-4 ${className}`}
      disabled={disabled}
    >
      {buttonTxt}
    </button>
  );
}
