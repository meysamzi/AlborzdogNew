import Image from "next/image"

const Attitude = () => {

    const items = [1, 2, 3, 4, 5, 5]

    return <section>
        <div className="flex flex-col gap-8 max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-auto my-10 lg:my-28">
            <div className="flex gap-8">
                <div className="basis-[50%] relative h-[200px]">
                    <Image src={'/Images/Doberman.jpg'} className='object-cover rounded' alt={"pic"} layout="fill" />
                </div>
                <ul className="basis-[50%] flex flex-col items-center gap-10">
                    {items?.map((i, index) =>
                        <li key={index}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        </li>
                    )}
                </ul>
            </div>
        </div>
    </section>
}

export default Attitude