import Image from "next/image"

const History = () => {

    return <section>
        <div className="flex gap-14 rounded p-4 shadow text-xs md:text-sm lg:text-base text-justify max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-auto my-10 lg:my-28">
            <div className="basis-[60%] flex flex-col gap-8 leading-8">
                <h6 className="font-bold">
                    لورم ایپسوم متن ساختگی
                </h6>
                <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                </p>
            </div>
            <div className="basis-[40%] relative h-[300px]">
                <Image src={'/Images/Doberman.jpg'} alt={'Pic'} className='object-cover rounded' layout="fill" />
            </div>
        </div>
    </section>
}

export default History