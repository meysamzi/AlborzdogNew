import Link from "next/link"
import { MenuItemsChildrenContent } from "Share"

const MenuItemsChildren = () => {

    const items = [1, 2, 3, 4, 56, 5, 5, 5, 5, 5, 5, 55, 5, 5, 55, 5, 5, 5, 5, 5]

    return <>
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
            <MenuItemsChildrenContent />
        </div>
    </>
}

export default MenuItemsChildren