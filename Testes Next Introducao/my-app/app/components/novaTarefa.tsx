"use client";

import { FormEvent, useState } from "react";
import { TypeItem } from "../types/items.type";

type PropsNovaTarefa = {
  className?: string;
  onAddItem: (item: TypeItem) => void;
};

export default function NovaTarefa({ className, onAddItem }: PropsNovaTarefa) {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim() === "") {
      setError("Por favor, insira um nome válido.");
      setName("");
      return;
    }

    onAddItem({ id: Date.now().toString(), name });
    setName("");
    setError("");
  };

  const handleCancel = () => {
    setName("");
    setError("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setError("");
  };

  return (
    <fieldset
      className={`container mx-auto max-md:px-4 flex flex-col gap-4 border border-gray-300 rounded-md p-4 max-h-44 ${className}`}
    >
      <legend className={`text-lg font-medium text-gray-900 underline`}>
        Adicionar Item
      </legend>

      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <label htmlFor="name" className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">
            Nome* <small className="text-red-400 font-bold">{error}</small>
          </span>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-300 rounded-md p-2"
            onChange={onChange}
            value={name}
          />
        </label>

        <div className="flex justify-end gap-2">
          <button className="bg-green-500 text-white rounded-md py-2 px-4 hover:bg-green-800 transition-colors font-bold">
            Salvar
          </button>

          <button
            className="bg-red-500 text-white rounded-md py-2 px-4 hover:bg-red-800 transition-colors font-bold"
            type="button"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </div>
      </form>
    </fieldset>
  );
}
