import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../lib/firebase";
import { Link } from "react-router-dom";
import { AuthContext } from "../lib/context/auth-context";

export function LoginInputs() {
    const [formField, setFormField] = useState({
        email: "",
        password: "",
    });
    const { currentUser } = useContext(AuthContext)
    const { email, password } = formField;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormField((prev) => ({ ...prev, [name]: value }));
    };

    const navigate = useNavigate();


    useEffect(() => {
       
        document.body.classList.add('overflow-hidden');

       
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    useEffect(() => {
        if (currentUser) {
            navigate("/")
        }


    }, []);

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredentials = await signInUser(email, password);
            if (userCredentials) ({ email: "", password: "" });
            navigate("/");
        } catch (error) {
            console.log("error login", error);
        }
    };

    return (
        <div className="w-full h-screen  ">
            <img
                className="hidden sm:block absolute w-full h-full object-cover  "
                src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                alt="/"
            />
            <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
            <div className="fixed w-full px-4 py-24 z-50">
                <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
                    <div className="max-w-[320px] mx-auto py-16">
                        <h1 className="text-3xl font-bold">Sign In</h1>
                        
                        <form
                            onSubmit={handleSubmit}
                            className="w-full flex flex-col py-4"
                        >
                            <input
                                onChange={handleChange}
                                className="p-3 my-2 bg-gray-700 rouded"
                                type="email"
                                placeholder="Email"
                                autoComplete="email"
                                name="email"
                                value={email}
                            />
                            <input
                                onChange={handleChange}
                                className="p-3 my-2 bg-gray-700 rouded"
                                type="password"
                                placeholder="Password"
                                autoComplete="current-password"
                                name="password"
                                value={password}
                            />
                            <button
                                className="bg-red-600 py-3 my-6 rounded font-bold"
                                type="submit"
                            >
                                Login
                            </button>
                            <div className="flex justify-between items-center text-sm text-gray-600">
                                <p>
                                    <input className="mr-2" type="checkbox" />
                                    Remember me
                                </p>
                                <p>Need Help?</p>
                            </div>
                            <p className="py-8">
                                <span className="text-gray-600">
                                    New to Netflix?
                                </span>{" "}
                                <Link to="/signup">Sign Up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
