import { Box, Image, Text, useBreakpointValue, BoxProps } from "@chakra-ui/react"
import { ReactNode } from "react"

interface TravelTypeItemProps extends BoxProps {
  children: ReactNode
  image?: string
}

export const TravelTypeItem = ({ children, image, textAlign="center", ...props }: TravelTypeItemProps) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box textAlign={textAlign} {...props}>
      { isWideVersion && <Image src={image} mx="auto" mb="6"/> }
      <Text fontSize={["18", "24"]} fontWeight={["500", "600"]}>
        {children}
      </Text>
    </Box>
  )
}