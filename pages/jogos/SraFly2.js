import {
  Container,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/jogos'
import P from '../../components/paragraph'

const SraFly2 = () => (
  <Layout title="Sra Fly 2">
    <Container>
    </Container>
    <Container>
      <Title>
       Sra Fly 2
      </Title>
      <P>
        Jogo Desenvolvido para o SBGames 2013, infelizmente ele não está mais disponível nas lojas para download. :[
      </P>
    </Container>
    <iframe width="600" height="400" src="https://www.youtube.com/embed/0QtM8JR_bYo" title="Sra Fly 2 - Festival de Jogos - SB Games 2013" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </Layout>
  
)

export default SraFly2