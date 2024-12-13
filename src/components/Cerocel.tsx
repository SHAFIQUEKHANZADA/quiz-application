import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom } from 'swiper/modules';  
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';  

const Carousel = () => {
  return (
    <div className="relative sm:w-[326px] w-[90vw] overflow-hidden mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Zoom]}  
        loop={true}
        navigation={true}  
        pagination={{ clickable: true }}  
        spaceBetween={10}
        slidesPerView={3}   
        className="mySwiper"
        zoom={{ maxRatio: 3, toggle: true }}   
      >
        <SwiperSlide>
          <Image
            src="/images/c1.webp"
            alt="Slide 1"
            width={300}
            height={200}
            className="object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/c2.webp"
            alt="Slide 2"
            width={300}
            height={133}
            className="object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/c3.webp"
            alt="Slide 3"
            width={300}
            height={133}
            className="object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/c4.webp"
            alt="Slide 4"
            width={300}
            height={133}
            className="object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/c5.webp"
            alt="Slide 5"
            width={300}
            height={133}
            className="object-cover rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
