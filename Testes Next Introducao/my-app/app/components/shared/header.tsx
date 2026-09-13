type TypeHeader = {
  title: string;
};

export default function Header({ title }: TypeHeader) {
  return (
    <header className="h-15 flex items-center">
      <nav className="container mx-auto max-md:px-4">
        <span className="h-full">{title}</span>
      </nav>
    </header>
  );
}
