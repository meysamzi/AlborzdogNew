import Image from "next/image"

const MenuItemsChildrenContent = ({ fakecontent }) => {

    const attitudes = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 66, 6]
    const pictures = [1, 2, 3]
    console.log(fakecontent);

    return <>
        <ul className="basis-[80%] flex flex-col gap-8">
            {attitudes?.map((i, index) =>
                <li key={index} className={`${index === 0 && "font-bold"}`}>
                    {fakecontent?.content}
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
    </>
}

export default MenuItemsChildrenContent