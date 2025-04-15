import { Box, Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'

import thumbSraFly2 from '../../public/images/jogos/srafly2tumb.jpg'
import thumbBesideHimself from '../../public/images/jogos/bannerbesidehimself.png'
import thumbDanceJester from '../../public/images/jogos/dancejester.jpg'


const jogos = () => (
  <Layout title="Jogos">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Jogos
      </Heading>

      <Box my={4}>
        Alguns jogos que fiz ao longo dos anos como desenvolvedor.
      </Box>

      <Section>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <WorkGridItem
            category="jogos"
            id="2025Games"
            title="Jogos de 2025"
            thumbnail={thumbBesideHimself}
          >
          </WorkGridItem>
          <WorkGridItem
            category="jogos"
            id="SraFly2"
            title="Sra Fly 2"
            thumbnail={thumbSraFly2}
          >
            
          </WorkGridItem>
          <WorkGridItem
            category="jogos"
            id="BesideHimself"
            title="Beside Himself"
            thumbnail={thumbBesideHimself}
          >
          </WorkGridItem>
          <WorkGridItem
            category="jogos"
            id="DanceJester"
            title="Dance Jester"
            thumbnail={thumbDanceJester}
          >
            
          </WorkGridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default jogos