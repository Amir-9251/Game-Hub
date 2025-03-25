import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getCroppedImagesUrl from "../services/image-url";
interface props {
  OnSelectGenres: (genre: Genres) => void;
  selectedGenres: Genres | null;
}
const GenresList = ({ OnSelectGenres, selectedGenres }: props) => {
  const { data, isLoading } = useGenres();
  return (
    <>
      {isLoading && <Spinner />}
      <Heading fontSize='2xl' marginBottom={5}>Genres</Heading>
      <List>
        {data?.results.map((genres) => (
          <ListItem key={genres.id} paddingY={"5px"} textOverflow={"ellipsis"}>
            <HStack>
              <Image
                boxSize={"32px"}
                objectFit='cover'
                borderRadius={8}
                src={getCroppedImagesUrl(genres.image_background)}
              />
              <Button
                whiteSpace='normal'
                textAlign='left'

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
