import Button from "components/ui/Button/Button";
import "./OfferCard.scss";

/**
 * OfferCard component
 *
 * @param {object} props - OfferCard props
 * @param {string} [props.title] - Card title
 * @param {string} [props.description] - Card description
 * @param {'wide' | 'default'} [props.size='default'] - Card size
 * @param {string} props.backgroundUrl - Background image URL
 * @param {function} [props.onClick] - Learn more click handler
 */
const OfferCard = ({ title, description, size, backgroundUrl, onClick }) => {
    const backgroundStyle = {
        backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(15, 20, 32, 0.8) 100%), url(${backgroundUrl})`,
    };

    return (
        <div className={`offer-card ${size === "wide" ? "offer-card--wide" : ""}`} style={backgroundStyle}>
            <div className="offer-card__content">
                <h3 className="offer-card__title">{title}</h3>
                <p className="offer-card__description">{description}</p>
                <Button variant="secondary" onClick={onClick}>Learn more</Button>
            </div>
        </div>
    )
}

export default OfferCard;
