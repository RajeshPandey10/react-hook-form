import { useForm } from "react-hook-form"
import { EMAIL_REGEX } from "../../constants/regex"


const LoginForm = () => {

    const {register,handleSubmit,formState} = useForm({
        mode:"all",
        
    })
    const {errors} = formState
    // const{name,ref,onChange,onBlur}=register("email")
    const onSubmit = (data)=>{
        console.log("data submitter successfully",data)
    }
  return (
    <>


 <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-6 sm:p-8">
  <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Login</h2>
  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
   
    {/* Email */}
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
      <input type="email" id="email" {...register("email",{
        required:{value:true,message:"Email is required"},
        pattern:{value:EMAIL_REGEX,message:"Invalid email"}
      })}  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
    </div>
    <p className="text-sm text-red-600 mt-2">{errors.email?.message}</p>
    {/* Password */}
    <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
      <input type="password" id="password" {...register("password",{
        required:{value:true,message:"password is required"},
        minLength:{value:6,message:"at least 6 charecters required"}
      })}  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
    </div>
        <p className="text-sm text-red-600 mt-2">{errors.password?.message}</p>
   
    {/* Submit Button */}
    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200">
     Login
    </button>
    {/* Login Redirect */}
    <p className="text-center text-sm text-gray-600 mt-4">
      do not have an account?
      <a href="/login" className="text-blue-600 font-medium hover:underline">Register</a>
    </p>
  </form>
</div>

    </>
  )
}

export default LoginForm