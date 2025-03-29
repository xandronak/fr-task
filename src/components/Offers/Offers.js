import OfferCard from "./OfferCard";
import './Offers.scss';

const OFFERS_ITEMS = [
    {
        title: "Move the borders of reality!",
        description: "Go on a space adventure - it's possible with us!",
        backgroundUrl: "/assets/images/space-1.png",
        size: "wide",
    },
    {
        title: "Space is not just stars and planets",
        description: "Go on a space adventure",
        backgroundUrl: "/assets/images/space-2.png",
        size: "default",
    },
    {
        title: "For those who dream of stars",
        description: "Our offer: make your dream come true",
        backgroundUrl: "/assets/images/space-3.png",
        size: "default",
    },
    {
        title: "Fulfill your fantastic dreams",
        description: "Space has never been so close",
        backgroundUrl: "/assets/images/space-4.png",
        size: "wide",
    }
]

const Offers = () => {
    return (
        <section id="offers" className="offers">
            <h2 className="offers__title">Offers</h2>
            <div className="offers__grid">
                {OFFERS_ITEMS.map((item) => (
                    <OfferCard
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        backgroundUrl={item.backgroundUrl}
                        size={item.size}
                    />
                ))}
            </div>
            <div className="offers__info">
                <input type="checkbox" id="read-more-toggle" className="offers-info__read-more-toggle" hidden/>
                <h3 className="offers-info__title">Embark on a space journey</h3>
                <p className="offers-info__description">
                    Travelling into space is one of the most exciting and unforgettable adventures that can change your
                    life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our
                    company is ready to help you realize this dream. We offer a unique experience that will allow you to
                    go on a space journey and see all the secrets of the universe. We guarantee that every moment in
                    space will be filled with incredible impressions, excitement and new discoveries. Our team of
                    professionals takes care of your safety and comfort so that you can fully enjoy your adventure in
                    space. We offer various options for space excursions.
                </p>
                <label htmlFor="read-more-toggle" className="offers-info__read-more" />

                <div className="offers-info__more-info">
                    <p className="offers-info__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat, velit eget lobortis
                        imperdiet, nunc nulla feugiat sem, ac placerat nunc neque non nisi. Duis ornare sodales lorem, a
                        semper felis mattis semper. Suspendisse non neque velit. Nulla eu condimentum quam. Nunc eu lectus
                        tellus. Maecenas vestibulum felis libero, sed pretium augue vulputate eget. Etiam consequat, metus
                        lacinia commodo varius, magna neque elementum nisi, aliquam facilisis enim purus in tellus.

                        Quisque vitae orci libero. Aliquam erat volutpat. Nam tincidunt, nibh fringilla tempor ullamcorper,
                        enim dolor viverra libero, imperdiet semper nulla eros in felis. Nullam convallis orci sed dignissim
                        cursus. Donec ultrices, elit eu ultricies ultricies, velit neque iaculis nunc, at condimentum metus
                        massa non arcu. Mauris tristique lectus rutrum interdum varius. Praesent eleifend orci quis neque
                        dictum lacinia.

                        Vivamus convallis accumsan metus, non iaculis odio hendrerit eu. Mauris ut lorem nec ex pretium
                        aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                        Morbi eros metus, vulputate eget metus at, facilisis porttitor odio. Morbi tellus ipsum, tempus et
                        urna vitae, semper vestibulum libero. Ut erat mauris, scelerisque sit amet viverra vitae, dignissim
                        quis nisl. Suspendisse dictum semper nisi vitae dapibus. Sed vel dignissim est. Mauris a egestas
                        eros. Vivamus a blandit risus. Morbi convallis quis libero eget interdum. Quisque hendrerit, massa
                        tempus feugiat maximus, urna urna molestie metus, faucibus feugiat diam ex ac orci. Pellentesque
                        pharetra nunc non neque vestibulum, a porta risus tempor. Integer tristique justo dignissim elit
                        feugiat, ac varius ex pharetra.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Offers;
