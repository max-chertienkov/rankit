// @flow
import * as React from 'react';
import {
  Wrapper,
  Container,
  AdvantageInner,
  SectionSubTitle,
  SectionTitle,
  SingleAdtList,
  SingleAdvantage,
  TxtBlock,
  BlockTitle,
  BlockDesc,
  ImgBlock,
  Img,
  FeaturedResourcesInner,
  ResourceList,
  SingleResource,
  ResourceIcon,
  ResourceTitle,
  ResourceDescription
} from './styles';

const EmergentBlueBgGroup = () => (
  <Wrapper>
    <Container>
      <AdvantageInner>
        <SectionSubTitle>What we do</SectionSubTitle>
        <SectionTitle>Emergent Dynamics is Built for Advantage</SectionTitle>
        <SingleAdtList>
          <SingleAdvantage>
            <TxtBlock>
              <BlockTitle>
                Effortless operation of models at scale across data
              </BlockTitle>
              <BlockDesc>
                Lorem ipsum dolor sit amet, ea pro brute facer propriae, nec
                epicurei senserit pericula cu. Ea graece animal equidem cum. Ei
                graece omittantur vel. Habeo persius scaevola qui te. Duo eu
                mucius nostrum. Causae docendi temporibus vel at.
              </BlockDesc>
            </TxtBlock>
            <ImgBlock>
              <Img src="/static/imgs/what-we-do1.png" alt="Advantage Image" />
            </ImgBlock>
          </SingleAdvantage>
          <SingleAdvantage>
            <ImgBlock>
              <Img src="/static/imgs/what-we-do2.png" alt="Advantage Image" />
            </ImgBlock>
            <TxtBlock>
              <BlockTitle>
                Easy shift operational workloads to the cloud at any request
              </BlockTitle>
              <BlockDesc>
                Lorem ipsum dolor sit amet, ea pro brute facer propriae, nec
                epicurei senserit pericula cu. Ea graece animal equidem cum. Ei
                graece omittantur vel. Habeo persius scaevola qui te. Duo eu
                mucius nostrum. Causae docendi temporibus vel at.
              </BlockDesc>
            </TxtBlock>
          </SingleAdvantage>
          <SingleAdvantage>
            <TxtBlock>
              <BlockTitle>
                Deliver biological insights for apps and analytical systems
              </BlockTitle>
              <BlockDesc>
                Lorem ipsum dolor sit amet, ea pro brute facer propriae, nec
                epicurei senserit pericula cu. Ea graece animal equidem cum. Ei
                graece omittantur vel. Habeo persius scaevola qui te. Duo eu
                mucius nostrum. Causae docendi temporibus vel at.
              </BlockDesc>
            </TxtBlock>
            <ImgBlock>
              <Img src="/static/imgs/what-we-do3.png" alt="Advantage Image" />
            </ImgBlock>
          </SingleAdvantage>
        </SingleAdtList>
      </AdvantageInner>
      <FeaturedResourcesInner>
        <SectionSubTitle>Resources</SectionSubTitle>
        <SectionTitle>Our Featured Resources</SectionTitle>
        <ResourceList>
          <SingleResource>
            <ResourceIcon
              style={{ backgroundImage: 'url(/static/imgs/server.png)' }}
            />
            <ResourceTitle>Al centred</ResourceTitle>
            <ResourceDescription>
              Massively decoupled Multi-Agent Reinforcement Learning for the
              cloud.
            </ResourceDescription>
          </SingleResource>
          <SingleResource>
            <ResourceIcon
              style={{ backgroundImage: 'url(/static/imgs/statistic.png)' }}
            />
            <ResourceTitle>Scale tools</ResourceTitle>
            <ResourceDescription>
              Cloud agnostic architecture. It just works containers.
            </ResourceDescription>
          </SingleResource>
          <SingleResource>
            <ResourceIcon
              style={{ backgroundImage: 'url(/static/imgs/relation.png)' }}
            />
            <ResourceTitle>Simulation Analysis</ResourceTitle>
            <ResourceDescription>
              Learn what comes next without wasting culture media. Test drug
              outcomes in virtual patients.
            </ResourceDescription>
          </SingleResource>
        </ResourceList>
      </FeaturedResourcesInner>
    </Container>
  </Wrapper>
);

export default EmergentBlueBgGroup;
