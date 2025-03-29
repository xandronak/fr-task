import { useState } from "react";
import { ReactComponent as Rocket } from "assets/icons/rocket.svg";
import './Footer.scss';

const Footer = () => {
    const [isAnimationActive, setIsAnimationActive] = useState(false);

    return (
        <footer className="footer">
            <Rocket
                className={`footer__icon ${isAnimationActive ? "footer__icon--animated" : ""}`}
                onClick={() => setIsAnimationActive(!isAnimationActive)}
            />
            <p className="footer__text">Exciting space adventure!</p>
        </footer>
    )
};

export default Footer;
