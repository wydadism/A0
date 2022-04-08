import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  UnorderedList,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoFacebook,
} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a ⚽ Performance & Data Scientist based in Morocco.!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Remidi Kamal
          </Heading>
          <p> Future Wydad Atheltic Club coach.</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/takuya.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          who's Kamal?
        </Heading>
        <Paragraph>
          Remidi Kamal is a first year PhD Student in Sport sciences &
          Part-time Member of the analysis team for FC Midtjylland Academy.
        </Paragraph>
      <Paragraph>
          Football Performance & Data Scientist based in Casablanca with a passion for building
          various applications of statistics and machine learning in football &
          genuinely fascinated by the tactical side of the game.
      </Paragraph>
        <Paragraph>
          Apart from football, He's enthralled by philosophy and psychology.
          </Paragraph>
        <Paragraph>
          *Mathematics is the language in which god has written the universe.*
            </Paragraph>
          <Paragraph>
          {' '}
        </Paragraph>
          <NextLink href="/works/inkdrop">
            <Link>Wydad Football Science</Link>
          </NextLink>
          .

        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in Casablanca ("الدار البيضاء"), Morocco ("المغرب").
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Completed the Master&apos;s Program in the Graduate School of
          National School of Business and Management
          ("المدرسة الوطنية للتجارة و التسيير")
        </BioSection>
        <BioSection>
          <BioYear>2020 to present</BioYear>
          Works as a freelance data scientist.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          PhD Student | Sport Sciences | hassan 1 university | Settat ("سطات")
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills :
        </Heading>
      </Section>

      <UnorderedList my={4}>
          <ListItem>Python Programming Language.</ListItem>
          <ListItem>Machine Learning & Deep Learning.</ListItem>
          <ListItem>Data Analytics & Visualization.</ListItem>
          <ListItem>Web Scraping With Python.</ListItem>
          <ListItem>PyTorch & Tensorflow.</ListItem>
          <ListItem>Tableau.</ListItem>
          <ListItem>SQL.</ListItem>
      </UnorderedList>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
            <Link href="https://soundcloud.com/souulaymaa" target="_blank">
            Soulayma ♥{' '}
          </Link>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://twitter.com/RemidiKamal" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @RemidiKamal
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/sarri10/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoFacebook} />}
              >
                @Sarribdarija
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/kamal.remidi.5/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoFacebook} />}
              >
                @RemidiKamal
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/michiamopythonista" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @michiamopythonista
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/channel/UCNRaeqjWXFVpkHMVUy7Olfw"
            title="Remidi Kamal"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://www.wydadfootballscience.com/"
            title="WFS PLATFORM"
            thumbnail={thumbInkdrop}
          >
            The Match Analysis tool
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)
export default Home

