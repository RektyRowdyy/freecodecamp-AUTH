import { SiFreecodecamp } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from 'react-router-dom'

export default function SignUp() {
    return (
        <section className="bg-gray-100 h-screen overflow-hidden">
            <div className="flex items-center justify-center px-4 py-44">
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
                    <form action="#" method="POST" className="mt-8">
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="" className="text-base font-medium text-gray-900">
                                    Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full border border-black bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-0"
                                        type="text"
                                        placeholder="Name"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="" className="text-base font-medium text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full border border-black bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-0"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="" className="text-base font-medium text-gray-900">
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full border border-black bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-0"
                                        type="password"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="mt-5 inline-flex w-full items-center justify-center border-2 border-orange-400 bg-amber-500 hover:bg-amber-500/80 
                                    px-3.5 py-2 font-semibold leading-7 text-white">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )
}