import { Link } from 'react-scroll';
import { useNavigate, useLocation } from "react-router-dom";

export const DetailsItemPreview = ({ item }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleOnClick = (ev, item) => {
        ev.stopPropagation();
        navigate(`${location.pathname + '/' + item.id}`);
    };

    return item ? (
        <section className='details-itemPreview'>
            <Link to={location.pathname + '/' + item.id} onClick={(ev) => handleOnClick(ev, item)}>
                <div className='contant'>
                    <div className='info'>
                        <h6>
                            {item.name}
                        </h6>
                        <p>
                            {item.description}
                        </p>
                        <span>
                            {
                                (item.baseprice / 100).toLocaleString('he-IL', {
                                    style: 'currency',
                                    currency: 'ILS',
                                })}
                        </span>
                    </div>
                    {item.image ?
                        <div className='image'>
                            <img src={item.image} alt="" />
                        </div>
                        : null}
                </div>
            </Link>
        </section>
    ) : null;
};
