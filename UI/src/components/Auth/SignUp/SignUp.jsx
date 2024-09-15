import { SiFreecodecamp } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from "react";
import axios from 'axios';
import Toast from "../../Toast/Toast";
import { toast } from "react-toastify";

export default function SignUp() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function registerUser(e) {
        e.preventDefault();

        // API Call to Register endpoint
        await axios.post(`${import.meta.env.VITE_API_URL}/api/register`, formData, {withCredentials: true})
            .then((res) => {
                toast.success(res.data.message);
                setTimeout(() => {
                    navigate('/signIn')
                }, 3 * 1000)
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            })
    }

    async function googleSignIn() {
        toast.info("You will be redirected to Google Auth!")
        setTimeout(() => {
            window.location.href = `${import.meta.env.VITE_API_URL}/api/googleAuth`;
        }, 3 * 1000)
    }

    return (
        <section className="bg-gray-100 h-screen overflow-hidden">
            <div className="flex items-center justify-center px-4 py-36">
                <div className="border-4 border-black p-16">
                    <div className="mb-2 flex justify-center">
                        <SiFreecodecamp size={80} />
                    </div>
                    <h2 className="text-center text-3xl font-bold leading-tight text-black">
                        Sign up at freeCodeCamp
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 font-medium ">
                        Already have an account? &nbsp;
                        <NavLink to="/signIn" className="font-semibold text-black">
                            Login
                        </NavLink>
                    </p>
                    <form action="" method="POST" onSubmit={(e) => registerUser(e)} className="mt-8">
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="name" className="text-base font-medium text-gray-900">
                                    Name
                                </label>
                                <div className="mt-2">
                                    <input name="name" value={formData.name} onChange={(e) => handleChange(e)} required={true}
                                        className="flex h-10 w-full border border-black bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-0"
                                        type="text"
                                        placeholder="Name"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="text-base font-medium text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input name="email" value={formData.email} onChange={(e) => handleChange(e)} required={true}
                                        className="flex h-10 w-full border border-black bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-0"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input name="password" value={formData.password} onChange={(e) => handleChange(e)} required={true}
                                        className="flex h-10 w-full border border-black bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-0"
                                        type="password"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="mt-5 inline-flex w-full items-center justify-center border-2 border-orange-400 bg-amber-500 hover:bg-amber-500/80 
                                    px-3.5 py-2 font-semibold leading-7 text-white">
                                    Sign Up
                                </button>
                            </div>
                            <div className="mt-3 space-y-3">
                                <button
                                    type="button" onClick={googleSignIn}
                                    className="relative inline-flex w-full items-center justify-center border border-gray-400 bg-white 
                                            px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 
                                            hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none">
                                    <FcGoogle size={25} className="mr-2" />
                                    Sign up with Google
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )
}