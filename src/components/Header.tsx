import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


const Header = () => {
    return (
        <div className='bg-[#F5F7F9]  flex items-center justify-around lg:px-32'>
            {/* left- logo */}
            <div className='flex items-center gap-2 flex-1'>
                <Image src={"/images/logo.png"} alt='Logo' width={53} height={53} quality={100} />
                <h1 className='text-[24px] font-bold'>Coursiv</h1>
            </div>
            {/* right -navigations */}
            <div className="xl:flex hidden items-center justify-center flex-1 gap-3 text-[17px] text-[#12346A]  ">
                <div className="flex items-center gap-3">
                    <span className="bg-white py-6 px-4">
                        <Link href="/">Home</Link>
                    </span>
                    <span className="hover:bg-white duration-100 py-6 px-4">
                        <Link href="/">Knowledge base</Link>
                    </span>
                </div>

                <button className="px-4 py-[12px] bg-white border rounded border-gray-300">
                    Submit a request
                </button>

                <div className="relative w-auto">
                    <select
                        className="appearance-none bg-transparent focus:outline-none focus:ring-0 py-2 text-[17px] pr-8"
                    >
                        <option value="option1">English</option>
                        <option value="option2">German</option>
                        <option value="option3">French</option>
                        <option value="option4">Option 4</option>
                        <option value="option5">Option 5</option>
                        <option value="option6">Option 6</option>
                        <option value="option7">Option 7</option>
                    </select>
                    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 text-gray-600"
                        >
                            <path d="M7 10l5 5 5-5H7z" />
                        </svg>
                    </span>
                </div>
            </div>

            <div className='xl:hidden block'>
                <Sheet>
                    <SheetTrigger>Open</SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

            </div>

        </div>
    )
}

export default Header