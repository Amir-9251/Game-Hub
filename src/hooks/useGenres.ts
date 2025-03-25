import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClint from "../services/api-clint";
import { FetchResponse } from "./useData";
export interface Genres {
    id: number;
    name: string
    image_background: string
}

const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClint
        .get<FetchResponse<Genres>>('/genres')
        .then((res) => res.data).catch(err => { throw err }),
    staleTime: 1000 * 60 * 60 * 24,
})
export default useGenres;