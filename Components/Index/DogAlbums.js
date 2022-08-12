import Image from "next/image"
import Link from "next/link";
import {
    Swiper,
    SwiperSlide
} from "swiper/react";
import "swiper/css";
import { theme } from "../../tailwind.config";

const DogAlbums = () => {

    const items = [1, 2, 3, 4, 5, 6, 8, 9, 9, 5, 5, 6, 5, 4, 66]
    const md = parseInt(theme.screens.md);
    const lg = parseInt(theme.screens.lg);

    return <section>
        <div className="max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-auto my-10 lg:my-28">
            <Swiper
                slidesPerGroup={1}
                slidesPerView="auto"
                breakpoints={{
                    [md]: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    [lg]: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
            >
                {items?.map((i, index) => (
                    <SwiperSlide>
                        <div className="relative h-[250px]">
                            <Link href={'/'}>
                                <a>
                                    <Image src={'/Images/Doberman.jpg'} className='object-cover rounded' layout="fill" />
                                </a>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
}

export default DogAlbums