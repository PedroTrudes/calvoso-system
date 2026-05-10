import { formatCurrency } from '../../../utils/formatCurrency';
import './styles.css';


interface CardProductProps{
    nome: string;
    descricao: string;
    preco: number;
    categoria: string;
    imagem: string;
}

export function CardsProducts({nome, descricao, preco, categoria, imagem}: CardProductProps) {
    return(
        <div className="cardProduct">
            <div className="containerProductHeader">
                <span className="badgeCategory">{categoria}</span>
                <img src={imagem} alt="" />
            </div>
            <div className="containerProductDescription">
                <span>{nome}</span>
                <p>{descricao}</p>
            </div>
            <div className="containerProductPrice">
                <span>{formatCurrency(preco)}</span>
            </div>
        </div>
    )
}