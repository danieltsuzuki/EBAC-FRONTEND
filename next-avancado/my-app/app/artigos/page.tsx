import { getAllArtigos } from '../services/artigosService';
import { Card } from '@/components/card';
import { Metadata } from 'next';
import { Pagination } from '@/components/pagination';
import { Artigo } from '@/types/artigoType';

type Props = {
    searchParams: {
        page?: string;
    };
};

const title = 'Tsuzuki Tech';
const description =
    'Desenvolvimento moderno, programação e tecnologia na prática. Conteúdos sobre Next.js, Flutter, Java, arquitetura backend, cloud, dicas de carreira e projetos reais para desenvolvedores que querem evoluir continuamente.';

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: ['icon.svg'],
        },
    };
};

export const dynamic = 'force-static';

export default async function List({ searchParams }: Props) {
    const artigos: Artigo[] = getAllArtigos();

    const currentPage = Number(searchParams.page) || 1;

    const itemsPerPage = 8;

    const totalPages = Math.ceil(artigos.length / itemsPerPage);

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const artigosPaginados = artigos.slice(start, end);

    return (
        <div className="max-w-7xl min-w-0 mx-auto max-xl:mx-10 my-10 text-center box-border">
            <h1 className="text-xl">ARTIGOS</h1>
            <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {artigosPaginados.map((artigo) => (
                    <Card key={artigo.slug} artigo={artigo} />
                ))}
            </div>

            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
    );
}
