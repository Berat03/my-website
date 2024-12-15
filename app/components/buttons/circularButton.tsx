import Link from 'next/link';
import Image from 'next/image';
import './buttons.css'
interface CircularButtonInterface {
    href: string;
    image: string;
}

export default function CircularButton({ href, image }: CircularButtonInterface) {
    return (
        <Link href={href} className="inline-block circleButtons">
            <Image
                src={image}
                alt="Wii Button"
                width={100}
                height={100}
                className="block cursor-pointer"
            />
        </Link>
    );
}
