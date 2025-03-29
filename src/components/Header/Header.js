import { useState } from 'react';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { ReactComponent as Cart } from 'assets/icons/cart.svg';
import './Header.scss';

const Header = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleCloseOnClick = () => {
        if (open) {
            setOpen(false);
        }
    }

    return (
        <header className="header">
            <Logo className="header__logo" onClick={handleScrollToTop} />

            <nav className={`header__nav ${open ? 'header__nav--open' : ''}`}>
                <a className="header__link" href="#" onClick={handleCloseOnClick}>Home</a>
                <a className="header__link" href="#offers" onClick={handleCloseOnClick}>Products</a>
                <Cart className="header__cart" onClick={handleCloseOnClick} />
            </nav>

            <button className={`header__burger-menu ${open ? 'header__burger-menu--open' : ''}`} onClick={toggleMenu}>
                <span className="burger-menu__line" />
                <span className="burger-menu__line" />
                <span className="burger-menu__line" />
            </button>
        </header>
    );
};

export default Header;
