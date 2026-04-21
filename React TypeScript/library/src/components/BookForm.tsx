import styled from "styled-components";
import type { BookStatus, CreateBookType } from "../types/Book";
import styles from "./BookForm.module.css";
import { useForm } from "react-hook-form";

type Props = {
    addBook: (book: CreateBookType) => void
}

type FormData = {
    book: CreateBookType
};

const Span = styled.span`
    color: red;
    font-size: 24px;
    font-weight: 700;
`

const options: BookStatus[] = [
    "Não lido",
    "Lido"
]

function BookForm({addBook}: Props) {
    const {
        register, 
        handleSubmit, 
        formState: {errors},
        reset
    } = useForm<FormData>();

    const submit = ({book}: FormData) => {
        addBook(book);
        reset();
    }

    return(
        <>
            <h2 className={styles.form_title}>Cadastrar Livro</h2>
            <form className={styles.form_control} onSubmit={handleSubmit(submit)}>
                <div className={styles.form_input_control}>
                    <label>Título<Span>*</Span></label>
                    <input defaultValue={""} 
                    {...register("book.title", 
                        {
                            required: "Title required!", 
                            minLength: {
                                value: 3,
                                message: "Title must exceed 2 characters"
                            }
                        }
                    )}/>
                    {errors.book?.title && (<p>{errors.book.title.message}</p>)}
                </div>
                <div className={styles.form_input_control}>
                    <label>Autor<Span>*</Span></label>
                    <input {...register("book.author", 
                        {
                            required: "Author required!", 
                            minLength: {
                                value: 3,
                                message: "Author must exceed 2 characters"
                            }
                        }
                    )}/>
                    {errors.book?.author && <p>{errors.book.author.message}</p>}
                </div>
                <div className={styles.form_input_control}>
                    <label>Status</label>
                    <select {...register("book.status")}>
                        {
                            options.map(option => 
                                <option key={option} value={option}>{option}</option>
                            )
                        }
                    </select>
                </div>
                <button className={styles.form_button}>Cadastrar</button>
            </form>
        </>
    )
}

export default BookForm;