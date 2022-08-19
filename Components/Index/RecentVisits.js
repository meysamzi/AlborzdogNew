import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import { theme } from "../../tailwind.config";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const RecentVisits = () => {

    const items = [1, 2, 3, 4, 5, 6, 8, 8, 7, 9, 4, 655, 5]

    const md = parseInt(theme.screens.md);
    const lg = parseInt(theme.screens.lg);

    return <section>
        <div className="flex gap-8 max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-auto my-10 lg:my-28">
            <div className="w-[75%]">
                <div className="flex flex-col gap-4">
                <h6>سگ نگهبان</h6>
                <span>بر اساس بازدیدهای شما</span>
                </div>
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
                    className="mySwiper mt-6"
                >
                    {items?.map((i, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded shadow">
                                <div className="relative h-[150px]">
                                    <Image src={'/Images/Haski.png'} alt={'pic'} className='object-contain' layout="fill" />
                                </div>
                                <div className="flex flex-col gap-6 p-6">
                                    <h6 className="text-center">سگ سیبرین هاسکی</h6>
                                    <div className="flex gap-4 justify-end items-center">
                                        <span className="line-through">توافقی</span>
                                        <span className="p-2 bg-red-600 text-white rounded-full">30%</span>
                                    </div>
                                    <span className="text-left">1 میلیون تومان</span>
                                    <div className="flex gap-4 justify-end items-center">
                                        <span>10:35:10</span>
                                        <AccessAlarmIcon />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="basis-[25%] flex flex-col gap-4 p-4 rounded">
                <h6 className=" after:border-b-[1px] after:border-b-red-600 after:block after:mt-4">پیشنهاد های لحضه ای برای شما</h6>
                <div className="relative h-[150px]">
                    <Image src={'/Images/Haski.png'} alt={'pic'} className='object-contain' layout="fill" />
                </div>
                <div className="flex flex-col gap-6">
                    <h6 className="text-center">سگ سیبرین هاسکی</h6>
                    <div className="flex gap-4 justify-end items-center">
                        <span className="line-through">توافقی</span>
                        <span className="p-2 bg-red-600 text-white rounded-full">30%</span>
                    </div>
                    <span className="text-left">1 میلیون تومان</span>
                    <div className="flex gap-4 justify-end items-center">
                        <span>10:35:10</span>
                        <AccessAlarmIcon />
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default RecentVisits