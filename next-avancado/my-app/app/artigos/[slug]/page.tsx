import { getArtigoBySlug } from '@/services/artigosService';
import { Artigo } from '@/types/artigoType';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Props = {
    params: { slug: string };
};

export const dynamic = 'force-dynamic';

export const generateMetadata = async ({
    params,
}: Props): Promise<Metadata> => {
    const { slug } = await params;
    const artigo = getArtigoBySlug(slug);

    return {
        title: artigo.titulo,
        description: artigo.conteudoArtigo,
        openGraph: {
            title: artigo.titulo,
            description: artigo.conteudoArtigo,
            images: artigo.imageUrl,
        },
    };
};

export default async function Details({ params }: Props) {
    const { slug } = await params;
    const artigo: Artigo = getArtigoBySlug(slug);

    if (!artigo) return notFound();

    return (
        <>
            <div className="border container my-20 mx-auto flex flex-col justify-center items-center box-border">
                <Image
                    src={artigo.imageUrl}
                    alt={'Imagem que representa ' + artigo.imageUrl}
                    className="mb-5 size-auto"
                    width={400}
                    height={400}
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
