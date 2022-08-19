import Link from 'next/link';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialNetworks = () => {

    const style = "transition-[transform] duration-[0.1s] hover:-translate-y-1 [&>a>svg]:text-lg [&>a>svg]:lg:text-xl"

    const items = [1, 2, 3, 4]

    return <>
        <li>
            <Link href={'/'}>
                <a>
                    <TwitterIcon />
                </a>
            </Link>
        </li>
        <li>
            <Link href={'/'}>
                <a>
                    <YouTubeIcon />
                </a>
            </Link>
        </li>
        <li>
            <Link href={'/'}>
                <a>
                    <TelegramIcon />
                </a>
            </Link>
        </li>
        <li>
            <Link href={'/'}>
                <a>
                    <WhatsAppIcon />
                </a>
            </Link>
        </li>
        <li>
            <Link href={'/'}>
                <a>
                    <InstagramIcon />
                </a>
            </Link>
        </li>
    </>
}

export default SocialNetworks
