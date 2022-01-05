import { Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Continent } from "../types/Continent";

interface ContinentBannerProps {
  continent: Continent;
}

export const ContinentBanner: FC<ContinentBannerProps> = ({ continent }) => {
  return (
    <Flex
      px="4"
      h={["150", "500"]}
      backgroundSize="cover"  
      backgroundImage={`url(${continent.image})`}
    >
      <Box
        w="100%"
        maxW="1190"
        mx="auto"
        alignSelf={{ base:"center", lg: "flex-end" }}
        pb={{ base: 0, lg: '60px' }}
      >
        <Text
          fontSize={["28", "48"]}
          fontWeight={600}
          textAlign={{ base: "center", lg: "left" }}
          color="gray.100"
        >
          {continent.name}
        </Text>
      </Box>
    </Flex>
  );
};
