import {NavLink} from 'react-router-dom';
const Navigation = (props) => {
    return (
        <nav className="navigation">
            <NavLink to="/" className="navigation__link">Каталог</NavLink>
            <NavLink to="/cart" className="navigation__link">Корзина</NavLink>
            <NavLink to="/deferred" className="navigation__link">Отложенное</NavLink>
            {props.isAuthenticated && <NavLink className="navigation__link" to="/account ">Личный Кабинет</NavLink>}
            {props.isAuthenticated && <button className="navigation__link" onClick={props.logoutFunction}>Выйти из аккаунта</button>}
        </nav>
    );
}

export default Navigation;