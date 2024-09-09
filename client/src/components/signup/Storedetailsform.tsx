"use client";
import { useForm } from "react-hook-form";

import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';



type TFormValues = {
  storename: string;
};

const Storedetailsform = () => {
  const { register, handleSubmit } = useForm<TFormValues>();
  const onHandleFormSubmit = (data: TFormValues) => {
    console.log(data);
  };
  return (
    <form
      className=" h-fit space-y-32 py-16  flex flex-col justify-around px-36"
      onSubmit={handleSubmit(onHandleFormSubmit)}
    >
      <div className="flex flex-col  gap-1">
        <div className="w-full flex  mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Review your store details</h1>
        </div>

        <label htmlFor="storename">Store adress</label>
        <input
          type="text"
          id="storeadress"
          placeholder="enter your store's adress"
          className="h-11 px-4 border rounded-md"
          {...register("storename")}
        />
      </div>
      
      <div className="w-full flex flex-col justify-center">
      <div className="w-full flex flex-col ">
        <p className="text-sm text-center tracking-tighter text-gray-400">By proceeding, you agree to NESFP's <a href="#">Privacy Policy</a> and <a href="#">Terms and Conditions</a></p>
        <p className="text-md text-center tracking-tighter text-gray-500 font-light">Already have a store account?<a href="/login" className="font-semibold text-[#F54D42]">Log in</a></p>
      </div>
      <div className="w-full h-[1px] bg-gray-400 mb-2">

      </div>
        <button className="btn-primary h-11 w-full rounded-md ">
          Next
        </button>
      </div>
      
    </form>
  );
};

export default Storedetailsform;
