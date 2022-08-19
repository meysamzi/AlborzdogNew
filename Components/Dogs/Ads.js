import Image from "next/image"

const Ads = () => {

    const items = [1, 2, 3, 4]

    return <section>
        <div className="flex rounded max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-auto my-10 lg:my-28">
            <ul className="basis-[60%] flex flex-col items-center gap-6 bg-red-600 text-white p-4 rounded-r">
                {items?.map((i, index) =>
                    <li key={index}>
                        <span>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        </span>
                    </li>
                )}
            </ul>
            <div className="basis-[40%] relative h-[250px]">
                <Image src={'/Images/Doberman.jpg'} className='object-cover rounded-l' alt={"Pic"} layout="fill" />
            </div>
        </div>
    </section>
}

export default Ads