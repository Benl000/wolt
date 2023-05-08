
export const HeroCarouselPreview = ({ item }) => {

    return (
        <section className="hero-preview">
            <img src={item.img} />
            <div className="hero-preview-details">
                <h6>{item.category}</h6>
                <h2>{item.title}</h2>
                <h4>{item.description}</h4>
            </div>
        </section>
    );
};
