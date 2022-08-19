import SocialNetworks from "./SocialNetworks"

const SubFooter = () => {

    return <footer className="bg-[#171717] before:border-t-[1px] before:border-[#7f7f7f] before:block before:mx-4 lg:before:mx-0">
        <div className="flex flex-col lg:flex-row gap-6 items-center py-6 lg:py-8 max-w-7xl mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-auto text-xs md:text-sm lg:text-base">
            <div className="lg:basis-[70%] text-[#7f7f7f]">
                <span><span className="text-red-600">طراحی توسط </span> میثم زینالی</span>
            </div>
            <ul className="basis-[30%] flex gap-x-4 justify-end text-red-600">
                <SocialNetworks />
            </ul>
        </div>
    </footer>
}

export default SubFooter