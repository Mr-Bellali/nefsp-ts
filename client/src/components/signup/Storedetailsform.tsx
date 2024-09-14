import { useForm } from "react-hook-form";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import { useState } from 'react';

type StoredetailsformProps = {
  onNext: () => void;
  onPrev: () => void;
};

const StoreTypeOptions = [
  "Restaurant",
  "Cafe",
  "Buffet restaurant",
  "Takeout restaurant",
  "Sushi restaurant",
  "Hotel Bakery",
  "Pastry shop",
  "Supermarket",
  "Beverage shop",
  "Butcher shop",
  "Fruit & vegetable store",
  "Other",
];

const Storedetailsform = ({ onNext, onPrev }: StoredetailsformProps) => {
  const { register, handleSubmit } = useForm();
  const [showAll, setShowAll] = useState(false);

  const onHandleFormSubmit = () => {
    onNext();
  };

  return (
    <>
      <button
        type="button"
        onClick={onPrev}
        className="btn-secondary h-11 rounded-md mr-4"
      >
        <KeyboardArrowLeftRoundedIcon sx={{ fontSize: 40 }} />
      </button>
      <div className="h-[calc(100vh-4rem)] overflow-y-auto px-3 py-10 no-scrollbar"> 
        <form className="space-y-10 flex flex-col justify-around" onSubmit={handleSubmit(onHandleFormSubmit)}>
          
          <div className="flex items-center mb-5">
            <h1 className="text-3xl font-bold tracking-tight">Review your store details</h1>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="storeadress">Store address</label>
            <input
              type="text"
              id="storeadress"
              placeholder="Enter your store's address"
              className="h-11 px-4 border rounded-md"
              {...register("storeaddress")}
            />
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className="text-lg font-semibold">Store type</label>
            <p className="font-light tracking-tight text-gray-600 mb-4">Select the category that best describes your store and the type of food offered</p>
            <div className="space-y-2">
              {StoreTypeOptions.slice(0, showAll ? StoreTypeOptions.length : 5).map((type) => (
                <div key={type} className="flex items-center border border-gray-300 rounded-md p-2 h-[60px]">
                  <input
                    type="radio"
                    id={type}
                    value={type}
                    {...register("storeType")}
                    className="checkbox-custom mr-2"
                  />
                  <label htmlFor={type} className="text-sm">{type}</label>
                </div>
              ))}
            </div>
            {StoreTypeOptions.length > 5 && (
              <button
                type="button"
                onClick={() => setShowAll(!showAll)}
                className="text-blue-500 mt-2"
              >
                {showAll ? 'Show less' : 'Show all'}
              </button>
            )}
          </div>

          <div className="w-full flex flex-col justify-center">
            <div className="w-full h-[1px] bg-gray-400 mb-2" />
            <button type="submit" className="btn-primary h-11 w-full rounded-md">Next</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Storedetailsform;
