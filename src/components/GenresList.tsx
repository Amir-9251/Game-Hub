import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImagesUrl from "../services/image-url";

const GenresList = () => {
  const { data, isLoading, errors } = useGenres();
  const Skeleton=[1,2,3,4,5,6,7,8,9,10]
  return (
    <>
      {isLoading && <Spinner />}
      {errors && null}
      <List>
        {data.map((genres) => (
          <ListItem key={genres.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImagesUrl(genres.image_background)}
              />
              <Text fontSize="lg">{genres.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
