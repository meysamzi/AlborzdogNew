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
                        <div className="flex flex-col items-center gap-10 bg-neutral-100 rounded p-6 text-xs md:text-sm lg:text-base">
                            <div className="relative w-[85px] h-[85px]">
                                <Image src={'/Images/Doberman.jpg'} alt={'pic'} className='object-cover rounded-full' layout="fill" />
                            </div>
                            <span className="text-justify">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                            </span>
                            <span className="font-bold text-red-600">لورم ایپسوم متن ساختگی با </span>
                            <span>لورم ایپسوم متن ساختگی </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
}

export default CustomersFeedBack