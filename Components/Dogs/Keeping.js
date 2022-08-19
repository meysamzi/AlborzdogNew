import Image from "next/image"
import { KeepingContent } from "Dogs";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Keeping = () => {

    const items = [1, 2, 3, 4]

    return <section>
        <div className="flex gap-10 shadow p-4 max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-auto">
            <div className="basis-[30%] flex flex-col gap-8">
                <span className="font-bold">نگهداری</span>
                <div className="relative w-full h-[250px]">
                    <Image src={'/Images/Doberman.jpg'} alt={"pic"} className='object-cover rounded' layout="fill" />
                </div>
            </div>
            <div className="basis-[70%] grid grid-cols-4 gap-4">
                {items?.map((i, index) =>
                    <div key={index} className="flex flex-col items-center gap-6 group">
                        <FavoriteIcon />
                        <span>لورم ایپسوم متن ساختگی </span>
                    </div>
                )}
                <p className="col-span-full">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                </p>
            </div>
        </div>
    </section>
}

export default Keeping