import {
  Container,
  Link
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Meta, WorkImage } from '../../components/games'
import P from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const BesideHimself = () => (
  <Layout title="Beside Himself">
    <Container>
    </Container>
    <Container>
      <Title>
      Beside Himself
      </Title>
      <P>
      Jogo desenvolvido na Global Game Jam em 2014
      </P>
      <Meta>Website</Meta>
          <Link href="https://v3.globalgamejam.org/2014/games/beside-himself">
            Jogue agora <ExternalLinkIcon mx="2px" />
          </Link>
      <WorkImage src="/images/games/besidehimselfgameplay.png" alt="Beside Himself Gameplay" />
      <P>
      Equipe
      </P>
      <WorkImage src="/images/games/equipebesidehimself.jpg" alt="Beside Himself Team" />
    </Container>
  </Layout>
)

export default BesideHimself