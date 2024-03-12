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
  <Layout title="Reformei">
    <Container>
      <Title>
        Reformei <Badge>2019</Badge>
      </Title>
      <P>
      Projeto focado em facilitar o atendimento e a 
      comunicação entre prestadores de serviços e clientes, 
      com segurança e praticidade.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Adobe XD, Flutter</span>
        </ListItem>
        <ListItem>
          <Meta>Apresentação</Meta>
          <Link href="https://www.behance.net/gallery/109006007/Prototipo-Reformei">
            Behance <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/reformeilogo.png" alt="reformei logo" />
    </Container>
  </Layout>
)

export default Work