import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: props) => {

  const platform = usePlatform(gameQuery.selectedPlatformId)
  const genre = useGenre(gameQuery.genreId);

  const gameHeading = `${platform?.name || ""} ${genre?.name || ""
    } Games`;

  return (
    <Heading marginY={5} fontSize="2xl" as="h1">
      {gameHeading}
    </Heading>
  );
};

export default GameHeading;
