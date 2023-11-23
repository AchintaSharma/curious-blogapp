import { IoMdMail } from "react-icons/io";
import { IoMdUnlock } from "react-icons/io";
import { IoLogoGoogle } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";

const SignIn = () => {
  return (
    <>
    <div className=" max-w-screen-xl sm:mx-4 md:mx-8 lg:mx-16 xl:mx-24  mx-auto flex justify-center flex-col py-4">
        <div className=" max-w-screen-md  py-4 px-12 mx-auto  rounded-xl border border-gray-300  shadow-lg bg-white">
          <h1 className=" font-semibold text-4xl text-center mt-8">
            Welcome Back
          </h1>

          {/* form container */}
          <div className=" min-w-[320px] mt-12 mb-4">
            <form>
              {/* email input field with icon */}
              <div className=" relative flex items-stretched mb-4 shadow-md">
                <input
                  type="email"
                  placeholder="Enter Email..."
                  className=" w-full py-3 pl-10 pr-4 border rounded-lg bg-transparent border-gray-300"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <IoMdMail />
                </div>
              </div>
              {/* enter password field with icon */}
              <div className=" relative flex items-stretched mb-4 shadow-md">
                <input
                  type="password"
                  placeholder="Enter password..."
                  className=" w-full py-3 pl-10 pr-4 border rounded-lg bg-transparent border-gray-300"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <IoMdUnlock />
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer">
                  <IoEyeOffSharp />
                </div>
              </div>

              {/* confirm password field with icon
              <div className=" relative flex items-stretched shadow-md">
                <input
                  type="password"
                  placeholder="Enter password..."
                  className=" w-full py-3 pl-10 pr-4 border rounded-lg bg-transparent border-gray-300"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <IoMdUnlock />
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <IoEyeOffSharp />
                </div>
              </div> */}

              {/* signIn button */}
              <button
                type="submit"
                className=" w-full py-4 mt-6 text-white  bg-blue-500 hover:bg-blue-900 rounded-lg font-bold shadow-md"
              >
                Sign In
              </button>
            </form>
          </div>

          {/* Or option */}
          <h2 className=" text-center font-semibold text-xl">Or</h2>

          {/* Signup with google button */}
          <button
            type="submit"
            className=" w-full py-3 mt-4 text-white  bg-blue-500 rounded-lg hover:bg-blue-900 font-bold relative shadow-md"
          >
            <IoLogoGoogle className=" absolute left-0 top-1/2 transform -translate-y-1/2 ml-4 text-2xl" />
            Sign In with Google
          </button>

          <p className=" text-center text-sm my-3">
            Don't have an account?
            <a
              href="/login"
              className=" text-blue-500 font-bold shadow-md ml-2 hover:font-blue-900"
            >
              SignUp
            </a>
          </p>
        </div>

        {/* footer
        <div className=" max-w-screen-sm  mx-auto mt-2 font-medium">
          <p className=" text-center">
            Click “Sign Up” to agree to Medium’s Terms of Service and
            acknowledge that Medium’s Privacy Policy applies to you.
          </p>
        </div> */}

      </div>

    </>
    
  )
}

export default SignIn