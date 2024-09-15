import React from 'react'
import { SiFreecodecamp } from "react-icons/si";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../contexts/auth';
import axios from 'axios';
import { toast } from 'react-toastify';

export function NavBar() {

    const navigate = useNavigate();

    const { isLoggedIn, checkIsLoggedIn } = useAuth();

    function handleSignIn() {
        navigate('signIn');
    }

    async function logoutUser() {
        await axios.get("http://localhost:8000/api/logout", {withCredentials: true})
            .then((res) => {
                checkIsLoggedIn();
                toast.warn(res.data.message);
                navigate('/');
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            })
    }

    return (
        <div className="fixed w-full h-[3rem] bg-slate-900 font-mono">
            <div className="mx-auto flex items-center justify-between px-3 py-1.5">
                <div className="inline-flex items-center -ml-4">
                    <FaSearch className='relative left-6 text-gray-400' />
                    <input disabled={true}
                        className="flex h-8 w-[500px] bg-gray-600 px-3 py-1 text-lg font-medium font-sans placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text" placeholder="     Search 10,700+ tutorials" />
                </div>
                <div className='absolute left-1/2 transform -translate-x-1/2'>
                    <NavLink to='' className={`flex items-center justify-center`}>
                        <h1 className='text-white text-2xl font-light mr-2'>freeCodeCamp</h1>
                        <SiFreecodecamp size={35} className='text-white' />
                    </NavLink>
                </div>
                <div className='inline-flex justify-center items-center space-x-4 text-white'>
                    <ul className='flex space-x-3 justify-center items-center'>
                        <li>
                            <button type='button' disabled={true} className='border-2 outline-white px-2 py-1 text-md font-semibold text-white shadow-sm cursor-not-allowed'>
                                <IoGlobeOutline size={23} />
                            </button>

                        </li>
                        <li>
                            <button disabled={true}
                                type="button"
                                className="border-2 outline-white px-3 py-1 text-md font-semibold text-white shadow-sm cursor-not-allowed"
                            >
                                Menu
                            </button>
                        </li>
                    </ul>
                    {!isLoggedIn ?
                        (<button
                            type="button"
                            className="border-2 border-orange-400 bg-amber-500 px-3 py-1 text-md font-semibold text-black shadow-sm"
                            onClick={handleSignIn}
                        >
                            Sign In
                        </button>)
                        :
                        (
                            <>
                                <span className="relative inline-block">
                                    <FaUserCircle size={36} />
                                </span>
                                <button onClick={logoutUser}
                                    type="button"
                                    className="border-2 outline-white px-3 py-1 text-md font-semibold text-white shadow-sm"
                                >
                                    Logout
                                </button>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}