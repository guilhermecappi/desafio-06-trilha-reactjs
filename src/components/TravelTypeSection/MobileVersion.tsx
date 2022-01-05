import { Flex } from "@chakra-ui/react"
import { TravelTypeItem } from "./TravelTypeItem"

export const TravelTypeSectionMobileVersion = () => {
  return (
    <Flex px="60px" py="9" flexWrap="wrap" justify="center" gridGap="6">
      <TravelTypeItem textAlign="left">
        vida noturna
      </TravelTypeItem>
      <TravelTypeItem textAlign="right">
        praia
      </TravelTypeItem>
      <TravelTypeItem textAlign="left">
        moderno
      </TravelTypeItem>
      <TravelTypeItem textAlign="right">
        clássico
      </TravelTypeItem>
      <TravelTypeItem>
        e mais...
      </TravelTypeItem>
    </Flex>
  )
}