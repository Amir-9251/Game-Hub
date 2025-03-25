import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClint, { FetchResponse } from "../services/api-clint";
export interface Genres {
    id: number;
    name: string
    image_background: string
}

const useGenres = () => useQuery<FetchResponse<Genres>, Error>({
    queryKey: ["genres"],
    queryFn: () => apiClint
        .get<FetchResponse<Genres>>('/genres')
        .then((res) => res.data).catch(err => { throw err }),
    staleTime: 1000 * 60 * 60 * 24,
    initialData: { count: genres.length, results: genres },
})
export default useGenres;