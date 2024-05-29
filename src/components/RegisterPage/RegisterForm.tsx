import { Fragment } from "react";
import Inputs from "../shared/Inputs";
import { useForm, SubmitHandler } from "react-hook-form";
import Buttons from "../shared/Buttons";
import useAuth from "../../hook/useAuth";

type Inputs = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    gender: 'unknown' | 'male' | 'female' | 'other';
}

export const RegisterForm = () => {
    const { register, reset, handleSubmit } = useForm<Inputs>();

    const { createUser } = useAuth();

    const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
        createUser(data);

        reset({
            firstName : "",
            lastName:"",
            email :"",
            password : "",
            gender : "unknown",
        })
    }

    return (
        <Fragment>
            <section className="py-5 px-10 w-full flex flex-col gap-5">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-2/3 bg-gray-400 p-1 mx-auto flex flex-col gap-3">
                    <Inputs 
                        label="First Name" 
                        name="firstName" 
                        type="text" 
                        register={register("firstName", { required: "First Name is required" })} 
                    />
                    <Inputs 
                        label="Last Name" 
                        name="lastName" 
                        type="text" 
                        register={register("lastName", { required: "Last Name is required" })} 
                    />
                    <Inputs 
                        label="Email" 
                        name="email" 
                        type="email" 
                        register={register("email", { required: "Email is required" })} 
                    />
                    <Inputs 
                        label="Password" 
                        name="password" 
                        type="password" 
                        register={register("password", { required: "Password is required" })} 
                    />
                    <label htmlFor="gender">Gender</label>
                    <select id="gender"  {...register("gender", { required: "Gender is required" })}>
                        <option value="unknown">Unknown</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>

                    <Buttons title="Submit" type="submit" />
                </form>
            </section>
        </Fragment>
    );
};
