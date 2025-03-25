import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "./useData";
import apiClint from "../services/api-clint";
import platforms from "../data/platforms";
interface Platform {
    id: number,
    name: string,
    slug: string
}
console.log(platforms)
const usePlateform = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClint
        .get<FetchResponse<Platform>>('/platforms').then(res => res.data),
    staleTime: 1000 * 60 * 60 * 24,
    initialData: { count: platforms.length, results: platforms }
})
export default usePlateform;