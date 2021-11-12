import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Self-Supervised Representations for Tracking Data">
    <Container>
      <Title>
        Self-Supervised Representations for Tracking Data
        <Badge>2021</Badge>
      </Title>
      <P>
        Video analysis is a well-established and critical process in football, but meticulously studying match footage is incredibly time-consuming.
      </P>
        <P>
          The purpose of this project is to build collaborative tools that help analysts spend less time laboriously sifting through footage, and more time putting their deep domain expertise to use. We build 3 such tools that enable analysts to get instant responses to the following requests:
        </P>
      <P>
        Situation Search: "Find me clips of other instances where something similar happened."
      </P>
    <P>
        Auto-Tagging: "Tag all of Team X's High press this season."
  </P>
<P>
        Team Fingerprints: "What are some things that Team X does unusually often?"
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Presentation Slides</Meta>
          <Link href="https://www.facebook.com/kamal.remidi.5/posts/1063319061138038?__cft__[0]=AZUTu9xLAtAKrLKY7BXmVzSsgdH0hA_h-6toYpD7uQyKsa8uxsF7rdrNJ3u1P7Cf8FLvzUAaPhnQEhQnSv-IjYyhcj3wVoMq9VH6CE1M96TDKLP4vt9xNKCk2ndEa7S5-v8&__tn__=%2CO%2CP-R">
            Self-Supervised Representations for Tracking Data <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/goQaSKQD-t4" title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
      </AspectRatio>

      <WorkImage src="/images/works/styly_eyecatch.png" alt="STYLY" />
      <WorkImage src="/images/works/styly_01.png" alt="STYLY" />
      <WorkImage src="/images/works/styly_02.png" alt="STYLY" />
      <WorkImage src="/images/works/styly_03.png" alt="STYLY" />
    </Container>
  </Layout>
)

export default Work
