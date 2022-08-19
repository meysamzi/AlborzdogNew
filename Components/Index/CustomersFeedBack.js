import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import { theme } from "../../tailwind.config";

const CustomersFeedBack = () => {

    const items = [1, 2, 3, 4, 5, 6, 8, 8, 7, 9, 4, 655, 5]

    const md = parseInt(theme.screens.md);
    const lg = parseInt(theme.screens.lg);

    return <section className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-auto my-10 lg:my-28">
        <h1 className="font-bold text-center">نظرات مشتریان ما</h1>
        <div>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                slidesPerGroup={1}
                slidesPerView="auto"
                breakpoints={{
                    [md]: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    [lg]: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                className="mySwiper mt-10"
            >
                {items?.map((i, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col gap-6 bg-red-600 text-white">
                            <div className="relative w-[85px] h-[85px] rounded-full">
                                <Image src={'/Images/Doberman.jpg'} alt={'pic'} className='object-contain rounded-full' layout="fill" />
                            </div>
                            <h6>عنوان</h6>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
}

export default CustomersFeedBack