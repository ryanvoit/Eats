
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateRestaurantRating } from "../api/api"

export const useStars = () => {
    const client = useQueryClient()

    const { isSuccess, mutate, isPending } = useMutation({
        mutationFn: updateRestaurantRating,
        onSuccess() {
            client.invalidateQueries({ queryKey: ['restaurants'] })
        }
    })

    const starMutate = (id: string, raiting: number) => {
        mutate({
            id,
            raiting
        })
    }

    return {isPending, isSuccess, starMutate}
}
