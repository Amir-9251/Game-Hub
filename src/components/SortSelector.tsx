import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface props {
  onSelectedSortOrder: (selected: string) => void;
  sortOrdr:string
}
const SortSelector = ({ onSelectedSortOrder,sortOrdr }: props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
    ];
    const currentSortOrder = sortOrder.find(order => order.value === sortOrdr)
    
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
      Sort by: {currentSortOrder?.label||'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrder.map((selector) => (
          <MenuItem
            onClick={() => onSelectedSortOrder(selector.value)}
            key={selector.value}
          >
            {selector.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
