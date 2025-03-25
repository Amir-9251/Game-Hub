import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlateform";
import { IconType } from "react-icons";
interface props {
  platforms: Platform[];
}
const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  nintendo: SiNintendo,
  xbox: FaXbox,
  mac: FaApple,
  android: FaAndroid,
  linux: FaLinux,
  ios: MdPhoneIphone,
  web: BsGlobe,
};
const PlatformIconList = ({ platforms }: props) => {
  return (
    <HStack>
      {platforms.map((platform) => (
        // <HStack key={platform.id}>
        <Icon
          as={iconMap[platform.slug]}
          color={"gray.500 "}
          key={platform.id}
        />
        // </HStack>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
