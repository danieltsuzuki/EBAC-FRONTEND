import type { BookType } from "../types/Book";
import styles from "./BookItem.module.css";
import pencil from "../assets/pencil.svg";
import trash from "../assets/trash.svg";
import styled from "styled-components";

type Props = {
    book: BookType,
    deleteBook: (id: string) => void,
    updateBookStatus: (id: string, newBook: BookType) => void
}

const Button = styled.button`
    background-color: ${props => props.color === "blue" ? "rgb(0, 148, 247)" : "rgb(247, 0, 0)"};
    border: none;
    border-radius: 50%;
    cursor: pointer;
    whidth: 45%;
    height: 45%;

    &:hover{
        background-color: ${props => props.color === "blue" ? "rgb(31, 125, 187)" : "rgb(146, 32, 32)"};
    }
`

const Image = styled.img`
    whidth: 90%;
    height: 90%;
    padding: 2px;
`



function BookItem({book, deleteBook, updateBookStatus}: Props) {

    const handleUpdate = (id: string, book: BookType) => {
        const newBook: BookType = {...book, _id: undefined, status: book.status === "Não lido" ? "Lido" : "Não lido" };
        updateBookStatus(id, newBook);
    }

    return(
        <>
            <li>
                <div className={styles.card}>
                    <div className={styles.info_card}>
                        <div><strong>ID: </strong>{book._id}</div>
                        <div><strong>Title: </strong>{book.title}</div>
                        <div><strong>Author: </strong>{book.author}</div>
                        <div><strong>Status: </strong>{book.status}</div>
                    </div>
                    <div className={styles.options}>
                        <Button color={"blue"} onClick={() => handleUpdate(book._id!, book)}>
                            <Image src={pencil} alt="Ícone de edição"/>
                        </Button>
                        
                        <Button color={"red"} onClick={() => deleteBook(book._id!)}>
                            <Image src={trash} alt="Ícone de exclusão" />
                        </Button>
                    </div>
                </div>
            </li>
        </>
    )
}

export default BookItem;