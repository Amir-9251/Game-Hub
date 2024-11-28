import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImagesUrl from "../services/image-url";

const GenresList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genres) => (
        <ListItem key={genres.id} paddingY={'5px'}>
          <HStack >
            <Image boxSize={'32px'} borderRadius={8} src={getCroppedImagesUrl(genres.image_background)} />
            <Text fontSize='lg'>{genres.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
