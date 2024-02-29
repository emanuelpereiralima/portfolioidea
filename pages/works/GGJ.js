import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Global Game Jam">
    <Container>
      <Title>
        Global Game Jam <Badge>2014 - Atualmente</Badge>
      </Title>
      <P>
        Competição de jogos onde temos um fim de semana para desenvolver jogos com
        temática que nos é revelada na sexta-feira
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://globalgamejam.org/users/manopereira" target="_blank">
            Perfl<ExternalLinkIcon mx="2px" />
            </Link>
            <Link href="https://v3.globalgamejam.org/2014/games/beside-himself" target="_blank">
            Primeiro Jogo<ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Unity / Blender
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/globalgamejam.png" alt="Logo Global Game Jam" />
      <WorkImage src="/images/works/besidehimself.png" alt="Beside Himself"/>
      <WorkImage src="/images/works/dancejester.jpg" alt="Dance Jester" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
