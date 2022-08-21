import Image from "next/image"
import { useState } from "react"
import { ShapeContent } from "Dogs"

const Shape = () => {

    const fakedata = [
        {
            id: 1,
            title: "test1",
            description: "test description1"
        },
        {
            id: 2,
            title: "test2",
            description: "test description2"
        },
        {
            id: 3,
            title: "test3",
            description: "test description3"
        },
    ]

    const [head, sethead] = useState(true)
    const [legs, setlegs] = useState(false)
    const [tail, settail] = useState(false)

    const items = [1, 2, 3]

    return <section>
        <div className="flex gap-10 p-4 shadow max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-auto my-10 lg:my-28">
            <div className="basis-[60%]">
                {head && <ShapeContent fakedata={fakedata[0]} />}
                {legs && <ShapeContent fakedata={fakedata[1]} />}
                {tail && <ShapeContent fakedata={fakedata[2]} />}
            </div>
            <div className="basis-[40%] relative h-[300px]">
                <Image src={'/Images/Doberman.jpg'} alt={'Pic'} className='object-cover rounded' layout="fill" />
                {items?.map((i, index) =>
                    <div key={index} onClick={() => {
                        { index === 0 && (sethead(true), setlegs(false), settail(false)) } { index === 1 && (setlegs(true), sethead(false), settail(false)) }
                        { index === 2 && (settail(true), sethead(false), setlegs(false)) }
                    }} className={`absolute ${index === 0 && "left-[5%] top-[5%]"} ${index === 1 && "top-[20%] right-[20%]"} ${index === 2 && "top-[40%] right-[50%]"} 
                    ${index === 3 && "top-[60%] right-[80%]"} ${index === 4 && "top-[80%] right-[10%]"} flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#000000cb] text-white cursor-pointer hover:bg-red-600`}>
                        <span>{i}</span>
                    </div>
                )}
            </div>
        </div>
    </section>
}

export default Shape