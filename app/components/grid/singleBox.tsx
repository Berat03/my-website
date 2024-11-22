import Image from "next/image";
import Link from "next/link";
import "./box.css"; // Import the CSS file

interface SingleBoxProps {
  id: string; // Renamed from `key` to `id`
  gifUrl: string;
  link: string; // Link to the route or external site
}

export default function SingleBox({ id, gifUrl, link }: SingleBoxProps) {
  const isExternal = link.startsWith("http://") || link.startsWith("https://");

  if (isExternal) {
    return (
      <a
        id={id} // Use `id` here
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="box"
      >
        <div className="relative w-full h-full">
          <Image
            src={gifUrl}
            alt=""
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
      </a>
    );
  }

  return (
    <Link href={link} id={id} className="box">
      <div className="relative w-full h-full">
        <Image
          src={gifUrl}
          alt=""
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
    </Link>
  );
}
