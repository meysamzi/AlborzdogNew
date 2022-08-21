import Image from "next/image"
import Link from "next/link"
import { MeniItems } from "Share"

const NavBar = () => {

    return <nav className="bg-red-600 relative">
        <div className="flex gap-x-2 items-center max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-auto">
            <ul className="basis-[80%] flex text-white">
                <MeniItems />
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