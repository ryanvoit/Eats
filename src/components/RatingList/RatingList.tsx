import { RestaurantCard } from "../Restaurant/Restaurant"
import { Restaurant } from "./types"
import './rating.css'

type RatingListProprs = {
    restaurants: Restaurant[]
}

export const RatingList = ({ restaurants }: RatingListProprs) => {
    return (
        <ul className="rating__list">
            { restaurants.map(item => (
                <li className="rating__item" key={item.id}>
                    <RestaurantCard 
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        raiting={item.raiting}
                        url={item.url}
                    />
                </li>
            ))}
        </ul>
    )
}