import type { BookType, InsertBookType } from "../types/Book";
import BookItem from "./BookItem";

type Props = {
    books: BookType[]
    deleteBook: (id: string) => void,
    updateBookStatus: (id: string, newBook: InsertBookType) => void
}

function BookList({books, deleteBook, updateBookStatus}: Props) {
    if (books.length === 0) return <p>Nenhum livro encontrado</p>
    return(
        <ul>
            {
                books.map(book => 
                    <BookItem key={book._id} book={book} deleteBook={deleteBook} updateBookStatus={updateBookStatus}/>
                )
            }
        </ul>
    )
}

export default BookList;