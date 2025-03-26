import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import usePlateform from "../hooks/usePlateform";
import { Platform } from "../hooks/usePlateform";
interface props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}
const PalteformSelector = ({ onSelectedPlatform, selectedPlatformId }: props) => {
  let { data, error } = usePlateform();
  const selectedPlatform = data.results.find(
    (platform) => platform.id === selectedPlatformId
  );
  if (error?.message) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "PlatForm"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectedPlatform(platform)}
            key={platform.id}
          >
            {platform.name === "PlayStation" ? null : platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PalteformSelector;
