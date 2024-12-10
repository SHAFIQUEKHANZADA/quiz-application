import Image from "next/image";
 

export default function Loading() {
 
    return (
        <div className={`flex items-center justify-center  h-[90vh] animate-zoom `}>
            <Image
                src="/images/logo.svg"
                alt="loading"
                width={300}
                height={300}
                className="transition-transform duration-500 ease-in-out transform scale-110 hover:scale-100"
            />
        </div>
    );
}
