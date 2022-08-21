import Link from "next/link"
import { MenuItemsChildren } from "Share"

const MeniItems = () => {

    const links = [1]

    return <>
        {links?.map((i, index) => (
            <li key={index} className='group'>
                <Link href={'/dogs'}>
                    <a className="inline-block py-8 pl-10">
                        سگ روتوایلر
                    </a>
                </Link>
                <div className="hidden z-10 group-hover:flex gap-10 absolute right-0 left-0 mx-4 p-10 rounded-b bg-white text-black shadow-2xl h-[80vh] overflow-y-auto">
                    <MenuItemsChildren />
                </div>
            </li>
        ))}
    </>
}

export default MeniItems