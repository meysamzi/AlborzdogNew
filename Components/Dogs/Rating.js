import StarIcon from '@mui/icons-material/Star';

const Rating = () => {

    const items = [1, 2, 3, 32, 5, 5]

    const stars = [1, 2, 3, 4]

    return <section>
        <div className="flex flex-col gap-8 max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-auto">
            {items?.map((i, index) =>
                <div key={index} className={`flex gap-4 items-center py-6 px-4 rounded shadow ${index === 0 && "bg-black text-white"}`}>
                    <div className="basis-[50%]">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    </div>
                    <ul className='basis-[50%] flex gap-2 justify-end'>
                        {stars.map((i, index) =>
                            <li key={index}>
                                <StarIcon />
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    </section>
}

export default Rating