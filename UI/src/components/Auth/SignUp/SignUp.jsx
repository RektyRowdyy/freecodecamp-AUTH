import { SiFreecodecamp } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from 'react-router-dom'

export default function SignUp() {
    return (
        <section className="bg-gray-100 h-screen">
            <div className="flex items-center justify-center px-4 py-32">
                <div className="border-4 border-black p-16">
                    <div className="mb-2 flex justify-center">
                        <SiFreecodecamp size={80} />
                    </div>
                    <h2 className="text-center text-3xl font-bold leading-tight text-black">
                        Create Account at freeCodeCamp
                    </h2>
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
                                    className="mt-5 inline-flex w-full items-center justify-center bg-black px-3.5 py-2.5 font-semibold leading-7 
                                            text-white hover:bg-black/80"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                        <div className="mt-3 space-y-3">
                            <button
                                type="button"
                                className="relative inline-flex w-full items-center justify-center border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                            >
                                <FcGoogle size={25} className="mr-2" />
                                Sign up with Google
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </section>

    )
}