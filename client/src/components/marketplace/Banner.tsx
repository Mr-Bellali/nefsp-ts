import ErrorIcon from "@mui/icons-material/Error";

const Banner = () => {
  return (
    <div className="w-full h-auto bg-[#12B7F038] flex flex-row rounded-lg overflow-hidden">
      <div className="w-[20%] h-[250px]  p-6 flex justify-center items-center border-r-2 border-[#235461]">
        <ErrorIcon sx={{ ml: 2, fontSize: "150px", color: "#235461" }} />
      </div>
      <div className="w-full h-[250px] flex flex-col text-center justify-center items-center">
        <div className="w-[85%] h-full  flex flex-col text-center justify-center items-center">
          <p className="text-2xl font-bold text-[#235461] mb-10">
            UNEP Report: Moroccan Households Waste 4.2 Million Tons of Food
            Yearly
          </p>
          <div className="flex flex-row items-start justify-start w-[90%]">
            <p className="text-xl font-medium text-[#235461]">
              According to Inger Andersen, Executive Director of the United
              Nations Environment Programme (UNEP), millions of people may go
              hungry as a result of food waste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
