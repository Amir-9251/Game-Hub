import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: props) => {
  const gameHeading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading marginY={5} fontSize="3xl" as="h1">
      {gameHeading}
    </Heading>
  );
};

export default GameHeading;
