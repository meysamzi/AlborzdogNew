import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const LinkGroup = () => {

    const items = [1, 2, 3, 4]

    return <ul className="grid grid-cols-2 gap-4 mt-6 [&>li>svg]:text-sm [&>li>svg]:md:text-base">
        {items?.map((i, index) => (
            <li key={index} className="flex gap-x-3 items-center">
                <ArrowBackIcon />
                <Link href={'/'}>
                    <a className="hover:text-red-600">تست</a>
                </Link>
            </li>
        ))}
    </ul>
}

export default LinkGroup