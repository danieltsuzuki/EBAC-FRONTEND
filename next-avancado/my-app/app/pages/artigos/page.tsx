import { getAllArtigos } from '../../services/artigosService';
import { Card } from '@/components/card';
import { Metadata } from 'next';
import { Pagination } from '@/components/pagination';
import { Artigo } from '@/types/artigoType';

export const metadata: Metadata = {
    title: 'Tsuzuki Tech',
    description:
        'Desenvolvimento moderno, programação e tecnologia na prática. Conteúdos sobre Next.js, Flutter, Java, arquitetura backend, cloud, dicas de carreira e projetos reais para desenvolvedores que querem evoluir continuamente.',
};

type Props = {
    searchParams: Promise<{
        page?: string;
    }>;
};

export const dynamic = 'force-dynamic';

export default async function Lista({ searchParams }: Props) {
    const params = await searchParams;

    const artigos: Artigo[] = getAllArtigos();

    const currentPage = Number(params.page) || 1;

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
