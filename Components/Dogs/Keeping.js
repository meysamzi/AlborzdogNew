import { useState } from "react";
import Image from "next/image"
import { KeepingContent } from "Dogs";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Keeping = () => {

    const fakedata = [
        {
            id: 1,
            description: "متن تستی 1"
        },
        {
            id: 2,
            description: "متن تستی 2"
        },
        {
            id: 3,
            description: "متن تستی 3"
        },
        {
            id: 4,
            description: "متن تستی 4"
        }
    ]

    const [first, setfirst] = useState(true)
    const [second, setsecond] = useState(false)
    const [third, setthird] = useState(false)
    const [fourth, setfourth] = useState(false)

    const items = [1, 2, 3, 4]

    return <section>
        <div className="flex gap-10 shadow p-4 max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-auto">
            <div className="basis-[30%] flex flex-col gap-8">
                <span className="font-bold">نگهداری</span>
                <div className="relative h-[250px]">
                    <Image src={'/Images/Doberman.jpg'} alt={"pic"} className='object-cover rounded' layout="fill" />
                </div>
            </div>
            <div className="basis-[70%] grid grid-cols-4 justify-items-center gap-4">
                {items?.map((i, index) =>
                    <div key={index} className='flex flex-col gap-4'>
                        <FavoriteIcon />
                        <span onClick={() => {
                            { index === 0 && (setfirst(true), setsecond(false), setthird(false), setfourth(false)) }
                            { index === 1 && (setsecond(true), setfirst(false), setthird(false), setfourth(false)) }
                            { index === 2 && (setthird(true), setsecond(false), setfirst(false), setfourth(false)) }
                            { index === 3 && (setfourth(true), setsecond(false), setthird(false), setfirst(false)) }
                        }} className='cursor-pointer'>تست</span>
                    </div>
                )}
                {first && <KeepingContent fakedata={fakedata[0]} />}
                {second && <KeepingContent fakedata={fakedata[1]} />}
                {third && <KeepingContent fakedata={fakedata[2]} />}
                {fourth && <KeepingContent fakedata={fakedata[3]} />}
            </div>
        </div>
    </section >
}

export default Keeping