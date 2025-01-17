import { useNavigate } from "react-router-dom";

export const DetailsInformation = ({ restaurant }) => {

    const navigate = useNavigate();

    const handleOnClick = (ev, categoryId) => {
        ev.stopPropagation();
        navigate(`/category/${categoryId}`);
    };

    return restaurant ? (
        <section className='DetailsInformation'>
            <h2 className='main-header'>Restaurant information</h2>
            <div className='address'>
                <h3>Address</h3>
                <p> {restaurant.address}</p>
                <span>{restaurant.post_code} {restaurant.city}</span>
            </div>
            <div className='opening-times'>
                <h3>Opening times</h3>
                <div className='opening-times-titles'>
                    <h6> Restaurant</h6>

                </div>
                <ul className='restaurant'>
                    {Object.keys(restaurant.opening_times).map((day) => {
                        let openTime;
                        let closeTime;
                            for (let item in restaurant.opening_times[day]) {
                            let time = new Date(restaurant.opening_times[day][item].value.$date).toLocaleTimeString('default', {
                                hour: '2-digit',
                                minute: '2-digit',
                            });
                            if (restaurant.opening_times[day][item].type === 'open') {
                                openTime = time;
                            } else if (restaurant.opening_times[day][item].type === 'close') {
                                closeTime = time;
                            };
                            }
                        return <li key={day}>
                            <p>
                                {day}
                            </p>
                            <span>
                                {openTime + '-' + closeTime}
                            </span>
                        </li>;
                    })}
                </ul>

            </div>
            <div className='allergies'>
                <p>If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-specific information upon request.</p>
                <a>{restaurant.phone}</a>
                <div className='more'>
                    <a>See more information</a>
                </div>
            </div>
            <div className='categories'>
                <h3>Categories</h3>
                <ul>
                    {restaurant.categories.map((category, i) => {
                        return <li key={category.slug} onClick={(ev) => handleOnClick(ev, category.slug)}>
                            {(i === 0) ? category.slug : ', ' + category.slug}
                        </li>;
                    }
                    )}
                </ul>
            </div>
        </section>
    ) : null;
};
