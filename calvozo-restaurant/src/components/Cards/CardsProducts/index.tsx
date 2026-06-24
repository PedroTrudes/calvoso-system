import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '../../../utils/formatCurrency';
import './styles.css';


interface Props {
    id: number;
    nome: string;
    descricao: string;
    categoria: {
        id: number;
        name: string;
    };
    disponivel: boolean;
    variant: {
        id: number;
        name: string;
    }[];
}

export function CardsProducts(
    {id, nome, descricao, categoria, disponivel, variant}: Props) 
    {
    const navigate = useNavigate();
    const imagem = "https://areademulher.r7.com/wp-content/uploads/2022/03/feijoada-receita-completa-tradicional.jpg";
    const preco = 11;
    return(
        <div className={disponivel ? 'cardProduct': 'cardProduct cardUnavailable'} onClick={() => navigate(`/produto/${id}`)}>
            <div className="containerProductHeader">
                <span className="badgeCategory">{categoria.name}</span>
                <img src={imagem} alt="" />
            </div>
            <div className="containerProductDescription">
                <span>{nome}</span>
                <p>{descricao}</p>
            </div>
            <div className="containerProductPrice">
                <span>Medidas</span>
                {variant?.map((item) => (
                    <div key={item.id} className="containerVariationProduct">
                        <span>{item.name.toUpperCase()}</span>
                        <span>{formatCurrency(preco)}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}