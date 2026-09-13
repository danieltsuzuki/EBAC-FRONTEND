type TypeHeader = {
  title: string;
};

export default function Footer({ title }: TypeHeader) {
  return (
    <footer>
      <div className="container mx-auto max-md:px-4 h-10">
        <small className="flex items-center h-full">
          &copy; {new Date().getFullYear() + " " + title}
        </small>
      </div>
    </footer>
  );
}
