import Card from "../components/card";
import { Destination } from "../types/types";
import { DestinationService } from "../services/destinationService";

const service = new DestinationService();

export default function Home() {
    const destinations: Destination[] = service.getAll();

    return (
        <>
        <div className="pt-30 flex flex-col justify-center items-center text-center w-7xl mx-auto">
            <div className="grid grid-cols-3 gap-4">
                {
                    destinations.map(destination => 
                        <Card key={destination.id} destination={destination}/>)
                }
            </div>
        </div>
        </>
    )
}