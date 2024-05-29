import { useForm, SubmitHandler } from "react-hook-form"
import useAuth from "../../hook/useAuth";


type Inputs = {
    email : string;
    password : string;

}

export const Form = () => {
    const {register, reset, handleSubmit} = useForm<Inputs>()

    const {loginUser} = useAuth()


    const onSubmit:SubmitHandler<Inputs> = (data:Inputs)=>{
        loginUser
        loginUser({email: data.email, password: data.password})
        reset(
            {
                email :"",
                password : ""
            }
        )
    }

  return (
   <section className="py-5 px-10 w-full flex flex-col gap-5 ">
        <img src="./user.svg" alt="user" className="w-20 mx-auto bg-gray-500 rounded-full" />

        <form className="w-full md:w-2/3 bg-gray-400 p-1 mx-auto flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>

            <div>
                <label htmlFor="email">
                    Email
                </label>
                <input {...register("email")} type="email" id="email" />
            </div>
            
            <div>
                <label htmlFor="password">Password</label>
                <input {...register("password")} type="password"  id="password"/>
            </div>
            <input type="submit" />
        </form>
   </section>
  )
}