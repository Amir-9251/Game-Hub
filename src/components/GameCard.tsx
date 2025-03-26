import { Card, CardBody, Heading, HStack, Image, Skeleton } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImagesUrl from "../services/image-url";
import Emoji from "./Emoji";
interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <Card height={"100%"}>
      {game.background_image ?
        <Image src={getCroppedImagesUrl(game.background_image)} /> :
        <Skeleton height={'40'} />
      }
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore key={game.id} score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"} marginBottom='2'>{game.name} <Emoji rating={game.rating_top} /></Heading>

      </CardBody>
    </Card>
  );
};

export default GameCard;
