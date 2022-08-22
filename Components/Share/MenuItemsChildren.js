import Link from "next/link"
import { useState } from "react"
import { MenuItemsChildrenContent } from "Share"

const MenuItemsChildren = () => {

    const fakedata = [
        {
            id: 1,
            content: "لورم ایپسوم متن ساختگی با "
        },
        {
            id: 1,
            content: "لورم ایپسوم متن ساختگی با "
        },
        {
            id: 1,
            content: "لورم ایپسوم متن ساختگی با "
        }
    ]

    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

    const [content, setcontent] = useState(null)

    return <>
        <ul className="basis-[15%] grid grid-cols-3 gap-8 h-min">
            <h6 className="font-bold col-span-full">
                لیست کل نژاد ها
            </h6>
            {items?.map((i, index) =>
                <li key={index} onClick={() => setcontent(i)}>
                    <Link href={'/'}>
                        <a>
                            تست
                        </a>
                    </Link>
                </li>
            )}
        </ul>
        {
            content
        }
        <div className="basis-[85%] flex gap-8">
            <MenuItemsChildrenContent />
        </div>
    </>
}

export default MenuItemsChildren