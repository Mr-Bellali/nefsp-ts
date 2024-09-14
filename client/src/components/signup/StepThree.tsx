import { useForm } from "react-hook-form";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';

type StepThreeProps = {
  onPrev: () => void;
};

const StepThree = ({ onPrev }: StepThreeProps) => {
  const { register, handleSubmit } = useForm();

  const onHandleFormSubmit = () => {
    alert("Form Submitted!");
    // Handle form submission
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
      <form className="h-fit space-y-32 py-16 flex flex-col justify-between px-36" onSubmit={handleSubmit(onHandleFormSubmit)}>
        
        <div className="flex flex-col mb-16">
          <h1 className="text-3xl font-bold tracking-tight">Add Your Login Details</h1>
          <p className="text-sm text-gray-600">You&apos;ll need your email address to log into your account.</p>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-lg font-semibold">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            className="h-11 px-4 border rounded-md"
            {...register("email", { required: "Email is required" })}
          />
        </div>

        <div className="w-full flex flex-col justify-center">
          <div className="w-full h-[1px] bg-gray-400 mb-2" />
          <button type="submit" className="btn-primary h-11 w-full rounded-md">Submit</button>
        </div>
      </form>
    </>
  );
};

export default StepThree;
