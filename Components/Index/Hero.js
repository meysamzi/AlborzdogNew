import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Link from "next/link";

const Hero = () => {

    const firstslide = [1, 2, 3, 5, 5]

    return <section>
        <div className="flex gap-10 max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-auto my-10 lg:my-28">
            <div className="w-[50%]">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {firstslide?.map((i, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative h-[54vh]">
                                <Link href={'/'}>
                                    <a>
                                        <Image src={'/Images/Doberman.jpg'} alt={'pic'} className='object-cover rounded' layout="fill" />
                                    </a>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="basis-[50%] flex flex-col gap-10">
                <div className="relative h-[25vh]">
                    <Link href={'/'}>
                        <a>
                            <Image src={'/Images/Doberman.jpg'} alt={'pic'} className='object-cover rounded' layout="fill" />
                        </a>
                    </Link>
                </div>
                <div className="relative h-[25vh]">
                    <Link href={'/'}>
                        <a>
                            <Image src={'/Images/Doberman.jpg'} alt={'pic'} className='object-cover rounded' layout="fill" />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </section>
}

export default Hero