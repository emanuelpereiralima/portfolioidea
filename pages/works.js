import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbEcos from '../public/images/works/ecoslogo.png'
import thumbskethfab from '../public/images/works/skethfablogo.jpeg'
import thumbreformei from '../public/images/works/reformeilogo.png'
import thumbreplit from '../public/images/works/replitlogo.png'
import thumbArtes from '../public/images/works/composicoes tumb.png'


const Works = () => (
  <Layout title="Projetos">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Trabalhos
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="ecos" title="Ecos" thumbnail={thumbEcos}>
            Primeiro jogo na proposta de live game que fiz
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="skethfab"
            title="Skethfab"
            thumbnail={thumbskethfab}
          >
            Meus projetos em 3D
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="reformei"
            title="Reformei"
            thumbnail={thumbreformei}
          >
            Projeto que desenvolvi na faculdade onde comecei a ter contato com os conceitos de
            UI/UX e pude aplica-los 
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem 
          id="replit" 
          thumbnail={thumbreplit} 
          title="Replit">

            Repositório onde tenho todos os meus projetos feitos em python, 
            para todos os tipos de soluções, que podem ser testados em nuvem
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="artes" thumbnail={thumbArtes} title="Artes?">
            Durante a pandemia me arrisquei fazendo alguns desenhos com silhuetas
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works