import styled from 'styled-components'

const CardProduto = styled.div`
  border-radius: 20px;
  border: 1px solid black;
  display: flex;
  max-width: 300px;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
`

const Nome = styled.h2`
  font-size: 22px;
  font-weight: 800;
  margin: 0;
  padding: 0;
`;

const Preco = styled.p`
  color: green;
  box-sizing: border-box;
  font-weight: 500;
  padding: 0;
`;

const Bottao = styled.button`
  background-color: ${props => props.adicionado ? '#198754' : '#6c757d'};
  border-radius: 4px;
  border: 0px;
  padding: 4px 8px;
  color: white;
  font-weight: 600;

  &:hover {
    background-color: ${props => props.adicionado ? '#199911' : '#5c5570'};
  }
`

const produtos = [
    {
      "nome": "Arroz 5kg",
      "preco": 30.00,
      "adicionado": false
    },
    {
      "nome": "Refrigerante 1L",
      "preco": 7.99,
      "adicionado": true
    }
  ];

function App() {
  return (
    <>
      {
        produtos.map((p, index) => 
          <CardProduto key={index}>  
            <Nome>{p.nome}</Nome>

            <preco>R$ {p.preco.toFixed(2)}</preco>

            <Bottao adicionado={p.adicionado}>
              Adicionar ao carrinho
            </Bottao>
          </CardProduto>
        )
      }
      
    </>
  )
}

export default App
