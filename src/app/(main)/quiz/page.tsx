"use client";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { questions } from "@/components/Questions";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);

    const handleOptionClick = (index: number) => {
        setSelectedOptionIndex(index);
        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedOptionIndex(null);  
            }
        }, 500);
    };

    const handleBackClick = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedOptionIndex(null);  
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between py-3">
                {/* Top Navigation */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={handleBackClick}
                        className={`text-gray-700 flex items-center ${currentQuestionIndex === 0 ? "opacity-50 cursor-default" : ""}`}
                        disabled={currentQuestionIndex === 0}
                    >
                        <ArrowLeft className="w-5 h-5 mr-1" />
                    </button>
                </div>

                <Link href={"/"}>
                    <div className="flex items-center justify-center">
                        <Image src="/images/logo.svg" alt="logo" width={100} height={100} />
                    </div>
                </Link>

                {/* Top Right Counter */}
                <div className="text-[14px] font-semibold text-gray-700">
                    {currentQuestionIndex + 1} / {questions.length}
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
                    <div className="mt-6 text-center space-y-1">
                        <h2 className="text-[24px] font-bold text-[#24234C]">
                            {questions[currentQuestionIndex].question}
                        </h2>

                        <p className="text-[17px] font-medium text-[#6B728C]">
                            {questions[currentQuestionIndex].paragraph}
                        </p>
                    </div>
                    

                    {/* Options with Images */}
                    <div className="mt-6 grid grid-cols-1 gap-4">
                        {questions[currentQuestionIndex].options.map((option, index: number) => (
                            <div
                                key={index}
                                className={`relative flex items-center gap-4 p-2 pr-10 rounded-lg cursor-pointer ${selectedOptionIndex === index
                                    ? "border border-[#5653FE] bg-[#F5F5F5]"
                                    : "bg-[#F5F5F5]"
                                    }`}
                                onClick={() => handleOptionClick(index)}
                            >
                              <div className="h-[100px] w-[100px] flex justify-center items-center">
                              <Image
                                    src={option.image}
                                    alt={option.text}
                                    width={100}
                                    height={100}
                                    className="rounded-md h-[70px] w-[70px] overflow-hidden object-cover object-top"
                                />
                              </div>

                                <span className="text-[18px] font-bold">{option.text}</span>
                                {/* Tick Mark */}
                                {selectedOptionIndex === index && (
                                    <div className="absolute right-4 bg-[#5653FE] rounded-full h-5 w-5 p-1 flex justify-center items-center">
                                        <FaCheck className="text-white text-[10px]" />
                                    </div>

                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;
