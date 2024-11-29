import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getCroppedImagesUrl from "../services/image-url";
interface props {
  OnSelectGenres: (genre: Genres) => void;
  selectedGenres: Genres | null;
}
const GenresList = ({ OnSelectGenres, selectedGenres }: props) => {
  const { data, isLoading, errors } = useGenres();
  return (
    <>
      {isLoading && <Spinner />}
      {errors && null}
      <List>
        {data.map((genres) => (
          <ListItem key={genres.id} paddingY={"5px"} textOverflow={"ellipsis"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImagesUrl(genres.image_background)}
              />
              <Button
                fontWeight={
                  genres.id === selectedGenres?.id ? "bold" : "normal"
                }
                onClick={() => OnSelectGenres(genres)}
                fontSize="lg"
                variant="link"
              >
                {genres.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
