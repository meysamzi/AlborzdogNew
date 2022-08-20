import Image from "next/image"

const Shape = () => {

    const items = [1, 2, 3, 4, 5]

    return <section>
        <div className="flex gap-10 p-4 shadow max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-auto my-10 lg:my-28">
            <div className="basis-[60%] flex flex-col gap-8 text-justify leading-7 lg:leading-8">
                <h6 className="font-bold">
                    لورم ایپسوم متن ساختگی با تولید
                </h6>
                <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                </p>
            </div>
            <div className="basis-[40%] relative h-[300px]">
                <Image src={'/Images/Doberman.jpg'} alt={'Pic'} className='object-cover rounded' layout="fill" />
                {items?.map((i, index) =>
                    <div className={`absolute ${index === 0 && "left-0"} flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[black] text-white`}>
                        <span>{index}</span>
                    </div>
                )}
            </div>
        </div>
    </section>
}

export default Shape