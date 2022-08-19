import Image from "next/image"

const Introduction = () => {

    return <section>
        <div className="flex gap-4 my-10 lg:my-28 max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-auto">
            <div>
                <div className="relative w-[85px] h-[85px]">
                    <Image src={'/Images/Doberman.jpg'} className='object-cover rounded-full' alt={"pic"} layout="fill" />
                </div>
            </div>
            <div className="basis-full flex flex-col gap-8">
                <h1 className="font-bold">
                    لورم ایپسوم متن ساختگی با
                </h1>
                <span>لورم ایپسوم متن ساختگی </span>
            </div>
        </div>
    </section>
}

export default Introduction