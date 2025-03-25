import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import useGame, { Platform } from "../hooks/useGame";
import { GameQuery } from "../App";
interface props {
  gameQuery: GameQuery;

}
const GameGrid = ({ gameQuery }: props) => {
  const { data, error, isLoading } = useGame(gameQuery);
  const Skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (error?.message) return null
  return (
    <>

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={"10px"}
        spacing={6}
      >
        {isLoading &&
          Skeleton.map((Skeleton) => (
            <GameCardContainer key={Skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.results.map((games) => (
          <GameCardContainer key={games.id}>
            <GameCard game={games} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
