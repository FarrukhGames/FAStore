import {NavLink} from 'react-router-dom';
const Navigation = () => {
    return (
        <nav className="navigation">
            <NavLink to="/">Каталог</NavLink>
            <NavLink to="/cart">Корзина</NavLink>
        </nav>
    );
}

export default Navigation;