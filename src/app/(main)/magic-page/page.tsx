"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "tailwindcss/tailwind.css";
import { useRouter } from "next/navigation";
import Nav from "@/components/nav";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const MagicPage = () => {
    const [progress, setProgress] = useState(0);
    const [currentCard, setCurrentCard] = useState(0);
    const router = useRouter();

    const cards = [
        { author: "Tina", title: " Outstanding platform", description: "“Coursiv enables individuals at all levels of expertise to easily understand complicated AI topics.”" },
        { author: "Jeremy", title: "The experience is topnotch", description: "“The AI knowledge I've gained from the program can be immediately applied in my job. I've acquired skills that enhance my efficiency and effectiveness at work.”" },
        { author: "  Hyun", title: "Extensive knowledge", description: "“In addition to AI insights, Coursiv offered me extensive marketing knowledge. It's less about the cost and more about the val" },
    ];







    // Increment the progress bar
    useEffect(() => {
        if (progress < 100) {
            const timer = setInterval(() => {
                setProgress((prev) => Math.min(prev + 1, 100));
            }, 70); // Adjust speed here
            return () => clearInterval(timer);
        } else {
            setTimeout(() => {
                router.push("/email");
            }, 100);
        }
    }, [progress, router]);

    // Cycle through cards
    useEffect(() => {
        const cardTimer = setInterval(() => {
            setCurrentCard((prev) => (prev + 1) % cards.length);
        }, 4000); // Change card every 2 seconds
        return () => clearInterval(cardTimer);
    }, [cards.length]);

    return (
        <div>
            <Nav />
            <div className="flex flex-col items-center justify-center mt-12  bg-white text-center">
                {/* Circular Progress Bar */}
                <div className="relative w-[138px] h-[138px] mb-5">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle
                            cx="50%"
                            cy="50%"
                            r="45%"
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="10"
                        />
                        <circle
                            cx="50%"
                            cy="50%"
                            r="45%"
                            fill="none"
                            stroke="#5653FE"
                            strokeWidth="10"
                            strokeDasharray="408"
                            strokeDashoffset={(408 * (100 - progress)) / 100}
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-[30px] font-bold">
                        {progress}%
                    </div>
                </div>

                {/* Text Section */}
                <div className="space-y-8">
                    <h1 className="text-[17px] text-gray-700 ">Creating your personal challenge...</h1>
                    <div className="w-full h-[1px] bg-gray-200" />

                    <div className="space-y-1">
                        <h1 className="text-[#5653FE] text-[34px] font-bold">100,000+ people</h1>

                        <p className="text-[22px] font-bold"> have chosen Coursiv</p>
                    </div>
                </div>

                {/* Carousel Section */}
                <div className="overflow-hidden w-full h-fit mt-10 p-2">
                    <AnimatePresence>
                        <motion.div
                            key={currentCard}
                            className="flex flex-col justify-center gap-3 text-start w-full h-fit text-black rounded-lg shadow-lg p-4"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="flex items-center gap-1">
                                <div className="bg-[#219653] p-1"><FaStar className="text-[#F1F1F1]" /></div>
                                <div className="bg-[#219653] p-1"><FaStar className="text-[#F1F1F1]" /></div>
                                <div className="bg-[#219653] p-1"><FaStar className="text-[#F1F1F1]" /></div>
                                <div className="bg-[#219653] p-1"><FaStar className="text-[#F1F1F1]" /></div>
                                <div className="bg-[#219653] p-1"><FaStarHalfAlt className="text-[#F1F1F1]" /></div>
                            </div>



                            <div className="flex items-center justify-between">
                                <h2 className="text-[16px] font-bold">{cards[currentCard].title}</h2>
                                <p className="text-[15px] text-gray-600">{cards[currentCard].author}</p>
                            </div>
                            <p className="text-[15px] text-gray-600 mt-2">{cards[currentCard].description}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default MagicPage;