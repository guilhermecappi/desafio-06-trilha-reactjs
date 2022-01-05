import { FC } from "react";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { Country } from "../../types/Country";

interface CitySectionProps {
  countries: Country[];
}

export const CitySection: FC<CitySectionProps> = ({ countries }) => {
  return (
    <Box px={4}>
      <Box maxW="1190" mx="auto">
        <Text fontWeight={500} fontSize={["24", "36"]}>
          Cidades +100
        </Text>
        <Grid
          templateColumns="repeat(auto-fit, 256px)"
          justifyContent={{ base: "center", lg: "unset" }}
          gap={["5", "12"]}
          py={["5", "10"]}
        >
          {countries.map((country) => (
            <GridItem borderRadius={4} overflow="hidden">
              <Box
                backgroundImage={`url(${country.image})`}
                minH="173px"
                backgroundSize="cover"
              />
              <Flex
                justify="space-between"
                align="center"
                p={6}
                borderWidth="1px"
                borderStyle="solid"
                borderColor="yellow.500"
                borderTopColor="transparent"
              >
                <Box>
                  <Text fontWeight={600} fontSize="20">
                    {country.city}
                  </Text>
                  <Text color="gray.300" fontWeight={500} fontSize="16">
                    {country.name}
                  </Text>
                </Box>
                <Image w="30px" h="30px" src={country.flag} />
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
