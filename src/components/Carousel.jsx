import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="h-[160px] sm:h-[220px] md:h-[300px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        className="h-full"
      >
        <SwiperSlide>
          <img src={"../images/carousel_1.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_2.jpg"} />
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <video controls muted="muted">
            <source src={"../images/carousel_vid.mp4"} type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_4.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_5.jpg"} />
        </SwiperSlide>
      </Swiper>
      <div className="h-[30%] sm:h-[50%] bg-gradient-to-b from-stone-900" />
    </div>
  );
};

export default Carousel;
