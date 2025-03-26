import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlateform from "../hooks/usePlateform";

interface props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlateform();

  const genre = genres?.results.find((genre) => genre.id === gameQuery.genreId);
  const platform = platforms?.results.find((platform) => platform.id === gameQuery.genreId);

  const gameHeading = `${platform?.name || ""} ${genre?.name || ""
    } Games`;
  return (
    <Heading marginY={5} fontSize="2xl" as="h1">
      {gameHeading}
    </Heading>
  );
};

export default GameHeading;
