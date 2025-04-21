import { Box, Text } from '@chakra-ui/react'

const janeiro = () => {
  return (
    <Box w="100%" h="100%" position="relative" p={8}>
      <Text
        fontSize="6xl"
        color="red.500"
        fontFamily="monospace"
        textAlign="center"
        textTransform="uppercase"
        textShadow="0 0 15px rgba(255,0,0,0.7)"
        p={6}
        bg="blackAlpha.600"
      >
        VACILEI
        NÃO FIZ
      </Text>
    </Box>
  )
}

export default janeiro