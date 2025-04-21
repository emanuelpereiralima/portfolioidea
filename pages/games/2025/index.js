import {useState,useCallback, lazy, useEffect } from 'react'
import { 
  Container,
  Box,
  Flex,
  Button,
  Text,
  Spinner
} from '@chakra-ui/react'
import Layout from '../../../components/layouts/article'
import { Title } from '../../../components/games'
import P from '../../../components/paragraph'

const months = [
  "january", "febuary", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december"
]

const index = () => {
  const [currentIndex, setCurrentIndex] = useState(() => {
    const now = new Date()
    return now.getMonth()
  })
  const [isChanging, setIsChanging] = useState(false)
  const [CurrentComponent, setCurrentComponent] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const loadComponent = useCallback(async (index) => {
    setIsLoading(true)
    try {
      const Component = lazy(() => import(`../2025/${months[index]}`))
      setCurrentComponent(<Component />)
    } catch (error) {
      let errorContent = null      
      setCurrentComponent(errorContent)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    loadComponent(currentIndex)
  }, [loadComponent]) 

  const handleChannelChange = useCallback(async (direction) => {
    setIsChanging(true)
    const newIndex = (currentIndex + direction + 12) % 12
    
    setTimeout(async () => {
      await loadComponent(newIndex)
      setCurrentIndex(newIndex)
      setIsChanging(false)
    }, 300)
  }, [currentIndex, loadComponent])

  return (
    <Layout title="games 2025">
      <Container 
        maxW="container.xl" 
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minH="100vh"
        py={8}
      >
        <Title>games 2025</Title>
        <P>games que desenvolvi em 2025.</P>

        <Box 
          w={["100%", "100%", "1280px"]}
          h={["500px", "600px", "720px"]}
          mt={8}
          bg="gray.800"
          borderRadius="20px"
          boxShadow="dark-lg"
          p={[4, 6, 8]}
          position="relative"
        >
          <Box
            w="100%"
            h="100%"
            bg="black"
            borderRadius="12px"
            border="15px solid"
            borderColor="gray.700"
            overflow="hidden"
          >
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              justify="center"
              zIndex={2}
            >
              <Flex align="center" gap={[4, 6, 10]} mb={[4, 6, 10]}>
                <ChannelButton 
                  direction="prev" 
                  onClick={() => handleChannelChange(-1)}
                />

                <Box
                  bg="blackAlpha.800"
                  px={[4, 6, 10]}
                  py={[2, 3, 4]}
                  minW={["200px", "250px", "300px"]}
                  textAlign="center"
                  border="3px solid"
                  borderColor="gray.600"
                  borderRadius="lg"
                  boxShadow="inset 0 0 10px rgba(0,0,0,0.5)"
                >
                  <Text
                    fontSize={["2xl", "3xl", "4xl"]}
                    color="yellow.400"
                    fontFamily="monospace"
                    textShadow="0 0 8px rgba(255,255,0,0.3)"
                  >
                    {months[currentIndex].toUpperCase()}
                  </Text>
                </Box>

                <ChannelButton 
                  direction="next" 
                  onClick={() => handleChannelChange(1)}
                />
              </Flex>

              <Box 
                w="90%" 
                h="70%" 
                border="4px solid" 
                borderColor="gray.600"
                position="relative"
                overflow="hidden"
              >
                {isLoading ? (
                  <Flex justify="center" align="center" h="100%">
                    <Spinner 
                      size="xl" 
                      color="yellow.400" 
                      thickness="4px"
                      speed="0.65s"
                    />
                  </Flex>
                ) : CurrentComponent}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

const ChannelButton = ({ direction, onClick }) => (
  <Button
    onClick={onClick}
    variant="unstyled"
    minW={["60px", "80px", "100px"]}
    h={["50px", "60px", "70px"]}
    bg="linear-gradient(145deg, #5a5a5a, #3a3a3a)"
    border="4px solid"
    borderTopColor="gray.400"
    borderLeftColor="gray.400"
    borderRightColor="gray.600"
    borderBottomColor="gray.600"
    borderRadius="10px"
    boxShadow="5px 5px 10px rgba(0,0,0,0.3)"
    _hover={{
      transform: 'translateY(-2px)',
      boxShadow: '7px 7px 12px rgba(0,0,0,0.4)'
    }}
    _active={{
      transform: 'translateY(4px)',
      boxShadow: '2px 2px 5px rgba(0,0,0,0.3) inset',
      borderTopColor: 'gray.600',
      borderLeftColor: 'gray.600',
      borderRightColor: 'gray.400',
      borderBottomColor: 'gray.400'
    }}
    transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
  >
    <Text 
      fontSize={["2xl", "3xl", "4xl"]} 
      color="gray.100" 
      textShadow="2px 2px 4px rgba(0,0,0,0.5)"
    >
      {direction === 'prev' ? '◀' : '▶'}
    </Text>
  </Button>
)

export default index