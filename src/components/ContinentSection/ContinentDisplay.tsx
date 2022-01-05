import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FC, useContext } from "react";
import { Continent } from "../../types/Continent";
import { ContinentContext } from "../../context/ContinentContext";

interface ContinentDisplay {
  continent: Continent;
}

export const ContinentDisplay: FC<ContinentDisplay> = ({ continent }) => {
  const { handleSelectContinent } = useContext(ContinentContext)

  return (
    <Box
      textAlign="center"
      backgroundImage={`url(${continent.image})`}
      backgroundSize="cover"
      py={["100px", "180px"]}
    >
      <Link href={`/continente/${continent.name}`}>
        <Box onClick={() => handleSelectContinent(continent)} cursor="pointer" w="max-content" mx="auto">
          <Text
            fontWeight={700}
            color="gray.50"
            fontSize={{ base: "24", lg: "48px" }}
          >
            {continent.name}
          </Text>
          <Text
            fontWeight={700}
            color="gray.100"
            fontSize={{ base: "14", lg: "24px" }}
          >
            {continent.description}
          </Text>
        </Box>
      </Link>
    </Box>
  );
};
