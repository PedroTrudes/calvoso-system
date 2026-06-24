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
                    products?.map((product) => (
                        <CardsProducts 
                        key={product.id} 
                        id={product.id}
                        nome={product.name}
                        descricao={product.description}
                        categoria={product.category}
                        disponivel={product.menu_active}
                        variant={product.product_variation}
                        />

                ))) : (
                    <span>Ainda não temos produtos registrados nessa categoria!</span>
                )}
            </div>
        </div>
    )
}