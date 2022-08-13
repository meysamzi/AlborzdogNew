import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import { theme } from "../../tailwind.config";

const AllDogsIntroduction = () => {

    const items = [1, 2, 3, 4, 5, 6, 8, 8, 7, 9, 4, 655, 5]

    const md = parseInt(theme.screens.md);
    const lg = parseInt(theme.screens.lg);

    return <section className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-auto my-10 lg:my-28">
        <h1 className="font-bold text-center">معرفی کل نژاد سگ ها</h1>
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
                        <div className="flex flex-col items-center gap-6 p-4">
                            <div className="flex justify-center">
                                <div className="relative w-[85px] h-[85px]">
                                    <Image src={'/Images/Doberman.jpg'} alt={'pic'} className='object-cover rounded-full' layout="fill" />
                                </div>
                            </div>
                            <h6 className="font-bold">سگ سیبرین هاسکی</h6>
                            <hr className="border-red-600 border-[1px] w-full" />
                            <p className="leading-6 lg:leading-7 text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای </p>
                            <button type="button" className="px-12 py-2 rounded bg-red-600 text-white">ادامه</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
}

export default AllDogsIntroduction