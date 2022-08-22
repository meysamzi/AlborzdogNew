import Link from "next/link"
import { useState } from "react"
import { MenuItemsChildrenContent } from "Share"

const MenuItemsChildren = () => {

    const fakedata = [
        {
            id: 1,
            title: "تست 1",
            content: "لورم ایپسوم متن ساختگی با 1",
            pictures: ["/Images/Doberman.jpg", "/Images/Doberman.jpg", "/Images/Doberman.jpg"]
        },
        {
            id: 2,
            title: "تست 2",
            content: "لورم ایپسوم متن ساختگی با 2",
            pictures: ["/Images/Haski.jpg", "/Images/Haski.jpg", "/Images/Haski.jpg"]
        },
        {
            id: 3,
            title: "تست 3",
            content: "لورم ایپسوم متن ساختگی با 3",
            pictures: ["/Images/Doberman.jpg", "/Images/Doberman.jpg", "/Images/Doberman.jpg"]
        },
        {
            id: 4,
            title: "تست 4",
            content: "لورم ایپسوم متن ساختگی با 4",
            pictures: ["/Images/Doberman.jpg", "/Images/Doberman.jpg", "/Images/Doberman.jpg"]
        }
    ]

    const [content, setcontent] = useState(fakedata[0].id)

    return <>
        <ul className="basis-[15%] grid grid-cols-3 gap-8 h-min">
            <h6 className="font-bold col-span-full">
                لیست کل نژاد ها
            </h6>
            {fakedata?.map((i) =>
                <li key={i?.id} onMouseEnter={() => setcontent(i?.id)}>
                    <Link href={'/'}>
                        <a>
                            {i?.title}
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