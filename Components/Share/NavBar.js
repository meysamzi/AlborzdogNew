import Image from "next/image"
import Link from "next/link"

const NavBar = () => {

    const links = [1, 2, 3, 4, 5]

    return <nav className="bg-red-600">
        <div className="flex gap-x-2 items-center max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-auto">
            <ul className="basis-[80%] flex  text-white">
                {links?.map((i, index) => (
                    <li className="py-8 pl-14" key={index}>تست</li>
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