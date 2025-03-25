import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClint,{ FetchResponse } from "../services/api-clint";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGame = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => apiClint.get<FetchResponse<Game>>('/games', {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    }).then(res => res.data),
    staleTime: 1000 * 60 * 60 * 24,

  })
export default useGame;
