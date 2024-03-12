import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Replit">
    <Container>
      <Title>
        Replit <Badge>2016 - Atualmente</Badge>
      </Title>
      <P>
        com a praticidade de poder programar onde estiver vi no replit uma ótima opção 
        para armanezar meus projetos em python que desenvolvo desde a universidade já que
        passava em média 4 horas no transporte público e assim conseguia aproveitar esse tempo.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/craftzdog/caffe-ios-sample">
            github.com/craftzdog/caffe-ios-sample <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/replitlogo.png" alt="replit" />
    </Container>
  </Layout>
)

export default Work