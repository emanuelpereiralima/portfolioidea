import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon} from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoDropbox, IoLogoInstagram, IoLogoGithub,IoLogoLinkedin,IoLogoTiktok} from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Olá! Sinta-se a vontade para conhecer meus trabalhos e quem sou!
        Qualquer dúvida só perguntar
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Emanuel Pereira
          </Heading>
          <p> Criador ( Artista / Designer / Desenvolvedor )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/foto-perfil.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Sobre mim
        </Heading>
        <Paragraph>
          Sou um criador de games, filtros, programas, videos, dentre tantas outras coisas
          e não pretendo parar apenas com o conhecimento que já tenho sobre criação, já que me
          vejo construindo sonhos, projetos, soluções, entretenimento e trazendo à vida o que antes só habitava
          o mundo das ideias.Acredito que isso que me mova hoje a continuar aprendendo e buscando
          cada dia me tornar mais criativo e que esse conhecimento possa ser propagado por onde eu passar.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Meu portifólio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Mini Bio
        </Heading>
        <BioSection>
          <BioYear>2012 - 2014</BioYear>
          Técnico de Programação de games digitais -  ETECD
        </BioSection>
        <BioSection>
          <BioYear>2016 - 2025</BioYear>
          Bacharelado em Sistemas de Informação - UFRPE
        </BioSection>
        <BioSection>
          <BioYear>2019 - 2021</BioYear>
           Curso de criação de games(<Link
            as={NextLink}
            href="https://www.saga.com.br/cursos/criacao-de-games"
            passHref
            target="_blank">
            PlayGame
          </Link>) - Saga Art School
        </BioSection>
        <BioSection>
          <BioYear>2021 - 2023</BioYear>
          Estágio de Desenvolvimento de Software - Accenture
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Minhas redes
        </Heading>
        <List>
          <ListItem>
            <Link href="https://www.fab.com/sellers/Emanuel%20Pereira" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoDropbox />}
              >
                Fab
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/emanuel-pereira/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Linkedin
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/manopereira" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                Instagram
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.tiktok.com/@manopereira" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTiktok />}
              >
                Tiktok
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/emanuelpereiralima" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                Github
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home