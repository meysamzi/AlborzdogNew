import Image from "next/image"
import { KeepingContent } from "Dogs";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Keeping = () => {

    return <section>
        <div className="flex gap-10 shadow p-4 max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-auto">
            <div className="basis-[30%] flex flex-col gap-8">
                <span className="font-bold">نگهداری</span>
                <div className="relative w-full h-[250px]">
                    <Image src={'/Images/Doberman.jpg'} alt={"pic"} className='object-cover rounded' layout="fill" />
                </div>
            </div>
            <div className="basis-[70%] flex gap-4">
                <div className="flex flex-col gap-8 group">
                    <div className="flex flex-col gap-4">
                        <FavoriteIcon />
                        <span>لورم ایپسوم</span>
                    </div>
                    <div className="hidden group-hover:block">
                        <KeepingContent />
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Keeping