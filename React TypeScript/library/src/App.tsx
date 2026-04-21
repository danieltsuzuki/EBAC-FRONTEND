import { useEffect, useState } from 'react'
import type { BookType, CreateBookType } from './types/Book'
import BookForm from './components/BookForm'
import BookList from './components/BookList'
import Notification from './components/Notification'
import { bookService } from './services/BookService'


function App() {
  const [books, setBooks] = useState<BookType[]>([])
  const [open, setOpen] = useState(false);

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

  const addBook = async(book: CreateBookType): Promise<void> => {
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

  const updateBookStatus = async (id: string, newBook: BookType): Promise<void> => {
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
      <Notification message={"asd"} setOpen={setOpen} open={open}/>
    </>
  )
}

export default App