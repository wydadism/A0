import {
  Box,
  Container,
  Badge,

  List,
  ListItem,

  UnorderedList,

} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Scouting tool">
    <Container>
      <Title>
        Wfs scouting tool <Badge>2020</Badge>
      </Title>
      <P>
        -Use Advanced Search to discover new talents according to performance statistics
      </P>
    <P>
        -Advanced statistics help you go into each and every detail of Moroccan league.
      </P>
      <UnorderedList my={4}>
        <ListItem>Advanced Attack Metrics</ListItem>
        <ListItem>Advanced Possession Metrics</ListItem>
        <ListItem>Advanced Defense Metrics</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Tableau</span>
        </ListItem>
      </List>
      <Box>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/zgZIZGjqfhM" title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
      </Box>

      <Box align="center" my={6}>

      </Box>



    </Container>
  </Layout>
)

export default Work
