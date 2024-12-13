"use client"
import Nav from '@/components/nav';
import React from 'react';
import { useRouter } from 'next/navigation';

const ProductUpdates = () => {
    const router = useRouter();

    const handleRedirect = () => {
        router.push('/pathway');
    };

    return (
        <div>
            <Nav />
            <div className="flex flex-col justify-between text-center h-[480px] mt-14">
                <h1 className="text-[24px] font-bold">
                    Do you want to receive emails with{" "}
                    <span className="text-[#5356FE]">AI & Income Growth</span> tips and product updates?
                </h1>

                <button
                    type="button"
                    onClick={handleRedirect}
                    className="mt-4 w-full py-4 text-[16px] bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    YES, I&apos;M IN!
                </button>
            </div>

            <h1 className="text-gray-500 text-[14px] font-semibold mt-3 flex justify-center">
                I DON&apos;T WANT TO RECEIVE TIPS OR UPDATES
            </h1>
        </div>
    );
};

export default ProductUpdates;
