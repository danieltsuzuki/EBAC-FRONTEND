import { useCallback, useEffect, useState } from "react";
import type { TypeProduto, TypeProdutoSemId } from "../../types/TypeProduto";
import FormularioProduto from "./fomularioProduto/FormularioProduto";
import Produto from "./produto/Produto";

function ListaProdutos() {

    function criarId(): number {
            if (produtos.length === 0)
                return 1
            return produtos[produtos.length - 1].id + 1;
        }
    
        function handlerAdicionarProduto(novoProduto: TypeProdutoSemId) {
            const produtoComId = {
                ...novoProduto,
                id: criarId(),
                preco: Number(novoProduto.preco),
            };
    
            setProdutos([...produtos, produtoComId])
        };

        const handlerDeletarProduto = useCallback(
            (id: number) => {
                const produtosFiltrados = produtos.filter(produto => produto.id !== id);
                setProdutos(produtosFiltrados);
            }, []
        );
    
        useEffect(() => {
            setTimeout(() => {
                setProdutos([
                    { id: 1, nome: "Playstation 5", preco: 3533.07, descricao: "Console Sony PlayStation 5, SSD 825GB, Controle Sem Fio DualSense + 2 Jogos Digitais, Edição Digital", imagem: "https://images2.kabum.com.br/produtos/fotos/989702/console-sony-playstation-5-ssd-825gb-controle-sem-fio-dualsense-2-jogos-digitais-edicao-digital_1765487654_gg.jpg" },
                    { id: 2, nome: "Notebook Lenovo", preco: 3099.00, descricao: 'Notebook Lenovo IdeaPad Slim 3, AMD Ryzen 7 7735HS, 16GB RAM, AMD Radeon Graphics, SSD 512GB, 15.3" WUXGA, Linux, Luna Grey - 83MMS00000', imagem: "https://images7.kabum.com.br/produtos/fotos/955187/notebook-lenovo-ideapad-slim-3-amd-ryzen-7-7735hs-16gb-ram-amd-radeon-graphics-ssd-512gb-15-3-wuxga-linux-luna-grey-83mms00000_1765997308_gg.jpg" },
                    { id: 3, nome: "Robô Aspirador", preco: 899.90, descricao: "Robô Aspirador e Passa Pano KABUM! smart 700 - 5 Modos de Limpeza, Mapeamento a Laser 3D, Base de Carregamento - Bivolt - Branco - KBSF006", imagem: "https://images1.kabum.com.br/produtos/fotos/155321/aspirador-de-po-robo-ir-360-kabum-smart-700-branco_1628769488_gg.jpg" },
                ])
            }, 2000);
        }, [])
    
        const [produtos, setProdutos] = useState<TypeProduto[]>([]);


    return (
        <div>
            <h1 className="font-bold mb-3 text-gray-500">Adicione seus produtos</h1>
            <FormularioProduto handlerAdicionarProduto={handlerAdicionarProduto} />

            <div className="grid grid-cols-4 md:grid-cols-3 gap-5 my-20 box-border max-xl:mx-5">
                {
                    produtos.length === 0 ? <p className="text-center col-span-full text-7xl">Carregando...</p> :
                    produtos.map(
                        p => <Produto key={p.id} produto={p} handlerDeletarProduto={handlerDeletarProduto} />
                    )
                }
            </div>
        </div>
    );
}

export default ListaProdutos;