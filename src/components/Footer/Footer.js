import { useState } from "react";
import './Footer.scss';

const Footer = () => {
    const [isAnimationActive, setIsAnimationActive] = useState(false);

    return (
        <footer className="footer">
            <img
                className={`footer__icon ${isAnimationActive ? "footer__icon--animated" : ""}`}
                src={`${process.env.PUBLIC_URL}/assets/images/rocket.webp`}
                alt="Rocket"
                onClick={() => setIsAnimationActive(!isAnimationActive)}
            />
            <p className="footer__text">Exciting space adventure!</p>
        </footer>
    )
};

export default Footer;
