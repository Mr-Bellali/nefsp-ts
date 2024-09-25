import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signUpService } from '@/services/AuthService'; // Adjust path to your service

type StepThreeProps = {
  formData: any;
  updateFormData: (newData: object) => void;
  onPrev: () => void;
  setIsEmailSent: (value: boolean) => void; // Add setIsEmailSent prop
};

const StepThree = ({ formData, updateFormData, onPrev, setIsEmailSent }: StepThreeProps) => {
  const { register, handleSubmit } = useForm({ defaultValues: formData });
  const [loading, setLoading] = useState(false); // Loading state

  const onHandleFormSubmit = async (data: any) => {
    updateFormData(data); // Save the current step's data
    setLoading(true); // Set loading to true while the API call is in progress

    try {
      const response = await signUpService({ ...formData, ...data }); // Send all form data to backend

      if (response) {
        setIsEmailSent(true); // Transition to SendEmail component
        toast.success('Account created successfully. Check your email for login details.'); // Show success toast
      }
    } catch (e: any) {
      if (e.message === 'Email already exists') {
        toast.error('Email already exists! Please use a different email.'); // Show error toast if email exists
      } else {
        toast.error('Sign-up failed. Please try again.'); // Show generic error toast
      }
    } finally {
      setLoading(false); // Reset loading state after response
    }
  };

  return (
    <>
      <button type="button" onClick={onPrev} className="btn-secondary h-11 rounded-md mr-4">
        Back
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
            {...register('email', { required: 'Email is required' })}
          />
        </div>

        <div className="w-full flex flex-col justify-center">
          <div className="w-full h-[1px] bg-gray-400 mb-2" />
          <button type="submit" className="btn-primary h-11 w-full rounded-md">
            {loading ? 'Loading...' : 'Submit'} {/* Show 'Loading...' while API call is in progress */}
          </button>
        </div>
      </form>
    </>
  );
};

export default StepThree;
