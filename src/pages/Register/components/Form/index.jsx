import { EyeSlash } from "phosphor-react";

export function Form() {
  return (
    <div className="w-[100%] h-[100vh] mx-8">
      <div>
        <h2 className="text-4xl font-medium mt-20 mb-16">Register</h2>
        <form>
          <div className="flex flex-col ">
            <label className="text-lg text-logo_desc-500 font-semibold">
              Username
            </label>
            <input
              type="name"
              placeholder="Lucas Gabriel"
              className="border-b-2 border-desc-700 focus:outline-none focus:ring-0 text-logo_color-500 placeholder:text-desc-700 focus:border-primary-300 transition-colors"
            />
          </div>
          <div className="flex flex-col mt-12">
            <label className="text-lg text-logo_desc-500 font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="example@placeholder.com"
              className="border-b-2 border-desc-700 focus:outline-none focus:ring-0 text-logo_color-500 placeholder:text-desc-700 focus:border-primary-300 transition-colors"
            />
          </div>
          <div className="flex flex-col mt-12 ">
            <label className="text-lg text-logo_desc-500 font-semibold">
              Password
            </label>
            <div className="flex items-center">
              <input
                type="password"
                placeholder="***********"
                className="border-b-2 border-desc-700 focus:outline-none focus:ring-0 text-logo_color-500 placeholder:text-desc-700 focus:border-primary-300 transition-colors flex flex-1"
              />
              <EyeSlash size={24} color="#aaa" />
            </div>
          </div>
          <div className="flex flex-col mt-12 ">
            <label className="text-lg text-logo_desc-500 font-semibold">
              Repeat Password
            </label>
            <div className="flex items-center">
              <input
                type="password"
                placeholder="***********"
                className="border-b-2 border-desc-700 focus:outline-none focus:ring-0 text-desc-500 placeholder:text-desc-700 focus:border-primary-300 transition-colors flex flex-1"
              />
              <EyeSlash size={24} color="#aaa" />
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <a
              href="/login"
              className="text-primary-500 underline hover:text-primary-700 transition-colors"
            >
              I already have an account
            </a>
          </div>
          <button className="mt-8 py-5 rounded text-[#FFF] font-bold bg-primary-500 min-w-[400px] min-h-[40px] hover:bg-primary-700 transition-colors">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
