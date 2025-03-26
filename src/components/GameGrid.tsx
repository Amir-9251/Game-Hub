import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import useGame from "../hooks/useGame";
import { GameQuery } from "../App";
import React from "react";
interface props {
  gameQuery: GameQuery;

}
const GameGrid = ({ gameQuery }: props) => {
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGame(gameQuery);
  const Skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (error?.message) return null
  return (
    <Box padding={"10px"}>

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}

        spacing={6}
      >
        {isLoading &&
          Skeleton.map((Skeleton) => (
            <GameCardContainer key={Skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => <React.Fragment key={index}>
          {page.results.map(game => <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>)}
        </React.Fragment>)}

      </SimpleGrid>
      {hasNextPage && <Button onClick={() => fetchNextPage()} marginY={5}>{isFetchingNextPage ? 'Loading...' : 'Next Page'}</Button>}
    </Box>
  );
};

export default GameGrid;
