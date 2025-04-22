import {
    Container,
    Link
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { Title} from '../../components/games'
  import P from '../../components/paragraph'
  import { ExternalLinkIcon } from '@chakra-ui/icons'

  
  const dancejester = () => (
    <Layout title="games 2025">
      <Container>
      </Container>
      <Container>
        <Title> 
         Dancing Jester
        </Title>
        <P>
          Jogo Desenvolvido na Global Game Jam 2024, disponível para download no site da Global Game Jam e no Itch.io
        </P>
        <Link href="https://globalgamejam.org/games/2024/dancing-jester-9">
          Global Game Jam <ExternalLinkIcon mx="2px" />
        </Link>
        <p> Link Secundário</p>
        <Link href="https://rapheto.itch.io/dancingjester">
          Itch.io <ExternalLinkIcon mx="2px" />
        </Link>
      </Container>
    </Layout>
    
  )
  
  export default dancejester