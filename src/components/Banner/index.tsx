import { Box, Image, useBreakpointValue } from "@chakra-ui/react"
import { BannerContent } from "./BannerContent"

export const Banner = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box backgroundImage="url(/images/background.svg)" backgroundSize="cover" px="4" py={["7", "20"]}>
      <Box maxW="1190" mx="auto" position="relative">
        <BannerContent />
        { isWideVersion && <Image src="/images/airplane.svg" position="absolute" bottom="-120" right="0" />}
      </Box>
    </Box>
  )
}