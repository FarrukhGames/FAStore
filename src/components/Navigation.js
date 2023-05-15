import {NavLink} from 'react-router-dom';
const Navigation = () => {
    return (
        <nav className="navigation">
            <NavLink to="/">Каталог</NavLink>
            <NavLink to="/cart">Корзина</NavLink>
            <NavLink to="/deferred">Отложенное</NavLink>
        </nav>
    );
}

export default Navigation;