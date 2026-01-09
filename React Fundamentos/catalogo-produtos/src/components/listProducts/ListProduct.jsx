import Product from "./Product/Product";
import Form from './form/Form'
import { useEffect, useState } from "react";


function ListProduct() {

    function createId() {
        if (produtos.length === 0)
            return 1
        return produtos[produtos.length - 1].id + 1;
    }

    function handleAddProduct(novoProduto) {
        const produtoComId = {
            ...novoProduto,
            id: createId(),
            preco: Number(novoProduto.preco),
        };

        setProdutos([...produtos, produtoComId])
    }

    function handlerDeleteProduct(produtoARemover) {
        produtos.pop(produtoARemover);
        setProdutos([...produtos]);
    }

    // useEffect(() => {

    // }, [produtos])

    const [produtos, setProdutos] = useState([
        { id: 1, nome: "Playstation 5", preco: 3533.07, descricao: "Console Sony PlayStation 5, SSD 825GB, Controle Sem Fio DualSense + 2 Jogos Digitais, Edição Digital", imagem: "https://images2.kabum.com.br/produtos/fotos/989702/console-sony-playstation-5-ssd-825gb-controle-sem-fio-dualsense-2-jogos-digitais-edicao-digital_1765487654_gg.jpg" },
        { id: 2, nome: "Notebook Lenovo", preco: 3099.00, descricao: 'Notebook Lenovo IdeaPad Slim 3, AMD Ryzen 7 7735HS, 16GB RAM, AMD Radeon Graphics, SSD 512GB, 15.3" WUXGA, Linux, Luna Grey - 83MMS00000', imagem: "https://images7.kabum.com.br/produtos/fotos/955187/notebook-lenovo-ideapad-slim-3-amd-ryzen-7-7735hs-16gb-ram-amd-radeon-graphics-ssd-512gb-15-3-wuxga-linux-luna-grey-83mms00000_1765997308_gg.jpg" },
        { id: 3, nome: "Robô Aspirador", preco: 899.90, descricao: "Robô Aspirador e Passa Pano KABUM! smart 700 - 5 Modos de Limpeza, Mapeamento a Laser 3D, Base de Carregamento - Bivolt - Branco - KBSF006", imagem: "https://images1.kabum.com.br/produtos/fotos/155321/aspirador-de-po-robo-ir-360-kabum-smart-700-branco_1628769488_gg.jpg" },
    ]);

    return (
        <>
            <Form handlerAddProduct={handleAddProduct} />

            <div className="grid gap-20 my-80 mx-auto px-20">
                {produtos.map(
                    p => <Product key={p.id} produto={p} handlerDeleteProduct={handlerDeleteProduct}/>
                )}
            </div>
        </>
    );
}

export default ListProduct;