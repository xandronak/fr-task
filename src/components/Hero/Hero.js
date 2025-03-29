import Button from "components/ui/Button/Button";
import './Hero.scss';

const Hero = () => {
    const backgroundStyle = {
        backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(15, 20, 32, 0.79) 100%), url("/assets/images/hero.png")',
    };

    return (
        <section className="hero" style={backgroundStyle}>
            <div className="hero__content">
                <h1 className="hero__title">Discover the vast expanses of <span className="highlighted-text--primary">space</span></h1>
                <p className="hero__subtitle">Where the possibilities are <span className="highlighted-text--secondary">endless!</span></p>
                <Button>Learn more</Button>
            </div>
            <img src="/assets/images/earth.png" alt="Earth" className="hero__image"/>
        </section>
    )
};

export default Hero;