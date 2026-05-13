export interface Product {
    id: number;
    nome: string;
    descricao: string;
    categoria: string;
    imagem: string;
    disponivel: boolean;

    variacoes: {
        tamanho: string,
        preco: number,
        disponivel:boolean
    }[];
}