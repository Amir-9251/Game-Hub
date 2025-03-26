import { SimpleGrid, Spinner } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import useGame from "../hooks/useGame";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
interface props {
  gameQuery: GameQuery;

}
const GameGrid = ({ gameQuery }: props) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage
  } = useGame(gameQuery);

  const Skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error?.message) return null

  const fetchedGamesCount = data?.pages.reduce((total, page) =>
    total + page.results.length, 0) || 0

  return (

    <InfiniteScroll
      dataLength={fetchedGamesCount}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={<Spinner />}
    >
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
        {data?.pages.map((page, index) => <React.Fragment key={index}>
          {page.results.map(game => <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>)}
        </React.Fragment>)}
      </SimpleGrid>

    </InfiniteScroll>
  );
};

export default GameGrid;
