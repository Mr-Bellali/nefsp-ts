import Image from "next/image";
import Logo from "../../../public/logo.png";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-row bg-white">
      {/* Red section, hidden on tablet and phone */}
      <div className="hidden md:flex w-2/5 bg-[#F54D42] flex-col justify-center items-center">
        <div className="w-full h-[100px] px-5 flex">
          <Image src={Logo} alt="logo" width={100} height={100} />
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center text-6xl font-semibold text-white pb-40">
          <h1>LOGIN INTO</h1>
          <h1 className="tracking-tighter">YOUR STORE</h1>
        </div>
      </div>

      {/* login part */}
      <div className="w-full md:w-3/5  h-screen items-center justify-center">
        <div className="container mx-auto">
          <div className="w-full h-[60px] px-5 md:hidden flex items-center justify-center">
            <Image src={Logo} alt="logo" width={80} height={80} />
          </div>

          {/* Red section with login form */}
          <div className="w-full flex flex-col justify-between items-center  ">
            <div className="w-full h-screen flex justify-start items-center flex-col pt-10">
              <div className="w-full flex items-center pl-8">
                <h2 className="text-3xl font-bold mb-6">
                  Login to your account
                </h2>
              </div>
              <form className="w-full p-8 flex flex-col justify-between  h-[100%] ">
                <div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <a
                      className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                      href="#"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <div>
                    <p className="mb-1 text-gray-700 font-medium">Don &apos;t have an account? <span className="text-[#F54D42]">Sign Up</span></p>
                    <div className="w-full h-[1px] bg-gray-400 mb-2"></div>
                  <button
                    className="btn-primary sm:mb-10 md:mb-[-30px] w-full h-[40px] rounded text-xl font-semibold"
                    type="button"
                  >
                    LOG IN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
