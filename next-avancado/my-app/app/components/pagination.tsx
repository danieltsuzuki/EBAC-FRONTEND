import Link from "next/link";

type Props = {
    currentPage: number;
    totalPages: number;
};

export function Pagination({
    currentPage,
    totalPages,
}: Props) {
    const path: string = '/pages/artigos';

    return (
        <div className="flex items-center justify-center gap-3 mt-10">

            {/* Previous */}
            {currentPage > 1 && (
                <Link
                    href={`${path}?page=${currentPage - 1}`}
                    className="border px-4 py-2 rounded-lg"
                >
                    Anterior
                </Link>
            )}

            {/* Números */}
            {Array.from({ length: totalPages }).map((_, index) => {

                const page = index + 1;

                const active = page === currentPage;

                return (
                    <Link
                        key={page}
                        href={`${path}?page=${page}`}
                        className={`
                            px-4 py-2 rounded-lg border
                            ${active ? "bg-white text-black" : ""}
                        `}
                    >
                        {page}
                    </Link>
                );
            })}

            {/* Next */}
            {currentPage < totalPages && (
                <Link
                    href={`${path}?page=${currentPage + 1}`}
                    className="border px-4 py-2 rounded-lg"
                >
                    Próxima
                </Link>
            )}

        </div>
    );
}