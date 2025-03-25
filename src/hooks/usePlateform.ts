import { useQuery } from "@tanstack/react-query";
import apiClint, { FetchResponse } from "../services/api-clint";
import platforms from "../data/platforms";
export interface Platform {
    id: number,
    name: string,
    slug: string
}

const usePlateform = () => useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: () => apiClint
        .get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data),
    staleTime: 1000 * 60 * 60 * 24,
    initialData: { count: platforms.length, results: platforms }
})
export default usePlateform;