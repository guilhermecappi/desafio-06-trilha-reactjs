import { Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Continent } from "../../types/Continent";
import { NumberInfo } from "./NumberInfo";

interface ContinentInfoProps {
  continent: Continent;
}

export const ContinentInfo: FC<ContinentInfoProps> = ({ continent }) => {
  return (
    <Box px={4} py={[8, 20]}>
      <Flex
        maxW="1190"
        mx="auto"
        flexDirection={{ base: "column", lg: "row" }}
        gridGap={{ base: "4", lg: "10" }}
      >
        <Text fontSize={["14px", "24px"]} flex="1" textAlign="justify">
          {continent.paragraph}
        </Text>
        <Flex justifyContent="space-between" flex="1">
          <NumberInfo number={continent.countryNumber}>países</NumberInfo>
          <NumberInfo number={continent.languageNumber}>línguas</NumberInfo>
          <NumberInfo number={continent.cities100}>cidades +100</NumberInfo>
        </Flex>
      </Flex>
    </Box>
  );
};
