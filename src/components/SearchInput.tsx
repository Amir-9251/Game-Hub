import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch}: props) => {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current !== null) onSearch(searchRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={searchRef}
          borderRadius={20}
          placeholder="Search Game..."
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
