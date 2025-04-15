import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Ecos">
    <Container>
      <Title>
        Ecos <Badge>2023</Badge>
      </Title>
      <P>
        Meu primeiro jogo no estilo live game onde busquei contar um pouco da minha história
        de vida trazendo enigmas atrelados a momentos de vivência
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://bit.ly/jogueecos">
            Jogue agora <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>OBS Studio / StreamYard</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/ecoslogo.png" alt="Ecos Tumb" />
    </Container>
  </Layout>
)

export default Work