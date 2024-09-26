import { useForm } from "react-hook-form";

type BuisinessformProps = {
  formData: any;
  updateFormData: (newData: object) => void;
  onNext: () => void;
};

const Buisinessform = ({
  formData,
  updateFormData,
  onNext,
}: BuisinessformProps) => {
  const { register, handleSubmit } = useForm({ defaultValues: formData });

  const onHandleFormSubmit = (data: any) => {
    updateFormData(data);
    onNext();
  };

  return (
    <div>
      <form
        className="h-fit w-[700px] space-y-32 py-16 flex flex-col justify-between "
        onSubmit={handleSubmit(onHandleFormSubmit)}
      >
        <div className="flex flex-col gap-1">
          <div className="w-full flex mb-16">
            <h1 className="text-3xl font-bold tracking-tight">
              Sign up your business
            </h1>
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
          <button type="submit" className="btn-primary h-11 w-full rounded-md">
            Next
          </button>
        </div>
      </form>

      <div className="mt-6 w-full flex flex-row justify-center">
        <p className="mb-5 text-gray-700 font-medium">
          Already have an account?{" "}
          <span className="text-[#F54D42]">
            {" "}
            <a href="/login">login</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Buisinessform;
