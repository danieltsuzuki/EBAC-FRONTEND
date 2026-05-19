import { Artigo } from '@/types/artigoType';
import Link from 'next/link';

type Props = {
    artigo: Artigo;
};

export function Card({ artigo }: Props) {
    const artigoSplit: string = normalizarTexto(artigo.conteudoArtigo);

    return (
        <Link href={`artigos/` + artigo.slug} className="min-w-0">
            <div className="border p-5 rounded-2xl flex flex-col items-center justify-center h-105">
                <img
                    src={artigo.imageUrl}
                    alt={`Imagem que representa ` + artigo.titulo}
                    className="h-30 mb-5"
                />
                <h2 className="text-lg">{artigo.titulo}</h2>
                <p className="mx-2 text-justify">{artigoSplit}</p>
            </div>
        </Link>
    );
}

function normalizarTexto(texto: string): string {
    const artigoSplit: string = texto.split(' ', 20).join(' ');
    if (artigoSplit.endsWith(',')) return artigoSplit.slice(0, -1);
    return artigoSplit;
}
