import { Box, Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'

import thumbVideo1min from '../../public/images/videoapresentacaotumb.webp'
import thumbVideo3min from '../../public/images/videoapresentacaotumb.webp'

const apresentacao = () => (
  <Layout title="Apresentação">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Videos de Apresentação
      </Heading>

      <Box my={4}>
        Aqui você encontra videos onde falo um pouco sobre minhas experiências descritas
        ao longo de toda minha jornada como criador, sinta-se a vontade para escolher o video 
        que o tempo esteja de acordo com o que podes ver no momento
      </Box>

      <Section>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <WorkGridItem
            category="apresentacao"
            id="video1min"
            title="1 min"
            thumbnail={thumbVideo1min}
          >
            Apresentação simples rápida e direta sobre quem sou e o que faço
          </WorkGridItem>
          <WorkGridItem
            category="apresentacao"
            id="video3min"
            title="3 min"
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

export default apresentacao
export { getServerSideProps } from '../../components/chakra'
