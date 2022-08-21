const ShapeContent = ({ fakedata }) => {

    return <div className="flex flex-col gap-8 text-justify leading-7 lg:leading-8">
        <h6 className="font-bold">
            {fakedata.title}
        </h6>
        <p>
            {fakedata.description}
        </p>
    </div>
}

export default ShapeContent