import { Box, Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'

import thumbSraFly2 from '../../public/images/games/srafly2tumb.jpg'
import thumbBesideHimself from '../../public/images/games/bannerbesidehimself.png'
import thumbDanceJester from '../../public/images/games/dancejester.jpg'
import thumb2025games from '../../public/images/games/2025gamesimage.png'


const games = () => (
  <Layout title="games">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Jogos
      </Heading>

      <Box my={4}>
        Alguns games que fiz ao longo dos anos como desenvolvedor.
      </Box>

      <Section>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <WorkGridItem
            category="games"
            id="2025/"
            title="games de 2025"
            thumbnail={thumb2025games}
          ></WorkGridItem>
          <WorkGridItem
            category="games"
            id="dancejester"
            title="Dancing Jester"
            thumbnail={thumbDanceJester}
          ></WorkGridItem>
          <WorkGridItem
            category="games"
            id="BesideHimself"
            title="Beside Himself"
            thumbnail={thumbBesideHimself}
          ></WorkGridItem>
          <WorkGridItem
            category="games"
            id="SraFly2"
            title="Sra Fly 2"
            thumbnail={thumbSraFly2}
          ></WorkGridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default games