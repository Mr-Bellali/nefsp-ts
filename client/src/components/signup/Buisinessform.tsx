import { useForm } from "react-hook-form";

type BuisinessformProps = {
  onNext: () => void;
};

const Buisinessform = ({ onNext }: BuisinessformProps) => {
  const { register, handleSubmit } = useForm();

  const onHandleFormSubmit = () => {
    onNext();
  };

  return (
    <form className="h-fit space-y-32 py-16 flex flex-col justify-between px-36" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <div className="flex flex-col gap-1">
        <div className="w-full flex mb-16">
          <h1 className="text-3xl font-bold tracking-tight">Sign up your business</h1>
        </div>

        <label htmlFor="storename">Store name</label>
        <input
          type="text"
          id="storename"
          placeholder="Enter your store's name"
          className="h-11 px-4 border rounded-md"
          {...register("storename")}
        />
      </div>

      <div className="w-full flex flex-col justify-center">
        <div className="w-full flex flex-col mb-5">
          <p className="text-sm text-center tracking-tighter text-gray-400">
            By proceeding, you agree to NESFP&apos;s <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms and Conditions</a>
          </p>
          <p className="text-md text-center tracking-tighter text-gray-500 font-light">
            Already have a store account? <a href="/login" className="font-semibold text-[#F54D42]">Log in</a>
          </p>
        </div>

        <div className="w-full h-[1px] bg-gray-400 mb-2" />

        <button type="submit" className="btn-primary h-11 w-full rounded-md">Next</button>
      </div>
    </form>
  );
};

export default Buisinessform;
