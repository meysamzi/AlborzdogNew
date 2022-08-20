import Image from "next/image"
import { useState } from "react"
import { ShapeContent } from "Dogs"

const Shape = () => {

    const [head, sethead] = useState(true)
    const [legs, setlegs] = useState(false)
    const [tail, settail] = useState(false)
    const [shape, setshape] = useState(false)
    const [skale, setskale] = useState(false)

    const items = [1, 2, 3, 4, 5]

    return <section>
        <div className="flex gap-10 p-4 shadow max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-auto my-10 lg:my-28">
            <div className="basis-[60%]">
                <ShapeContent />
            </div>
            <div className="basis-[40%] relative h-[300px]">
                <Image src={'/Images/Doberman.jpg'} alt={'Pic'} className='object-cover rounded' layout="fill" />
                {items?.map((i, index) =>
                    <div key={index} className={`absolute ${index === 0 && "left-[5%] top-[5%]"} ${index === 1 && "top-[20%] right-[20%]"} ${index === 2 && "top-[40%] right-[50%]"} 
                    ${index === 3 && "top-[60%] right-[80%]"} ${index === 4 && "top-[80%] right-[10%]"} flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#00000088] text-white`}>
                        <span>{i}</span>
                    </div>
                )}
            </div>
        </div>
    </section>
}

export default Shape