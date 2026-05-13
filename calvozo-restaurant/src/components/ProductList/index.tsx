import { CardsProducts } from '../Cards/CardsProducts';
import './styles.css';
import type { Product }  from '../../types/Product';

interface ProductListProps {
    products: Product[];
}

export function ProductList({ products } : ProductListProps){

    return(
        <div className='containerProductList'>
            <div className='productList'>
                {products.length > 0 ? (
                    products.map((product) => (
                        <CardsProducts id={product.id} nome={product.nome} descricao={product.descricao} categoria={product.categoria} imagem={product.imagem} disponivel={product.disponivel} variant={product.variacoes}/>

                ))) : (
                    <span>Ainda não temos produtos registrados nessa categoria!</span>
                )}
            </div>
        </div>
    )
}