import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import usePlateform from "../hooks/usePlateform";
import { Platform } from "../hooks/useGame";
interface props {
  onSelectedPlatform: (platform: Platform) => void;
  plateForm: Platform | null;
}
const PalteformSelector = ({ onSelectedPlatform, plateForm }: props) => {
  let { data, errors } = usePlateform();
  if (errors) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {plateForm ? plateForm.name : "PlatForm"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
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
