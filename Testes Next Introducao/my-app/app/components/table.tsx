import { TypeItem } from "../types/items.type";

type propsTable = {
  className?: string;
  items: TypeItem[];
  itemCount: number;
};

export default function Table({ className, items, itemCount }: propsTable) {
  return (
    <div className={`${className}`}>
      <h2 className="text-xl font-bold">Tabela de ITENS</h2>

      <table className="min-w-full border-collapse border border-gray-300 table-fixed text-center">
        <thead className="w-full">
          <tr>
            <th className="border border-gray-300 p-2 w-20">ID</th>
            <th className="border border-gray-300 p-2">Nome</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan={2} className="border border-gray-300 p-2 font-bold">
                Nenhum item encontrado.
              </td>
            </tr>
          ) : (
            items.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 p-2">{item.id}</td>
                <td className="border border-gray-300 p-2">{item.name}</td>
              </tr>
            ))
          )}
        </tbody>
        {itemCount !== 0 && (
          <tfoot>
            <tr>
              <td
                colSpan={2}
                className="border border-gray-300 p-2 font-bold text-start bg-gray-200"
              >
                Total de itens: {itemCount}
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}
