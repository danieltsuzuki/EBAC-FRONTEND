import Link from "next/link";
import { Destination } from "../types/types";

type Props = {
    destination: Destination
}
export default function Card({destination}: Props) {
    return (
        <div className="border-gray-300 rounded-lg p-5 m-2 bg-red-400">
            <div className="mb-3">
                <h2 className="text-2xl mb-2">{destination.title}</h2>
                <div>
                    <img src={destination.imageUrl} alt={destination.imageAlt} className="mx-auto"/>
                </div>
            </div>
            <Link href={`/destinations/${destination.id}` }>
                <button className={"rounded-lg bg-gray-700 hover:bg-gray-800 px-4 py-2 font-semibold cursor-pointer"}>Saiba mais</button>
            </Link>
        </div>
    )
}