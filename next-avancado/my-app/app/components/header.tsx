import Link from 'next/link';
const logo = '/icon.svg';

export function Header() {
    return (
        <header className="bg-gray-100 w-full box-border">
            <div className="max-w-7xl min-w-0 mx-auto max-xl:mx-10 my-5 flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-red-600 text-2xl">Tsuzuki Tech</h1>
                </Link>
                <Link href="/">
                    <img
                        src={logo}
                        alt="Logo Tsuzuki Tech"
                        className="size-8"
                    />
                </Link>
            </div>
        </header>
    );
}
