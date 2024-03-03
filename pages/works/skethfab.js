import {
  Container,
  Badge,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Modelos 3D">
    <Container>
      <Title>
       skethfab <Badge>2019 - Atualmente</Badge>
      </Title>
      <P>
       Aqui é onde exibo os modelos 3D que tenho feito também sendo uma forma de visualizar
       meu progresso aprendendo cada vez mais e buscando melhorar os modelos que já fiz
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Maya / Blender</span>
        </ListItem>
      </List>
      <div class="sketchfab-embed-wrapper"> <iframe title="Toilet paper roll" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/e23978f8a7c64447927cfdc175cb9312/embed?ui_theme=dark"> </iframe> </div>
      <div class="sketchfab-embed-wrapper"> <iframe title="Shelf" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/1247e0296bc341afbd447e513edafa24/embed?ui_theme=dark"> </iframe> </div>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
