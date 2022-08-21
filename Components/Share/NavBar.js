import Image from "next/image"
import Link from "next/link"
import { MenuItems } from "Share"

const NavBar = () => {

    const links = [1]

    return <nav className="bg-red-600 relative">
        <div className="flex gap-x-2 items-center max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-auto">
            <ul className="basis-[80%] flex text-white">
                {links?.map((i, index) => (
                    <li key={index} className='group'>
                        <Link href={'/dogs'}>
                            <a className="inline-block py-8 pl-10">
                                سگ روتوایلر
                            </a>
                        </Link>
                        <div className="hidden z-10 group-hover:flex gap-10 absolute right-0 left-0 mx-4 p-4 rounded-b bg-white text-black shadow-2xl">
                            <MenuItems />
                        </div>
                    </li>
                ))}
            </ul>
            <div className="basis-[20%] flex justify-end">
                <Link href={'/'}>
                    <a className="relative w-[65px] h-[65px]">
                        <Image src={'/Images/Logo.png'} alt='log' className="object-contain" layout="fill" />
                    </a>
                </Link>
            </div>
        </div>
    </nav>
}

export default NavBar