import './styles.css';
import { Link, Links } from 'react-router-dom';

export function Sidebar() {
    return(
        <aside className="sidebar">
        <div className="sidebar__logo">
            <h2>Calvozo</h2>
        </div>

        <nav className="sidebar__nav">
            <Link to='/dashboard'>
                Dashboard
            </Link>
            <Link to='/cozinha'>
                Cozinha
            </Link>
            <Link to='/pedido'>
                Pedido
            </Link>
            <Link to='/produto'>
                Produtos
            </Link>
            <Link to='/cardapio'>
                Cardapio
            </Link>
        </nav>

        <div className="sidebar__footer">
            <button>Sair</button>
        </div>
        </aside>
    )
}