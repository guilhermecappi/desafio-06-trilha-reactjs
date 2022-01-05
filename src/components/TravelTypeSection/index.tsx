import { useBreakpointValue } from "@chakra-ui/react"
import { TravelTypeSectionMobileVersion } from "./MobileVersion"
import { TravelTypeSectionWideVersion } from "./WideVersion"

export const TravelTypeSection = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  if (isWideVersion) {
    return <TravelTypeSectionWideVersion />
  }

  return <TravelTypeSectionMobileVersion />
}