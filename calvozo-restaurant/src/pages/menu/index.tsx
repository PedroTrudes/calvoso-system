import { useState } from "react";
import { CategoryFilter } from "../../components/CategoryFilter";
import { ProductList } from "../../components/ProductList";
import './styles.css';

export function Menu() {
  const [category, setCategory] = useState("Todos");

  const categoryProducts = [
    {
      id: 1,
      category: "Todos",
    },
    {
      id: 2,
      category: "Marmitex",
    },
    {
      id: 3,
      category: "Prato feito",
    },
    {
      id: 4,
      category: "Bebidas",
    },
    {
      id: 5,
      category: "Porções",
    },
  ];

  const products = [
    {
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
    },

    {
      id: 2,
      nome: "Lasanha Bolonhesa",
      descricao: "Lasanha artesanal com molho bolonhesa e queijo gratinado.",
      categoria: "Porções",
      imagem:
        "https://images.unsplash.com/photo-1619895092538-128341789043?q=80&w=1200&auto=format&fit=crop",
      disponivel: true,

      variacoes: [
        {
          tamanho: "p",
          preco: 22,
          disponivel: true,
        },
        {
          tamanho: "m",
          preco: 29,
          disponivel: false,
        },
        {
          tamanho: "g",
          preco: 37,
          disponivel: true,
        },
      ],
    },

    {
      id: 3,
      nome: "Frango à Parmegiana",
      descricao: "Filé de frango empanado com molho e queijo.",
      categoria: "Prato feito",
      imagem:
        "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=1200&auto=format&fit=crop",
      disponivel: false,

      variacoes: [
        {
          tamanho: "p",
          preco: 19,
          disponivel: false,
        },
        {
          tamanho: "m",
          preco: 26,
          disponivel: true,
        },
        {
          tamanho: "g",
          preco: 34,
          disponivel: true,
        },
      ],
    },

    {
      id: 4,
      nome: "Strogonoff de Carne",
      descricao: "Carne ao molho cremoso acompanhado de arroz e batata palha.",
      categoria: "Prato feito",
      imagem:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1200&auto=format&fit=crop",
      disponivel: true,

      variacoes: [
        {
          tamanho: "p",
          preco: 20,
          disponivel: true,
        },
        {
          tamanho: "m",
          preco: 27,
          disponivel: true,
        },
        {
          tamanho: "g",
          preco: 35,
          disponivel: false,
        },
      ],
    },

    {
      id: 5,
      nome: "Hambúrguer Artesanal",
      descricao: "Pão brioche, hambúrguer 180g e cheddar.",
      categoria: "Porções",
      imagem:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
      disponivel: true,

      variacoes: [
        {
          tamanho: "p",
          preco: 17,
          disponivel: true,
        },
        {
          tamanho: "m",
          preco: 23,
          disponivel: false,
        },
        {
          tamanho: "g",
          preco: 28,
          disponivel: true,
        },
      ],
    },

    {
      id: 6,
      nome: "Taco Mexicano",
      descricao: "Tortilla recheada com carne temperada e guacamole.",
      categoria: "Porções",
      imagem:
        "https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=1200&auto=format&fit=crop",
      disponivel: false,

      variacoes: [
        {
          tamanho: "p",
          preco: 16,
          disponivel: false,
        },
        {
          tamanho: "m",
          preco: 22,
          disponivel: true,
        },
        {
          tamanho: "g",
          preco: 30,
          disponivel: true,
        },
      ],
    },

    {
      id: 7,
      nome: "Pizza Calabresa",
      descricao: "Molho artesanal, queijo e calabresa fatiada.",
      categoria: "Porções",
      imagem:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
      disponivel: true,

      variacoes: [
        {
          tamanho: "p",
          preco: 25,
          disponivel: true,
        },
        {
          tamanho: "m",
          preco: 39,
          disponivel: true,
        },
        {
          tamanho: "g",
          preco: 52,
          disponivel: false,
        },
      ],
    },

    {
      id: 8,
      nome: "Salada Caesar",
      descricao: "Alface romana, frango grelhado e molho caesar.",
      categoria: "Prato feito",
      imagem:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1200&auto=format&fit=crop",
      disponivel: false,

      variacoes: [
        {
          tamanho: "p",
          preco: 18,
          disponivel: true,
        },
        {
          tamanho: "m",
          preco: 21,
          disponivel: false,
        },
        {
          tamanho: "g",
          preco: 27,
          disponivel: true,
        },
      ],
    },
  ];

  const listProductFilter =
    category === "Todos"
      ? products.filter((product) => product.disponivel )
      : products.filter((product) => {
          return product.categoria === category && product.disponivel === true;
        });

  return (
    <div className="menuPageContainerList">
      <CategoryFilter
        categories={categoryProducts}
        selectCategory={category}
        onSelectCategory={setCategory}
      />
      <ProductList products={listProductFilter} />
    </div>
  );
}
