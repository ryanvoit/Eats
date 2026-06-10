import { Icon } from "../Icon/Icon"
import { Restaurant } from "../RatingList/types"
import './restaurant-card.css'

export const RestaurantCard = ({ id, name, description, raiting, url }: Restaurant ) => {

    return (
        <div className='restaurant-card'>
            <img src={url} alt="Фото рестарана" className="restaurant-card__image"/>
            <h2 className="restaurant-card__name">{name}</h2>
            <p className="restaurant-card__description">{description}</p>
            <div className="restaurant-card__rating">
                { raiting >= 1 ? (
                    <Icon role="star--active" id={id} raiting={1}/>
                ) : (
                    <Icon role="star" id={id} raiting={1}/>
                )}
                { raiting >= 2 ? (
                    <Icon role="star--active" id={id} raiting={2}/>
                ) : (
                    <Icon role="star" id={id} raiting={2}/>
                )}
                { raiting >= 3 ? (
                    <Icon role="star--active" id={id} raiting={3}/>
                ) : (
                    <Icon role="star" id={id} raiting={3}/>
                )}
                { raiting >= 4 ? (
                    <Icon role="star--active" id={id} raiting={4}/>
                ) : (
                    <Icon role="star" id={id} raiting={4}/>
                )}
                { raiting === 5 ? (
                    <Icon role="star--active" id={id} raiting={5}/>
                ) : (
                    <Icon role="star" id={id} raiting={5}/>
                )}
            </div>
        </div>
    )
}