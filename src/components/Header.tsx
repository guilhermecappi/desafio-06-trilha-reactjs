import { Flex, Box, Icon, Image, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

interface HeaderProps {
  hasArrow?: boolean;
}

export const Header: FC<HeaderProps> = ({ hasArrow }) => {
  return (
    <Box px={4}>
      <Flex
        maxW="1190"
        mx="auto"
        position="relative"
        justifyContent="center"
        alignItems="center"
        py={["4", "6"]}
        px="4"
      >
        {hasArrow && (
          <Link href="/">
            <Icon cursor="pointer" as={MdKeyboardArrowLeft} position="absolute" left={0} fontSize={["20" ,"32"]} />
          </Link>
        )}
        <Image
          width={["80px", "180px"]}
          src="/images/logo.svg"
          alt="worldtrip"
        />
      </Flex>
    </Box>
  );
};
