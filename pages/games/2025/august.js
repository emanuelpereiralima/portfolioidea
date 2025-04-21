import { Box, Text } from '@chakra-ui/react'

const august = () => {
  return (
    <Box w="100%" h="100%" position="relative" p={8}>
      <Text
        fontSize="6xl"
        color=" rgba(9, 173, 55, 0.7)"
        fontFamily="monospace"
        textAlign="center"
        textTransform="uppercase"
        textShadow="0 0 15px rgba(9, 173, 55, 0.7)"
        p={6}
        bg="blackAlpha.600"
      >
        EM BREVE
      </Text>
    </Box>
  )
}

export default august