import { Link } from "react-router-dom";
import { useState } from "react";

export const NavBar = () => {
    const [menu, setMenu] = useState<boolean>(false);
    return (
        <header className="flex justify-between bg-white shadow-lg py-5 px-10 mb-10 items-center relative">
            <h1 className="drop-shadow-3xl text-4xl font-medium text-first-color">
                <Link to="/">Boking<span className="text-firs-color">App</span></Link>
            </h1>
           
           <p className="md:hidden" onClick={()=> setMenu(!menu)}>menu</p>

            <nav className={`md:flex md:gap-5 md:z-0 mt-2 md:mt-0  md:top-0 md:bg-none md:shadow-none md:right-0 right-10 md:translate-y-0 md:relative transition-all duration-500 ease-linear -translate-y-[500px] absolute  top-full ${menu ? "translate-y-0 right-10 bg-white shadow-lg mt-2" : "-z-10 -translate-y-[500px]"}`}>
                <ul className="flex md:flex-row  flex-col  gap-10  mt-2 md:mt-0 ">
                    <li className="">
                        <Link to="/reservation">Reservation</Link>
                    </li>
                    <li >
                        <Link to="/register">Register</Link>
                    </li>
                    <li >
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
