"use client"
import Nav from '@/components/nav'
// import React from 'react'
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdInformationCircleOutline } from 'react-icons/io';

const Email = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setError(true);
        } else {
            setError(false);
            alert("Email submitted successfully!");
        }
    };


    return (
        <div>
            <Nav />
            <div className='text-center mt-6'>
                <h1 className='text-black text-[25px] font-bold'>
                    Enter your email to get your <span className='text-[#5356FE]'>Personal AI-Driven Income Growth</span> Challenge!
                </h1>

                <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto mt-10 h-[60vh] flex flex-col justify-between">
                    <div>
                        <div className="relative">
                            {/* React Message Icon */}
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                <AiOutlineMail size={24} />
                            </span>

                            {/* Email Input */}
                            <input
                                type="email"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full pl-12 pr-12 py-[10px] border ${error ? "border-red-500" : "border-gray-300"
                                    } rounded focus:outline-none focus:ring-2 ${error ? "focus:ring-red-500" : "focus:ring-blue-500"
                                    }`}
                            />

                            {/* Alert Icon */}
                            {error && (
                                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500">
                                    <IoMdInformationCircleOutline size={24} />
                                </span>
                            )}
                        </div>

                        {/* Error Message */}
                        {error && (
                            <p className="text-red-500 text-[13px] mt-[3px]">
                                Hmm... something&apos;s wrong, try to enter another email.
                            </p>
                        )}

                        <div className='flex items-center mt-2'>
                            <input type="checkbox" className='h-8 w-8 m-3' />
                            <p className='text-[13px] text-left'>I&apos;d like to receive valuable insights, exclusive offers, and the latest news straight to my inbox!</p>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="mt-4 w-full py-4 text-[16px] bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        CONTINUE
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Email