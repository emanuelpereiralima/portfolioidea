import {
  Container,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/apresentacao'
import P from '../../components/paragraph'

const video1min = () => (
  <Layout title="Video 1 minuto">
    <Container>
    </Container>
    <Container>
      <Title>
       Video 1 minuto - Transcrição
      </Title>
      <P>
       EM BREVE
      </P>
    </Container>
  </Layout>
)

export default video1min
export { getServerSideProps } from '../../components/chakra'
