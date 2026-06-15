import { useParams } from "react-router-dom";
import "./styles.css";

export function EditProduct() {
  const { id } = useParams();
  const productFake = {
    id: 1,
    nome: "Marmita Executiva",
    descricao: "Arroz, feijão, bife grelhado e batata frita.",
    categoria: "Prato feito",
    imagem:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    disponivel: true,

    variacoes: [
      {
        tamanho: "p",
        preco: 18,
        disponivel: false,
      },
      {
        tamanho: "m",
        preco: 24,
        disponivel: true,
      },
      {
        tamanho: "g",
        preco: 31,
        disponivel: false,
      },
    ],
  };

  return (
    <div className="containerProductEdit">
      <div className="containerTitlePage">
        <h1>Editar produto</h1>
      </div>
      <div className="containerProductInfos">
        <div className="containerProductInfosImage">
          <img src={productFake.imagem} />
        </div>
        <div className="containerProductInfosText">
          <div className="containerProductInfosTitle">
            <span className="nameProduct">{productFake.nome}</span>
            <span className="categoryProduct">{productFake.categoria}</span>
          </div>
          <div className="containerProductInfosDescription">
            
            <p className="descriptionProduct">{productFake.descricao}</p>
          </div>
          <div className="containerProductInfosVariation">
            <div className="containerVariation">
              {productFake.variacoes.map((item) => (
                <div
                  className={`variationItem ${item.disponivel ? "" : "variationDisable"}`}
                  key={item.tamanho}
                >
                  {item.disponivel === true}
                  <div>
                    <span>{item.tamanho.toUpperCase()}</span>
                  </div>
                  <div>
                    <span>{item.preco}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="containerProductActions">
            <button>Desativar</button>
            <button>Editar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
