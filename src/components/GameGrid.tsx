import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import useGame from "../hooks/useGame";

const GameGrid = () => {
  const {  data, errors, isLoading } = useGame();
  const Skeleton = [1, 2, 3, 4, 5, 6,7,8,9,10];
  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10px"}
        spacing={3}
      >
        {isLoading &&
          Skeleton.map((Skeleton) => (
            <GameCardContainer key={Skeleton}>
              <GameCardSkeleton key={Skeleton} />
            </GameCardContainer>
          ))}
        {data.map((games) => (
          <GameCardContainer key={games.id}>
            <GameCard key={games.id} game={games} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
