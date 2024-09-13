import React from 'react';
import { FaApple, FaGoogle, FaMicrosoft, FaSpotify, FaAmazon } from 'react-icons/fa';

export default function HomePage() {
    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen px-6">
            <div>
                <h1 className="text-4xl font-bold text-gray-900">Learn to code — for free.</h1>
                <h2 className="text-3xl font-semibold text-gray-900 mt-8">Build projects.</h2>
                <h2 className="text-3xl font-semibold text-gray-900 mt-8">Earn certifications.</h2>
                <p className="text-lg text-gray-900 mt-6 font-semibold">
                    Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten <br /> jobs at tech companies including:
                </p>
                <div className="flex justify-center space-x-8 mt-4">
                    <FaApple size={40} className="text-gray-800" />
                    <FaGoogle size={40} className="text-gray-800" />
                    <FaMicrosoft size={40} className="text-gray-800" />
                    <FaSpotify size={40} className="text-gray-800" />
                    <FaAmazon size={40} className="text-gray-800" />
                </div>
            </div>
            <button disabled={true} className="mt-8 w-[450px] border-2 border-orange-400 bg-amber-500 text-black font-mono font-semibold py-2 px-6 text-lg cursor-not-allowed">
                Get started (it's free)
            </button>
        </div>
    );
}
