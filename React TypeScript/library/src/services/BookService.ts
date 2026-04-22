import axios from "axios";
import type { BookType, InsertBookType } from "../types/Book";

const API_BASE_URL = "https://crudcrud.com/api/89f1b1fb6a7646af82c236b7ab342b30";

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const bookService = {
    getAll: async (): Promise<BookType[]> => {
        const { data } = await api.get("/livros");
        return data;
    },

    create: async (book: InsertBookType) => {
        const { data } = await api.post("/livros", book);
        return data;
    },

    update: async (id: string, book: Partial<BookType>) => {
        const { data } = await api.put(`/livros/${id}`, book);
        return data;
    },

    delete: async (id: string) => {
        await api.delete(`/livros/${id}`);
    }
};