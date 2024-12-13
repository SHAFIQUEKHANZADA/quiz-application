"use client";
import Carousel from "@/components/Cerocel";
import { Heebo } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaSignal, FaStar } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { MdOutlineSecurity, MdThumbUp } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";

const hebbo = Heebo({ subsets: ["latin"] })

const DiscountSection = () => {
    const [time, setTime] = useState({ minutes: 8, seconds: 26 });
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => {
                const { minutes, seconds } = prevTime;

                if (seconds > 0) {
                    return { minutes, seconds: seconds - 1 };
                } else if (minutes > 0) {
                    return { minutes: minutes - 1, seconds: 59 };
                } else {
                    clearInterval(interval);
                    setIsExpired(true);
                    return { minutes: 0, seconds: 0 };
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);



    return (
        <div className={`${hebbo.className}`}>
            <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[360px] z-10 bg-white">
            <div className="flex justify-between items-center py-2">
                {isExpired ? (
                    // Show the image when the countdown expires
                    <div className="flex justify-center">
                        <Image
                            src="/images/logo.svg"
                            alt="Discount expired"
                            width={100}
                            height={100}
                            className="w-[120px] h-auto"
                        />
                    </div>
                ) : (
                    // Show the countdown timer
                    <div className="flex justify-between items-center ">
                        <div className="flex flex-col flex-1">
                            <h2 className="text-[12px] font-bold text-gray-800">
                                Discount expires in
                            </h2>
                            <div className="flex items-center space-x-2 text-3xl font-semibold text-red-600">
                                <span>{String(time.minutes).padStart(2, "0")}</span>
                                <span>:</span>
                                <span>{String(time.seconds).padStart(2, "0")}</span>
                            </div>
                            <div className="flex items-center gap-10 pl-1">
                                <div className="text-sm font-medium text-gray-600">min</div>
                                <div className="text-sm font-medium text-gray-600">sec</div>
                            </div>
                        </div>

                    </div>
                )}
                <div className="flex justify-center items-center bg-gray-100">
                    <button className="px-[35px] py-[14px] bg-blue-500 text-white text-[16px] font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 zoom-fly-button">
                        GET MY PLAN
                    </button>
                </div>
            </div>
            </div>

            <div className="mt-28">
                <div className="bg-[#F5F5F5] rounded-xl border border-gray-300 py-3 flex flex-col gap-4">
                    <div className="flex items-center justify-between px-16 text-[#242367] font-bold text-[16px]">
                        <h1>Now</h1>
                        <div className="w-[1px] h-[34px] bg-gray-200"></div>

                        <h1>Goal</h1>
                    </div>

                    <Image src="/images/mainPlan.png" alt="Main Plan" width={500} height={500} className="w-full h-auto object-contain" />

                    <div className="flex justify-between gap-3 w-full p-3">

                        <div className="flex flex-col gap-2">
                            <div>
                                <h1 className="text-[#242367] font-semibold">AI Skills</h1>
                                <Image src="/images/pr1.webp" alt="Main Plan" width={500} height={500} className="w-full h-auto object-contain" />
                            </div>
                            <div>
                                <h1 className="text-[#242367] font-semibold">
                                    Income Potential</h1>
                                <Image src="/images/pr3.svg" alt="Main Plan" width={500} height={500} className="w-full h-auto object-contain" />

                                <p className="text-gray-500 text-[17px]">Limited</p>
                            </div>
                        </div>

                        <div className="w-[1px] bg-gray-300"></div>
                        <div className="flex flex-col gap-2">
                            <div>
                                <h1 className="text-[#242367] font-semibold">AI Skills</h1>
                                <Image src="/images/pr2.webp" alt="Main Plan" width={500} height={500} className="w-full h-auto object-contain" />
                            </div>
                            <div>
                                <h1 className="text-[#242367] font-semibold">
                                    Income Potential</h1>
                                <Image src="/images/pr4.svg" alt="Main Plan" width={500} height={500} className="w-full h-auto object-contain" />

                                <p className="text-gray-500 text-[17px]">High</p>
                            </div>
                        </div>
                    </div>

                </div>

                <p className="text-gray-500 text-[13px] mt-2">This is not a guarantee or promise of results.</p>
            </div>

            <div className="mt-5 space-y-3">
                <h1 className="text-[20px] font-semibold">Your readiness: <span className="text-[#7ABF7A]">83%</span></h1>
                <div className="bg-[#F5F5F5] rounded-xl border border-gray-300 flex p-4 gap-1 items-center">
                    <h1 className="text-[17px]"><span className="text-[#7ABF7A]">4-week</span> program is enough for you to start your AI journey</h1>

                    <Image src="/images/bulb.webp" alt="Main Plan" width={100} height={100} className="w-[38px] h-auto object-contain" />
                </div>
            </div>

            <div className="mt-5 text-center p-5 bg-[#F5F5F5] flex flex-col gap-3">
                <h1 className="text-[24px] font-semibold">AI is easier than you think</h1>

                <div className="flex">
                    <Image src="/images/ai1.webp" alt="Main Plan" width={100} height={200} className="w-full h-auto object-contain" />
                    <Image src="/images/ai2.webp" alt="Main Plan" width={100} height={200} className="w-full h-auto object-contain" />
                </div>

                <div className="flex flex-col text-center items-center">
                    <div className="flex items-center  gap-2">
                        <Image src={"/images/q3o3.png"} alt="ok" width={40} height={40} />
                        <p className="text-[14px] font-medium"><span></span> No prior AI knowledge is required</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src={"/images/q3o3.png"} alt="ok" width={40} height={40} />
                        <p className="text-[14px] font-medium"><span></span> No need for a university degree</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src={"/images/q3o3.png"} alt="ok" width={40} height={40} />
                        <p className="text-[14px] font-medium"><span></span> No need for a university degree</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center py-10 gap-3 px-4 text-[20px]">
                <h1 className="text-[24px] font-bold">Try Coursiv and you will:</h1>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <FaCircleCheck className="text-[#5653FE] text-[20px]" />
                        <h1 className="text-[#4E2369] text-[15px]">Master AI tools that can boost your income</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCircleCheck className="text-[#5653FE] text-[20px]" />
                        <h1 className="text-[#4E2369] text-[15px]">Discover new digital professions and income sources</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCircleCheck className="text-[#5653FE] text-[20px]" />
                        <h1 className="text-[#4E2369] text-[15px]">Learn key AI terms and lessons</h1>
                    </div>
                </div>

                <div className="flex items-center gap-3 mt-3">
                    <div className="bg-[#F1F1F1] text-center px-7 rounded py-2">
                        <h1 className="text-[12px]">Your goal</h1>
                        <div className="flex items-center gap-1 text-[15px] font-bold">
                            <MdOutlineSecurity className="text-[#5653FE] text-[14px]" />
                            <h1>Grow wealth</h1>
                        </div>
                    </div>
                    <div className="bg-[#F1F1F1] text-center px-7 rounded py-2">
                        <h1 className="text-[12px]">Your target</h1>
                        <div className="flex items-center gap-1 text-[15px] font-bold">
                            <FaSignal className="text-[#5653FE] text-[14px]" />
                            <h1>Buy a house</h1>
                        </div>
                    </div>
                </div>

                <form className="flex items-center justify-center gap-4 p-4 flex-col">
                    <label className="flex items-center gap-16 border px-4 py-2 sm:w-[360px] rounded-xl">
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                id="option1"
                                name="radioGroup"
                                value="option1"
                                className="w-5 h-5 accent-blue-600"
                            />
                            <div className="text-gray-500 peer-checked:text-black">
                                <h1 className="text-[16px] font-bold">1-WEEK PLAN</h1>
                                <p className="text-[14px]">$13.86</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center rounded-md w-32 h-12 bg-[#F1F1F1] clip-pentagon">
                            <div className="ml-3  text-center flex items-center text-gray-500 checked:text-black">
                                <p className="text-[35px] font-bold"><sup className="text-[20px]">$</sup>1</p>
                                <div className="text-left">
                                    <p className="text-[15px] font-semibold">98</p>
                                    <p className="text-[10px]">Per day</p>
                                </div>
                            </div>
                        </div>
                    </label>

                    <label className="text-center">
                        <div className="flex items-center justify-center gap-1 text-white bg-[#5356FE] rounded-tl-xl rounded-tr-xl py-1">
                            <MdThumbUp className="text-[17px]" />
                            <h1 className="text-[14px] font-semibold">MOST POPULAR</h1>
                        </div>
                        <div className="flex items-center gap-16 border px-4 py-2 sm:w-[360px] rounded-bl-xl rounded-br-xl">
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="option1"
                                    name="radioGroup"
                                    value="option1"
                                    className="w-5 h-5 accent-blue-600"
                                    defaultChecked
                                />
                                <div>
                                    <h1 className="text-[16px] font-bold">1-WEEK PLAN</h1>
                                    <p className="text-[14px]">$13.86</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center rounded-md w-32 h-12 bg-[#F1F1F1] clip-pentagon">
                                <div className="ml-3 text-black text-center flex items-center">
                                    <p className="text-[35px] font-bold"><sup className="text-[20px]">$</sup>1</p>
                                    <div className="text-left">
                                        <p className="text-[15px] font-semibold">98</p>
                                        <p className="text-[10px]">Per day</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>

                    <label className="flex items-center gap-16 border px-4 py-2 sm:w-[360px] rounded-xl">
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                id="option1"
                                name="radioGroup"
                                value="option1"
                                className="w-5 h-5 accent-blue-600"
                            />
                            <div className=" text-gray-500 checked:text-black">
                                <h1 className="text-[16px] font-bold">1-WEEK PLAN</h1>
                                <p className="text-[14px]">$13.86</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center rounded-md w-32 h-12 bg-[#F1F1F1] clip-pentagon">
                            <div className="ml-3 text-center flex items-center  text-gray-500 checked:text-black">
                                <p className="text-[35px] font-bold"><sup className="text-[20px]">$</sup>1</p>
                                <div className="text-left">
                                    <p className="text-[15px] font-semibold">98</p>
                                    <p className="text-[10px]">Per day</p>
                                </div>
                            </div>
                        </div>
                    </label>
                </form>

                <div className="flex flex-col gap-1">
                    <div className="flex items-start gap-1">
                        <TbTargetArrow className="text-[#5356FE] text-[30px]" />
                        <h1 className="text-[14px]">People using plan for 3 months achieve twice as many results as for 1 month</h1>
                    </div>
                    <p className="text-[12px] text-gray-600 ml-5">*According to a research by Coursiv, 2023</p>
                </div>

                <div className="flex w-full justify-center items-center py-4">
                    <button className="px-[35px] py-[14px] w-full  bg-blue-500 text-white text-[16px] font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 zoom-fly-button">
                        GET MY PLAN
                    </button>
                </div>

                <div className="text-center flex flex-col justify-center items-center gap-5">
                    <h1 className="text-[14px] text-gray-500 text-center">Extended every 4-week at the price of $39.99 if you do not cancel 24 hours before the renewal date in your account settings. <span className="underline">Subscription Terms.</span></h1>

                    <div className="flex items-center justify-center gap-2 text-center text-[17px] px-3 rounded py-2 w-fit bg-[#F2F9ED] text-[#CBCD4C]">
                        <MdOutlineSecurity />
                        <p>Pay safe & secure</p>
                    </div>
                    <Image src={"/images/pyment.webp"} alt="payment" width={200} height={200} />

                    <p className="text-[10px]">ZIMRAN LIMITED, Limassol, Cyprus</p>
                </div>

                <div className="bg-[#F2F9ED] w-full px-4 py-8 flex flex-col justify-center items-center gap-5 text-center mt-3">
                    <Image src={"/images/money.svg"} alt="money" width={100} height={100} />

                    <h1 className="font-semibold text-[18px]">Money-Back Guarantee</h1>

                    <p className="text-[14px]">We are so confident in our service that we are ready to offer a full refund within 30 days of purchase if you do not achieve initial results and can demonstrate you have followed the plan.</p>
                    <p className="text-[14px]">Learn more about all the conditions in our <br /> <span className="underline">Subscription Terms.</span></p>
                </div>

                <div>
                    <h1>Access Coursiv anywhere using your mobile device</h1>
                    <Carousel />
                </div>

                <div className="flex flex-col justify-center items-center text-center py-6 gap-4">
                    <h1 className="text-[25px] font-bold">What you get</h1>
                    <div className="text-left flex flex-col gap-4">
                    <div className="flex items-center gap-[10px]">
                        <div className="text-[22px] p-[1px] rounded-full text-[#5653FE] bg-[#DDDDFF]">
                        <GoDotFill />
                        </div>
                        <h1 className="text-[16px]">Guides on Trending AI tools</h1>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <div className="text-[22px] p-[1px] rounded-full text-[#5653FE] bg-[#DDDDFF]">
                        <GoDotFill />
                        </div>
                        <h1 className="text-[16px]">Access to beginner-friendly lessons</h1>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <div className="text-[22px] p-[1px] rounded-full text-[#5653FE] bg-[#DDDDFF]">
                        <GoDotFill />
                        </div>
                        <h1 className="text-[16px]">Comprehensive skill-enhancing courses</h1>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <div className="text-[22px] p-[1px] rounded-full text-[#5653FE] bg-[#DDDDFF]">
                        <GoDotFill />
                        </div>
                        <h1 className="text-[16px]">Resources for work-life balance</h1>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <div className="text-[22px] p-[1px] rounded-full text-[#5653FE] bg-[#DDDDFF]">
                        <GoDotFill />
                        </div>
                        <h1 className="text-[16px]">
                        24/7 chat with your personal AI coach to get all answers and reduce mistakes.</h1>
                    </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center text-center gap-5">
                <h1 className="text-[24px] font-bold">People love Coursiv</h1>

                <div className="flex flex-col gap-4 text-start">
                     <div className="flex items-center gap-3">
                        <Image src={"/images/q19o1.png"} alt="s" width={30} height={30}/>
                        <h1 className="text-[18px]">@der_kennndy1</h1>
                     </div>
                    <div className="border border-gray-400 rounded-md p-5 flex flex-col gap-5">
                     <p>&quot;The learning is stratightforward and has all the necessary information! It serves as a great starting point if you are new to AI.&quot;</p>
                     <div className="flex items-center gap-2 text-[18px] text-[#FFAD33]">
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 text-start">
                     <div className="flex items-center gap-3">
                        <Image src={"/images/q19o1.png"} alt="s" width={30} height={30}/>
                        <h1 className="text-[18px]">@dexter_brechtefeld</h1>
                     </div>
                    <div className="border border-gray-400 rounded-md p-5 flex flex-col gap-5">
                     <p>&quot;Coursiv&apos;s wide range of educational materials and interactive features enables users of all levels to easily understand complicated AI principles. Kudos to Coursiv for pioneering a new approach to AI learning!&quot;</p>
                     <div className="flex items-center gap-2 text-[18px] text-[#FFAD33]">
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 text-start">
                     <div className="flex items-center gap-3">
                        <Image src={"/images/q19o1.png"} alt="s" width={30} height={30}/>
                        <h1 className="text-[18px]">@pattykivuva</h1>
                     </div>
                    <div className="border border-gray-400 rounded-md p-5 flex flex-col gap-5">
                     <p>&quot;Coursiv has simplified understanding complex topics and enhancing my skills across subjects. The customized learning tailored to my needs has significantly boosted my progress towards achieving my goals.&quot;</p>
                     <div className="flex items-center gap-2 text-[18px] text-[#FFAD33]">
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscountSection;
