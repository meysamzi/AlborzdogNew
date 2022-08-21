import Link from "next/link"
import Image from "next/image"

const MenuItems = () => {

    const items = [1, 2, 3, 4, 56, 5, 5, 5, 5, 5, 5, 55, 5, 5, 55, 5, 5, 5, 5, 5]
    const attitudes = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 66, 6]
    const pictures = [1, 2, 3]

    return <>
        <ul className="basis-[15%] grid grid-cols-3 gap-8 h-min">
            <h6 className="font-bold col-span-full">
                لیست کل نژاد ها
            </h6>
            {items?.map((i, index) =>
                <li key={index} className=''>
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
                    <li key={index} className="relative h-full">
                        <Image src={'/Images/Doberman.jpg'} className='object-cover rounded' alt={"pic"} layout='fill' />
                    </li>
                )}
            </ul>
        </div>
    </>
}

export default MenuItems