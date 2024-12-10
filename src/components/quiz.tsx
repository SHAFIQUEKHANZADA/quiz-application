import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

 
const Quiz = () => {
    return (
        <div className="flex flex-col items-center justify-start text-center gap-8 mt-20">

            <div className="space-y-1">
                <h1 className="text-[30px] font-bold">AI-DRIVEN INCOME GROWTH CHALLENGE</h1>
                <p className=" text-gray-600 font-medium">SELECT YOUR <span className="font-bold">GENDER</span></p>
            </div>

            <div className="flex flex-col gap-8">
                <h1 className="text-[13px] font-bold">1-MINUTE QUIZ</h1>
                <div className="flex gap-4 items-center relative z-auto">
                    <Link href={"/boys"}>
                    <div className="h-[150px] w-[150px] rounded-xl border-2 border-[#5653FE] relative">
                        <Image src={"/images/mainBoy.webp"} alt="Boy" width={130} height={100} className="absolute bottom-2 left-2" />

                        <button className="bg-[#5653FE] rounded-br-lg rounded-bl-lg flex justify-center items-center text-[20px] text-white w-full py-[5px] text-center z-20 absolute bottom-0">Male  <ChevronRight /></button>
                    </div>
                    </Link>

                    <Link href={"/girls"}>
                    <div className="h-[150px] w-[150px] rounded-xl border-2 border-[#5653FE] relative">
                        <Image src={"/images/mainGirl.webp"} alt="Girl" width={130} height={100} className="absolute bottom-2  left-2" />
                        <button className="bg-[#5653FE] rounded-br-lg rounded-bl-lg flex justify-center items-center text-[20px] text-white w-full py-[5px] text-center z-20 absolute bottom-0">Female  <ChevronRight /></button></div>
                </Link>
                </div>
            </div>

            <div className="text-[13px] text-gray-500">
                <p>By clicking &quot;Male&quot; or &quot;Female&quot;, you agree with <Link className="underline" href={"/"}>Terms and Conditions</Link>, <Link className="underline" href={"/"}> Privacy Policy</Link>, <Link className="underline" href={"/"}>Subscription Terms</Link></p>

                <p>Coursiv product by Zimran Limited.</p>

                <p>2024 ©All Rights Reserved.</p>
            </div>

        </div>
    )
}

export default Quiz