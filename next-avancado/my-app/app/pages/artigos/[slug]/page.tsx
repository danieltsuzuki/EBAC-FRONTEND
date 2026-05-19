import { getArtigoBySlug } from '@/services/artigosService';
import { Artigo } from '@/types/artigoType';
import { Metadata } from 'next';

type Props = {
    params: Promise<{ slug: string }>;
};

export const dynamic = 'force-static';

export default async function Home({ params }: Props) {
    const { slug } = await params;
    const artigo: Artigo = getArtigoBySlug(slug);

    const metadata: Metadata = {
        title: artigo.titulo,
        description: artigo.conteudoArtigo,
        publisher: artigo.dataPublicacao,
        authors: [{ name: artigo.autor }],
        keywords: [artigo.titulo, artigo.autor, artigo.conteudoArtigo],
    };

    return (
        <>
            <div className="border container my-20 mx-auto flex flex-col justify-center items-center box-border">
                <img
                    src={artigo.imageUrl}
                    alt={'imagem ilustrativa de ' + artigo.imageUrl}
                    className="size-100 mb-5"
                />
                <h1 className="text-xl mb-2">{artigo.titulo}</h1>
                <p className="mx-5 text-justify mb-5">
                    {artigo.conteudoArtigo}
                </p>
                <div className="w-full ml-5 mb-2">
                    <span>
                        <small>
                            {artigo.autor} / {artigo.dataPublicacao}
                        </small>
                    </span>
                </div>
            </div>
        </>
    );
}
