import { Heebo } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'

const heboo = Heebo({ subsets: ["latin"], weight: "600" })

const SocalProof = () => {
    return (
        <div className={`${heboo.className} py-2 max-w-[400px] mx-auto`}>
            <div className='bg-[#EEEEFF] rounded-lg p-6 h-full flex flex-col gap-4'>
                <div className='text-center'>
                    <h1 className='text-[#5653FE] text-[34px] font-bold'>100 000+ people</h1>
                    <p className='text-[15px] text-gray-500'>already use Coursiv</p>
                </div>

                <div className='bg-white rounded-lg p-5 text-center flex flex-col items-center gap-2 relative'>
                    <h1 className='text-[18px] font-bold'>AI Won&apos;t Replace Humans — But Humans With AI Will Replace Humans Without AI</h1>

                    <Image src={"/images/hv.webp"} alt='harved' width={120} height={120} />

                    <RiDoubleQuotesL className='absolute top-2 left-2 text-[19px] text-[#5653FE]' />
                    <RiDoubleQuotesR className='absolute bottom-16 right-3 text-[19px] text-[#5653FE]' />
                </div>

                <div className='flex flex-col text-center'>
                    <h1 className='text-[18px] text-[#24234C]'>Latest AI tools mentioned in</h1>

                    <Image src={"/images/icons.webp"} alt='logos' width={400} height={400} />
                </div>
            </div>

            <div className='bg-white py-5'>
                <Link href={"/quiz"}>
                    <button className='text-[17px] py-4 rounded-xl font-bold w-full bg-[#5653FE] text-white'>CONTINUE</button>
                </Link>
            </div>
        </div>
    )
}

export default SocalProof