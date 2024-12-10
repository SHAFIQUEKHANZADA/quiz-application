import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GirlPage = () => {
    return (
        <div className="flex flex-col items-center justify-start text-center gap-8">

            <div className="space-y-1">
                <h1 className="text-[30px] font-bold">AI-DRIVEN INCOME GROWTH CHALLENGE</h1>
                <p className=" text-gray-600 font-medium">SELECT YOUR <span className="font-bold">AGE</span></p>
            </div>

            <div className="flex flex-col gap-8">
                <h1 className="text-[13px] font-bold">1-MINUTE QUIZ</h1>
                <div className="grid grid-cols-2 gap-6 items-center relative z-auto">
                    <Link href={"/social-proof"}>
                        <div className="h-[150px] w-[150px] rounded-xl border-2 border-[#5653FE] relative">
                            <Image src={"/images/mainGirl.webp"} alt="Boy" width={130} height={100} className="absolute bottom-2 left-2" />

                            <button className="bg-[#5653FE] rounded-br-lg rounded-bl-lg flex justify-center items-center text-[18px] text-white w-full py-[6px] text-center z-20 absolute bottom-0">Age: 18-24  <ChevronRight /></button>
                        </div>
                    </Link>
                    <Link href={"/social-proof"}>
                        <div className="h-[150px] w-[150px] rounded-xl border-2 border-[#5653FE] relative">
                            <Image src={"/images/f2.webp"} alt="Boy" width={130} height={100} className="absolute bottom-2 left-2" />

                            <button className="bg-[#5653FE] rounded-br-lg rounded-bl-lg flex justify-center items-center text-[18px] text-white w-full py-[6px] text-center z-20 absolute bottom-0">Age: 25-34  <ChevronRight /></button>
                        </div>
                    </Link>
                    <Link href={"/social-proof"}>
                        <div className="h-[150px] w-[150px] rounded-xl border-2 border-[#5653FE] relative">
                            <Image src={"/images/f3.webp"} alt="Boy" width={130} height={100} className="absolute bottom-2 left-2" />

                            <button className="bg-[#5653FE] rounded-br-lg rounded-bl-lg flex justify-center items-center text-[18px] text-white w-full py-[6px] text-center z-20 absolute bottom-0">Age: 35-44 <ChevronRight /></button>
                        </div>
                    </Link>
                    <Link href={"/social-proof"}>
                        <div className="h-[150px] w-[150px] rounded-xl border-2 border-[#5653FE] relative">
                            <Image src={"/images/f4.webp"} alt="Boy" width={130} height={100} className="absolute bottom-2 left-2" />

                            <button className="bg-[#5653FE] rounded-br-lg rounded-bl-lg flex justify-center items-center text-[18px] text-white w-full py-[6px] text-center z-20 absolute bottom-0">Age: 45+  <ChevronRight /></button>
                        </div>
                    </Link>

                </div>
            </div>

            <div className="text-[13px] text-gray-500">
                <p>By choosing your age, you agree with <Link className="underline" href={"/"}>Terms and Conditions</Link>, <Link className="underline" href={"/"}> Privacy Policy</Link>, <Link className="underline" href={"/"}>Subscription Terms</Link></p>

                <p>ZIMRAN LIMITED, Limassol, Cyprus</p>
            </div>

        </div>
    )
}

export default GirlPage