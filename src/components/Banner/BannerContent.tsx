import { Box, Text } from "@chakra-ui/react"

export const BannerContent = () => {
  return  (
    <Box maxW="524">
      <Text as="h1" fontSize={{ base: '20px', lg: '36px' }} fontWeight="500" color="gray.50">
        5 Continentes, <br />
        infinitas possibilidades.
      </Text>
      <Text as="p" fontSize={["14", "20"]} color="gray.100" mt={["2", "5"]}>
        Chegou a hora de tirar do papel a viagem que você
        sempre sonhou. 
      </Text>
    </Box>
  )
}