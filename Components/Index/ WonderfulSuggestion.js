import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import { theme } from "../../tailwind.config";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const WonderfulSuggestion = () => {

    const items = [1, 2, 3, 4, 5, 6, 8, 8, 7, 9, 4, 655, 5]

    const md = parseInt(theme.screens.md);
    const lg = parseInt(theme.screens.lg);

    return <section className="bg-red-600 py-10">
        <div className="flex gap-8 max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-auto">
            <div className="basis-[10%] relative h-[250px]">
                <Image src={'/Images/WonderfulSuggestion.png'} alt={'pic'} className='object-contain' layout="fill" />
            </div>
            <div className="w-[90%]">
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    slidesPerGroup={1}
                    slidesPerView="auto"
                    breakpoints={{
                        [md]: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        [lg]: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                    className="mySwiper"
                >
                    {items?.map((i, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded">
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
                                    <AccessAlarmIcon />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </section>
}

export default WonderfulSuggestion