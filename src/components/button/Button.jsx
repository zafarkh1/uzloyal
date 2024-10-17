const Button = () => {
  return (
    <div className={`inline-block border text-center mt-8 border-[#cdb091]`}>
      <button
        type="submit"
        className={`w-full -translate-x-2 translate-y-[6px] text py-4 px-10 
          border text-[#cdb091] border-[#cdb091] hover:bg-[#cdb091] hover:text-white transition-all duration-500`}
      >
        Submit Now
      </button>
    </div>
  );
};

export default Button;
