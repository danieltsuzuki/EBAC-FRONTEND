import { Destination } from "../types/types";

export class DestinationService {

    destinations: Destination[] = [
            {
                id: "brasiliaID",
                title: "Brasília",
                imageUrl: "https://r-xx.bstatic.com/xdata/images/city/170x136/653440.jpg?k=1151a6e0ea877a1822b1e5dacc320f5269f7746c264d9bc42e2cdeea8264b622&o=",
                imageAlt: "Imagem de Brasília",
                description: "🌆 Brasília Descubra uma cidade única no mundo, onde arquitetura futurista e história se encontram! Em Brasília, você vai caminhar por cenários que parecem obras de arte a céu aberto, com monumentos icônicos e pores do sol inesquecíveis. Ideal para quem busca cultura, modernidade e experiências diferentes de tudo que já viu."
            },
            {
                id: "belemID",
                title: "Belém",
                imageUrl: "https://r-xx.bstatic.com/xdata/images/city/170x136/177588.jpg?k=12e41d0dd68908dba57921b9a0e2230281e2fcf8e15a836d4f9b5bed1cf80859&o=",
                imageAlt: "Imagem de Belém",
                description: "🌿 Belém Mergulhe nos sabores e cores da Amazônia! Belém é um convite irresistível para explorar mercados vibrantes, provar uma gastronomia exótica e viver a energia de uma das culturas mais autênticas do Brasil. Aqui, cada esquina conta uma história e cada prato é uma descoberta."
            },
            {
                id: "salvadorID",
                title: "Salvador",
                imageUrl: "https://q-xx.bstatic.com/xdata/images/city/170x136/653655.jpg?k=1cb0973d5385825a0bbbf8361acdd48af2279ed3f4dca409263a618dc6c3860c&o=",
                imageAlt: "Imagem de Salvador",
                description: "🎶 Salvador Prepare-se para sentir o Brasil em sua essência! Salvador encanta com suas praias paradisíacas, música contagiante e um centro histórico cheio de vida e tradição. É o destino perfeito para quem quer alegria, cultura e momentos inesquecíveis à beira-mar."
            },
            {
                id: "ouroPretoID",
                title: "Ouro Preto",
                imageUrl: "https://r-xx.bstatic.com/xdata/images/city/170x136/653591.jpg?k=47ae499368e74d5085c491e236a00e997e858ce80a39c05d9eff9f54ee084619&o=",
                imageAlt: "Imagem de Ouro Preto",
                description: "⛪ Ouro Preto Viaje no tempo e se encante com o charme colonial de Ouro Preto! Suas ruas de pedra, igrejas históricas e paisagens montanhosas criam um cenário romântico e cheio de história. Um destino perfeito para quem ama cultura, tranquilidade e experiências autênticas."
            },
        ]

    getOne = (id: string): Destination | undefined => {
        const destination = this.destinations.find(destination => destination.id === id);
        console.log(this.destinations);
        console.log("DESTINATION: " + destination);
        return destination;
    } 

    getAll = (): Destination[] => {
        return this.destinations;
    }
}