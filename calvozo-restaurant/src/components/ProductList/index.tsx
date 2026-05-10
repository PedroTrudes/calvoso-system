import { CardsProducts } from '../Cards/CardsProducts';
import './styles.css';

export function ProductList(){

    const products = [{
    id: 1,
    nome: "Hambúrguer Artesanal",
    descricao: "Pão brioche, burger 180g, cheddar e bacon crocante.",
    preco: 32.9,
    categoria: "Lanches",
    imagem:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    nome: "Pizza Margherita",
    descricao: "Molho artesanal, mussarela e folhas frescas de manjericão.",
    preco: 54.9,
    categoria: "Pizzas",
    imagem:
      "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    nome: "Sushi Combo",
    descricao: "20 peças variadas de sushi e sashimi.",
    preco: 69.9,
    categoria: "Japonesa",
    imagem:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    nome: "Batata Frita Supreme",
    descricao: "Batata crocante com cheddar e bacon.",
    preco: 24.9,
    categoria: "Porções",
    imagem:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    nome: "Milkshake de Chocolate",
    descricao: "Milkshake cremoso com calda de chocolate belga.",
    preco: 18.9,
    categoria: "Bebidas",
    imagem:
      "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    nome: "Café Gelado",
    descricao: "Cold brew com leite e espuma cremosa.",
    preco: 14.9,
    categoria: "Bebidas",
    imagem:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    nome: "Taco Mexicano",
    descricao: "Tortilla recheada com carne temperada e guacamole.",
    preco: 27.9,
    categoria: "Mexicana",
    imagem:
      "https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    nome: "Salada Caesar",
    descricao: "Alface romana, frango grelhado e molho caesar.",
    preco: 29.9,
    categoria: "Saudável",
    imagem:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1200&auto=format&fit=crop",
  },
    ];

    const categoryProducts =[{
        id: 1,
        category: 'Todos'
    },
    {
        id: 2,
        category: 'Marmitex'
    },
    {
        id: 3,
        category: 'Prato feito'
    },
    {
        id: 4,
        category: 'Bebidas'
    },
    {
        id: 5,
        category: 'Lanches'
    }
]

    return(
        <div className='containerProductList'>
            <div className='categoryList'>
                {categoryProducts.map((list) => (
                    <span key={list.id}>{list.category}</span>
                ))}
            </div>
            <div className='productList'>
                {products.map((product) => (
                    <CardsProducts nome={product.nome} descricao={product.descricao} preco={product.preco} categoria={product.categoria} imagem={product.imagem} />
                ))}
            </div>
        </div>
    )
}