import { useQuery } from "@tanstack/react-query";
import APIClint, { FetchResponse } from "../services/api-clint";
import platforms from "../data/platforms";

export interface Platform {
    id: number,
    name: string,
    slug: string
}
const apiClint = new APIClint<Platform>('/platforms/lists/parents');

const usePlateform = () => useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: apiClint.getAll,
    staleTime: 1000 * 60 * 60 * 24,
    initialData: { count: platforms.length, results: platforms }
})
export default usePlateform;