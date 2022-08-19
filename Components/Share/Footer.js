import Image from "next/image"
import Link from "next/link";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import FaxIcon from '@mui/icons-material/Fax';
import EmailIcon from '@mui/icons-material/Email';
import { LinkGroup } from "Share";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const Footer = () => {

    const items = [1, 2, 3, 4, 5]

    return <footer className="bg-[#171717] mt-10 lg:mt-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 lg:py-14 text-[#7f7f7f] max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-auto text-xs md:text-sm lg:text-base">
            <div className="flex flex-col gap-y-6">
                <div className="relative h-[60px] md:h-[75px] lg:h-[85px]">
                    <Image
                        src={'/Images/logo.png'}
                        className='object-contain'
                        layout={'fill'}
                    />
                </div>
                <p className="text-justify leading-8">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                </p>
            </div>
            <div>
                <h4 className="text-white relative pb-6 after:absolute after:border-[2px] after:rounded-t after:border-red-600 after:w-[20%] after:right-0 after:-bottom-[1px]">تست</h4>
                <hr className="border-[#7f7f7f]" />
                <LinkGroup />
            </div>
            <div>
                <h4 className="text-white relative pb-6 after:absolute after:border-[2px] after:rounded-t after:border-red-600 after:w-[20%] after:right-0 after:-bottom-[1px]">راه های ارتباطی</h4>
                <hr className="border-[#7f7f7f]" />
                <div className="flex flex-col gap-y-6 [&>div>svg]:text-red-600 [&>div>svg]:text-sm [&>div>svg]:md:text-base [&>div>svg]:lg:text-xl">
                    <div className="flex gap-x-4 items-center mt-6">
                        <LocationOnIcon />
                        <span className="text-justify">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        </span>
                    </div>
                    <div className="flex gap-x-4 items-center">
                        <PhoneEnabledIcon />
                        <span>
                            09359580206
                        </span>
                    </div>
                    <div className="flex gap-x-4 items-center">
                        <FaxIcon />
                        <span>
                            09359580206
                        </span>
                    </div>
                    <div className="flex gap-x-4 items-center">
                        <EmailIcon />
                        <span>
                            meysamzeynali2@gmail.com
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <h4 className="text-white relative pb-6 after:absolute after:border-[2px] after:rounded-t after:border-red-600 after:w-[20%] after:right-0 after:-bottom-[1px]">آخرین مطالب</h4>
                <hr className="border-[#7f7f7f]" />
                <div className="mt-6">
                    <Swiper
                        direction={"vertical"}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper h-[150px] md:h-[250px]"
                    >
                        {items?.map((i, index) =>
                            <SwiperSlide key={index}>
                                <div className="flex gap-4">
                                    <div className="basis-[50%] flex flex-col gap-4">
                                        <Link href={'/post'}>
                                            <a className="inline-block font-bold leading-6 lg:leading-7 h-[30px] md:h-[50px] overflow-hidden hover:text-red-600">
                                                تست
                                            </a>
                                        </Link>
                                        <p className="text-justify leading-6 lg:leading-7 h-[100px] md:h-[170px] overflow-hidden">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و </p>
                                    </div>
                                    <div className="basis-[50%] relative h-[140px] md:h-[120px]">
                                        <Image
                                            src={'/Images/1.jpg'}
                                            className='object-cover rounded'
                                            layout={'fill'}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
        </div>
    </footer >
}

export default Footer