"use client";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import questions from "@/components/Questions";
import Image from "next/image";
import Link from "next/link";

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleOptionClick = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handleBackClick = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between py-3">
                {/* Top Navigation */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={handleBackClick}
                        className={`text-gray-700 flex items-center ${currentQuestionIndex === 0 ? "opacity-50 cursor-default" : ""
                            }`}
                        disabled={currentQuestionIndex === 0}
                    >
                        <ArrowLeft className="w-5 h-5 mr-1" />
                    </button>
                </div>

                <Link href={"/"}>
                    <div className="flex items-center justify-center mr-10">
                        <Image src="/images/logo.svg" alt="logo" width={100} height={100} />
                    </div></Link>

                {/* Top Right Counter */}
                <div className="text-[14px] font-semibold text-gray-700">
                    {currentQuestionIndex + 1}/{questions.length}
                </div>
            </div>

            <div className="flex flex-col items-center justify-center">
                {/* Quiz Container */}
                <div className="w-full bg-white">
                    {/* Progress Bar */}
                    <div className="w-full bg-[#F1F1F1] h-1 rounded-full">
                        <div
                            className="bg-blue-500 h-1 rounded-full transition-all duration-300"
                            style={{
                                width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                            }}
                        ></div>
                    </div>

                    {/* Current Question */}
                    <div className="mt-6 text-center">
                        <h2 className=" text-[24px] font-bold text-[#24234C]">
                            {questions[currentQuestionIndex].question}
                        </h2>
                    </div>

                    {/* Options */}
                    <div className="mt-4 space-y-3">
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={handleOptionClick}
                                className="w-full px-4 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;
