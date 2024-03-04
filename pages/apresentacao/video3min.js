import {
  Container,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Meta } from '../../components/apresentacao'
import P from '../../components/paragraph'

const video1min = () => (
  <Layout title="Video 3 minutos">
    <Container>
    </Container>
    <Container>
      <Title>
       Video 3 minutos - Transcrição
      </Title>
      <P>
      EM BREVE
      </P>
    </Container>
  </Layout>
)

export default video1min
export { getServerSideProps } from '../../components/chakra'
