import Image from "next/image"
import Link from "next/link"

const NavBar = () => {

    const links = [1, 2, 3, 4, 5]

    const items = [1, 2, 3, 4, 56, 5, 5, 5, 5, 5, 5, 55, 5, 5, 55, 5, 5, 5, 5, 5]

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
                        <div className="hidden z-10 group-hover:flex absolute right-0 left-0 mx-4 rounded-b bg-white text-black shadow-2xl p-4">
                            <ul className="basis-[20%] grid grid-cols-3 gap-8">
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
                            <div className="basis-[80%]">
                                a
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