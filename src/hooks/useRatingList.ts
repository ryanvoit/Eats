import { useQuery } from "@tanstack/react-query";
import { getRestaurants } from "../api/api";
import { Restaurant } from "../components/RatingList/types";
import { useState, ChangeEventHandler, useEffect } from "react";


type Response = {
  restaurants: Restaurant[] | null;
  data: Restaurant[];
  isError: boolean;
  isLoading: boolean;
  handleSearch: ChangeEventHandler<HTMLInputElement>
  search: string
}

export const useRatingList = (): Response => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ['restaurants'],
        queryFn: getRestaurants,
    });

    const [search, setSearch] = useState('')
    const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null)

    const handleSearch:ChangeEventHandler<HTMLInputElement> = (event) => {
        setSearch(event.target.value)

        const filtered = data.filter((restaurant: Restaurant) => restaurant.name.toLowerCase().includes(event.target.value.toLowerCase()))
        setRestaurants(filtered)
    } 

    /*
    useEffect(() => {
        console.log(data);
        const filtered = data.filter((restaurant: Restaurant) => restaurant.name.toLowerCase().includes(search.toLowerCase()))
            
        setRestaurants(filtered)
    }, [data, search])
    */

    return { restaurants, data, isError, isLoading, handleSearch, search }
}

