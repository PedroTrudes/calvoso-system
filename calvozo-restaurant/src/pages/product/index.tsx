import { ProductList } from '../../components/ProductList';
import './styles.css';

export function Product() {
    return(
        <div className="containerProductPage">
            <div className="productPageHeader">
                <h2>Produtos registrados</h2>
                <button>Novo produto</button>
            </div>
            <div className="productPageContainerList">
                <ProductList />
            </div>
        </div>
    )
}