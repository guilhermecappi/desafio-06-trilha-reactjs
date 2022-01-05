import { Box, Flex } from "@chakra-ui/react"
import { TravelTypeItem } from "./TravelTypeItem"

export const TravelTypeSectionWideVersion = () => {
  return (
    <Box px="12" py="20">
      <Flex maxW="1190" mx="auto" justifyContent="space-between">
        <TravelTypeItem image="/images/cocktail.svg">
          vida noturna
        </TravelTypeItem>
        <TravelTypeItem image="/images/surf.svg">
          praia
        </TravelTypeItem>
        <TravelTypeItem image="/images/building.svg">
          moderno
        </TravelTypeItem>
        <TravelTypeItem image="/images/museum.svg">
          clássico
        </TravelTypeItem>
        <TravelTypeItem image="/images/earth.svg">
          e mais...
        </TravelTypeItem>
      </Flex>
    </Box>
  )
}