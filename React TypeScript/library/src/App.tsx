import { useEffect, useState } from 'react'
import type { BookType, InsertBookType } from './types/Book'
import BookForm from './components/BookForm'
import BookList from './components/BookList'
import { bookService } from './services/BookService'

function App() {
  const [books, setBooks] = useState<BookType[]>([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await bookService.getAll();
        setBooks(data);
      } catch(error) {
        console.log(error)
      }
    }
    fetchBooks();
  }, [])

  const addBook = async(book: InsertBookType): Promise<void> => {
    try {
      const data = await bookService.create(book);
      setBooks(prev => [...prev, data])
    } catch(error) {
      console.log(error)
    }
  }

  const deleteBook = async (id: string): Promise<void> => {
    try {
      await bookService.delete(id);
      setBooks(prev => [...prev.filter(book => book._id !== id)])
    } catch(error) {
      console.log(error)
    }
  }

  const updateBookStatus = async (id: string, newBook: InsertBookType): Promise<void> => {
    try {
      await bookService.update(id, newBook);
      setBooks(prev => prev.map(book => book._id === id ? {...newBook, _id: id} : book ))
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
      <BookForm addBook={addBook}/>
      <BookList books={books} deleteBook={deleteBook} updateBookStatus={updateBookStatus}/>
    </>
  )
}

export default App