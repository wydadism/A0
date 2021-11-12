import {
  Container,
  Badge,
  Link,
  List,
  ListItem,

  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Sarri b'darija">
    <Container>
      <Title>
        Sarri b'darija "ماوريسيو ساري بالدارجة" <Badge>2018</Badge>
      </Title>
      <P>
        First moroccan page with articles written in Arabic/DARIJA.
      </P>
      <P>
        Sarribdarija focuses on football matches (mostly Moroccan league/Serie A) but also talks about systems, coaches, positions etc.

      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Facebook</span>
        </ListItem>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://facebook.com/sarri10/">
            Sarribdarija{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Examples</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://www.facebook.com/Sarri10/posts/2649479495128887?__cft__[0]=AZU88Z3MU0HivzYwFwJJ0LMRjiOneqZM_fsW0ERN_XHGRf7EGXL6DjWD1MlQ_sxWVA-ryqkV2AZ8U6rVbBRzsusWiqlsOjKoSLVBPBUpmJ6qY33t49QYnWtuBwlLBE08LYJLG_MiJ_Hd_qAYWEs_HOlFtghese4U1KyYt2isYzCFeTFjrFmmnqpSFQ3xyl4TEdc&__tn__=%2CO%2CP-R">
            <Badge mr={2}>Player Analysis</Badge>
            جمال حركاس『2019』
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://www.facebook.com/Sarri10/posts/3922076131202544">
            <Badge mr={2}>Post Match Analysis</Badge>
            تحليل مباراة الوداد 1-1 شباب المحمدية『2021』
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://www.facebook.com/Sarri10/posts/2212706925472815?__cft__[0]=AZXWPLyp7ftEf_7aO7uYsyDy69aRwwM2NTAP4DQIrjywqGTBFfYEUJ1QunjP30SXhHY_I9PPAoOpHHT9RqbMEtgjFpDXULst6Np43tiXw9MNGrji4bim7MjqdCUpsZalOLdKuzyy4vz7y0S44pYKZqX7VUKKFDqFNUCBRFyqYfm_7TFk9eXASz3av3CsbD1X-3g&__tn__=%2CO%2CP-R">
            <Badge mr={2}>Opponent Analysis</Badge>
            [سلسلة تشريح الترجي「2019」
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>

        <ListItem>
          <Badge mr={2}>Wydad & Marketing?</Badge>
          <Link href="https://www.facebook.com/Sarri10/photos/a.1880630608680450/2631368823606621/">
            「إذا لم تستح فلن تفعل ما شئت『2019』
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>
      </UnorderedList>


      <WorkImage src="/images/works/walknote_01.png" alt="walknote" />
      <WorkImage src="/images/works/walknote_03.png" alt="walknote" />
      <WorkImage src="/images/works/walknote_04.png" alt="walknote" />
      <WorkImage src="/images/works/walknote_05.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
