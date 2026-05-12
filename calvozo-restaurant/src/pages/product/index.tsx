import { ButtonLink } from '../../components/Buttons/ButtonLink';
import { ProductList } from '../../components/ProductList';
import './styles.css';

export function Product() {
    return(
        <div className="containerProductPage">
            <div className="productPageHeader">
                <h2>Produtos registrados</h2>
                <ButtonLink textButton='Novo produto' link='/produto/registrar'/>
            </div>
            <div className="productPageContainerList">
                <ProductList />
            </div>
        </div>
    )
}