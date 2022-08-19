import Image from "next/image"
import Link from "next/link"

const NavBar = () => {

    const links = [1, 2, 3, 4, 5]

    const items = [1, 2, 3, 4, 56, 5, 5, 5, 5, 5, 5, 55, 5, 5, 55, 5, 5, 5, 5, 5]

    const attitudes = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 66, 6]

    const pictures = [1, 2, 3, 4, 5]

    return <nav className="bg-red-600 relative">
        <div className="flex gap-x-2 items-center max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-auto">
            <ul className="basis-[80%] flex text-white">
                {links?.map((i, index) => (
                    <li key={index} className='group'>
                        <Link href={'/'}>
                            <a className="inline-block py-8 pl-10">
                                تست
                            </a>
                        </Link>
                        <div className="hidden z-10 group-hover:flex gap-10 absolute right-0 left-0 mx-4 p-4 rounded-b bg-white text-black shadow-2xl">
                            <ul className="basis-[15%] grid grid-cols-3 gap-8 h-min">
                                <h6 className="font-bold col-span-full">
                                    لیست کل نژاد ها
                                </h6>
                                {items?.map((i, index) =>
                                    <li key={index}>
                                        <Link href={'/'}>
                                            <a>
                                                تست
                                            </a>
                                        </Link>
                                    </li>
                                )}
                            </ul>
                            <div className="basis-[85%] flex gap-8">
                                <ul className="basis-[80%] flex flex-col gap-8">
                                    {attitudes?.map((i, index) =>
                                        <li key={index} className={`${index === 0 && "font-bold"}`}>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                                        </li>
                                    )}
                                </ul>
                                <ul className="basis-[20%] flex flex-col gap-8">
                                    {pictures?.map((i, index) =>
                                        <li key={index} className="relative h-[100px]">
                                            <Image src={'/Images/Doberman.jpg'} className='object-cover rounded' alt={"pic"} layout='fill' />
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="basis-[20%] flex justify-end">
                <div className="relative w-[65px] h-[65px]">
                    <Link href={'/'}>
                        <a>
                            <Image src={'/Images/Logo.png'} alt='log' className="object-contain" layout="fill" />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </nav>
}

export default NavBar