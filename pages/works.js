import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="wfs-tool" title="WFS TOOL" thumbnail={thumbInkdrop}>
            helps coaches and analysts to analyze the events and view a digital recreation of action in a single match.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="sarribdarija"
            title="Sarri b'darija"
            thumbnail={thumbWalknote}
          >
            First moroccan page with articles written in Arabic/DARIJA.
          </WorkGridItem>
        </Section>
      <Section delay={0.1}>
          <WorkGridItem id="Scouting" thumbnail={thumbMenkiki} title="Scouting">
            Advanced statistics help you go into each and every detail of Moroccan league.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="self" thumbnail={thumbStyly} title="Self-Supervised">
            Building tools that leverage tracking data to help accelerate video analysis workflows.
          </WorkGridItem>
        </Section>
      </SimpleGrid>



    </Container>
  </Layout>
)

export default Works
