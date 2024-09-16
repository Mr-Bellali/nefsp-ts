import { useForm } from "react-hook-form";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import { signUpService } from "@/services/AuthService";

type StepThreeProps = {
  formData: any;
  updateFormData: (newData: object) => void;
  onPrev: () => void;
  setIsEmailSent: (value: boolean) => void; // Add setIsEmailSent prop
};

const StepThree = ({ formData, updateFormData, onPrev, setIsEmailSent }: StepThreeProps) => {
  const { register, handleSubmit } = useForm({ defaultValues: formData });

  const onHandleFormSubmit = async (data: any) => {
    updateFormData(data);  // Save the final step's data before submission
    try {
      const response = await signUpService({ ...formData, ...data }); // send all collected data
      if (response.status === 201) {
        setIsEmailSent(true); // Set state to show SendEmail component
      } else {
        console.error('Unexpected response status:', response.status);
      }
    } catch (e) {
      console.error('Sign-up failed:', e);
    }
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
