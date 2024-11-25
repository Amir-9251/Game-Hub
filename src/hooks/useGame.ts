import { useEffect, useState } from "react";
import apiClint from "../services/api-clint";
import { CanceledError } from "axios";
export interface Platform{
  id: number,
  name: string,
  slug:string,
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]
  metacritic:number
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClint
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return; // Ignore cancellations
        setErrors(err.message);
      });

    return () => {
      controller.abort(); 
    };
  }, []);

  return { games, errors };
};

export default useGame;
