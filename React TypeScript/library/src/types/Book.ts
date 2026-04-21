export type BookStatus = "Lido" | "Não lido";

export type BookType = {
    _id: string,
    title: string,
    status: BookStatus,
    author: string
}

export type CreateBookType = {
    title: string,
    status: BookStatus,
    author: string
}