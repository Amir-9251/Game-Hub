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
import { Platform } from "../hooks/useGame";
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
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color={"gray.500 "} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
