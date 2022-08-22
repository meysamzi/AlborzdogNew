import Link from "next/link"
import { useState } from "react"
import { MenuItemsChildrenContent } from "Share"

const MenuItemsChildren = () => {

    const fakedata = [
        {
            id: 1,
            title: "تست 1",
            content: "لورم ایپسوم متن ساختگی با 1"
        },
        {
            id: 2,
            title: "تست 2",
            content: "لورم ایپسوم متن ساختگی با 2"
        },
        {
            id: 3,
            title: "تست 3",
            content: "لورم ایپسوم متن ساختگی با 3"
        }
    ]

    const [content, setcontent] = useState(null)

    return <>
        <ul className="basis-[15%] grid grid-cols-3 gap-8 h-min">
            <h6 className="font-bold col-span-full">
                لیست کل نژاد ها
            </h6>
            {fakedata?.map((i, index) =>
                <li key={index} onClick={() => setcontent(i)}>
                    <Link href={'/'}>
                        <a>
                            تست
                        </a>
                    </Link>
                </li>
            )}
        </ul>
        <div className="basis-[85%] flex gap-8">
            <MenuItemsChildrenContent fakecontent={fakedata.find((i) => i.id === content)} />
        </div>
    </>
}

export default MenuItemsChildren