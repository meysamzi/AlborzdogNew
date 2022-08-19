import Image from "next/image"
import Link from "next/link"

const Collection = () => {

    const items = [1, 2, 3, 4, 56, 6, 4, 4, 4, 4, 4]

    return <section>
        <div className="grid grid-cols-3 gap-6 max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-auto my-10 lg:my-28">
            {items?.map((i, index) =>
                <Link href={'/'}>
                    <a key={index} className="flex flex-col items-center gap-6 rounded shadow p-4">
                        <div className="relative w-[100px] h-[100px]">
                            <Image src={'/Images/Doberman.jpg'} alt={"pic"} className='object-cover rounded-full' layout="fill" />
                        </div>
                        <h6 className="font-bold">لورم ایپسوم متن ساختگی </h6>
                    </a>
                </Link>
            )}
        </div>
    </section>
}

export default Collection