import { Box, Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'

import thumbVideo1min from '../../public/images/videoapresentacaotumb.webp'
import thumbVideo3min from '../../public/images/videoapresentacaotumb.webp'

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
            category="apresentacao"
            id="video1min"
            title="Sra Fly 2 test"
            thumbnail={thumbVideo1min}
          >
            
          </WorkGridItem>
          <WorkGridItem
            category="apresentacao"
            id="video3min"
            title="Beside by Himself"
            thumbnail={thumbVideo3min}
          >
            Apresentação um pouco mais completa onde consigo falar mais detalhadamente
            sobre sonhos e aspirações com as habilidades que tenho, também sobre habilidades
            que pretendo adquirir
          </WorkGridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default jogos