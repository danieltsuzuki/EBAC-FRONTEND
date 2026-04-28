import { randomUUID } from "crypto";
import Link from "next/link";

type Links = {
    id: string,
    path: string,
    value: string
}

type Props = {
    title: string
}

export default function Header({title}: Props) {

    const links:Links[] = [
        {
            "id": randomUUID(),
            "path": "/",
            "value": "Home"
        },
        {
            "id": randomUUID(),
            "path": "/destinations",
            "value": "Destinos"
        },
    ]

    const hoverStyle = "hover:text-gray-400"

    const navStyle = "bg-red-700 flex justify-between px-10 py-5 text-xl font-semibold fixed top-0 w-full z-50"

    return (
        <nav className={navStyle}>
            <h1 className={hoverStyle}>
                <Link href={links[0].path}>
                    {title}
                </Link>
            </h1>
            <ul className="list-none flex gap-2">
                {
                    links.map(link => 
                        <li key={link.id}>
                            <Link href={link.path} className={hoverStyle}>
                                {link.value}
                            </Link>
                        </li>
                    )
                }
                
            </ul>
        </nav>
    );
}