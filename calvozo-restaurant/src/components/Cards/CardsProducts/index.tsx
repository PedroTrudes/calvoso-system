import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '../../../utils/formatCurrency';
import './styles.css';

interface VariantProduct{
    tamanho: string; 
    preco: number;
}

interface CardProductProps{
    id: number;
    nome: string;
    descricao: string;
    categoria: string;
    imagem: string;
    disponivel: boolean;
    variant: VariantProduct[];
}

export function CardsProducts({id, nome, descricao, categoria, imagem, disponivel, variant}: CardProductProps) {
    const navigate = useNavigate();

    console.log(variant.map((item) => {
        console.log(item);
    }) )
    return(
        <div className={disponivel ? 'cardProduct': 'cardProduct cardUnavailable'} onClick={() => navigate(`/produto/${id}`)}>
            <div className="containerProductHeader">
                <span className="badgeCategory">{categoria}</span>
                <img src={imagem} alt="" />
            </div>
            <div className="containerProductDescription">
                <span>{nome}</span>
                <p>{descricao}</p>
            </div>
            <div className="containerProductPrice">
                <span>Medidas</span>
                {variant.map((item) => (
                    <div className="containerVariationProduct">
                        <span>Tamanho: {item.tamanho.toUpperCase()}</span>
                        <span>Valor: {formatCurrency(item.preco)}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}