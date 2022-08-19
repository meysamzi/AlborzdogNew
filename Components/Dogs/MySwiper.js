import Image from "next/image";
import Link from "next/link";
import { theme } from "../../tailwind.config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';

const MySwiper = () => {

    const items = [1, 2, 3, 4, 5, 6]

    const md = parseInt(theme.screens.md)
    const lg = parseInt(theme.screens.lg)

    return <section>
        <Swiper
            className="mySwiper"
            slidesPerView="auto"
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
                [md]: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                [lg]: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
            }}
        >
            {items?.map(i =>
                <SwiperSlide>
                    <Link href={'/'}>
                        <a className="relative grid h-[45vh]">
                            <Image
                                src={'/Images/Doberman.jpg'}
                                className="object-cover object-top brightness-50"
                                layout="fill"
                            />
                            <div className="flex flex-col gap-4 justify-self-center lg:justify-self-start self-center lg:self-end z-10 p-4 text-xs md:text-sm lg:text-base">
                                <h1 className="text-justify font-bold text-red-600">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </h1>
                                <span className="text-justify text-white leading-6 lg:leading-7">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و </span>
                                <div className="flex gap-4 [&>div>svg]:text-red-600 [&>div>span]:text-white">
                                    <div className="basis-[50%] flex gap-2 items-center">
                                        <CalendarMonthIcon />
                                        <span>1401/10/20</span>
                                    </div>
                                    <div className="basis-[50%] flex gap-2 justify-end items-center">
                                        <DescriptionIcon />
                                        <span>مقالات</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>
                </SwiperSlide>
            )}
        </Swiper>
    </section>
}

export default MySwiper