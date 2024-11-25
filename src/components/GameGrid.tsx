import { useEffect, useState } from "react";
import apiClint from "../services/api-clint";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, errors } = useGame();
  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding={'10px'} spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
