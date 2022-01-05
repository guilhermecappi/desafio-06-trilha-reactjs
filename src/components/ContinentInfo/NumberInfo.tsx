import { Box, Text } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

interface NumberInfoProps {
  number: number
}

export const NumberInfo: FC<PropsWithChildren<NumberInfoProps>> = ({ children, number }) => {
  return (
    <Box alignSelf="center">
      <Text color="yellow.500" fontWeight={600} fontSize={["24", "48"]} textAlign="center">
        {number}
      </Text>
      <Text fontWeight={[400, 600]} fontSize={["18", "24"]} textAlign="center">
        {children}
      </Text>
    </Box>
  )
}