import { DestinationService } from "@/app/services/destinationService";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{ id: string }>;
}

const service = new DestinationService();


export default async function DestinationPage({params,}: Props ) {
    const { id } = await params
    const destination = service.getOne(id);

    if (!destination)
        notFound();
    
    return (
        <>
            <section className="flex flex-col items-center px-5">
                <div className="max-2xl:w-[80%]">
                    <h2 className="pt-30 mb-5 text-3xl text-center">{destination.title}</h2>
                    <img src={destination.imageUrl} alt={destination.imageAlt} className="w-125 mb-5 mx-auto"/>
                    <p className="max-2xl:px-5">{destination.description}</p>
                </div>
            </section>

        </>
    );
}