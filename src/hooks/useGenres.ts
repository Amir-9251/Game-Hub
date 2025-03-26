import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClint, { FetchResponse } from "../services/api-clint";
export interface Genres {
    id: number;
    name: string
    image_background: string
}
const apiClint = new APIClint<Genres>('/genres');
const useGenres = () => useQuery<FetchResponse<Genres>, Error>({
    queryKey: ["genres"],
    queryFn: apiClint.getAll,
    staleTime: 1000 * 60 * 60 * 24,
    initialData: { count: genres.length, results: genres },
})
export default useGenres;