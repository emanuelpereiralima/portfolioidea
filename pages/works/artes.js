import {
  Container,
  Badge,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Artes">
    <Container>
      <Title>
        Artes <Badge>2020</Badge>
      </Title>
      <P>
        Algumas artes que fiz durante a pandemia e no meu tempo livre 
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Photoshop</span>
        </ListItem>
      </List>
      <SimpleGrid columns={2} gap={3}>
      <WorkImage src="/images/works/composicao01.png" alt="composicao 01" />
      <WorkImage src="/images/works/composicao02.png" alt="composicao 02" />
      <WorkImage src="/images/works/composicao03.png" alt="composicao 03" />
      <WorkImage src="/images/works/composicao04.png" alt="composicao 04" />
      <WorkImage src="/images/works/composicao05.png" alt="composicao 05" />
      <WorkImage src="/images/works/composicao06.png" alt="composicao 06" />
      </SimpleGrid>
      <iframe src="https://www.behance.net/embed/project/104771031?ilo0=1" height="100" width="485" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
    </Container>
  </Layout>
)

export default Work