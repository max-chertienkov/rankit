// @flow
import * as React from 'react';
import {
  Wrapper,
  Container,
  HeadingWrap,
  SectionSubTitle,
  SectionTitle,
  ArchitectureDescription,
  ArchitectureContent,
  ArchitectureCenter,
  StarIcons,
  LogoIcon,
  ArcContent,
  SingleArchitecture,
  ArcIcon,
  ArcInfo,
  ArcTitle,
  ArcDesc
} from './styles';

const DataArchitecture = () => (
  <Wrapper>
    <Container>
      <HeadingWrap>
        <SectionSubTitle>Simplified Architecture</SectionSubTitle>
        <SectionTitle>
          Bringing Simplicity & Ease to Your Data Architecture
        </SectionTitle>
        <ArchitectureDescription>
          Pro brute facer propriae, nec epicurei senserit pericula cu. Ea graece
          animal equidem cum ei graece vel. Habeo persius scaevola qui te. Duo
          eu mucius nostrume temporibus vel at. Id quo munere delenit accusamus,
          his id , ei fugit simul sed.
        </ArchitectureDescription>
      </HeadingWrap>
      <ArchitectureContent>
        <ArchitectureCenter
          style={{ backgroundImage: 'url(static/imgs/Architecture_Bg.png)' }}
        >
          <StarIcons
            style={{ backgroundImage: 'url(static/imgs/star-icons.png)' }}
          />
          <LogoIcon
            style={{ backgroundImage: 'url(static/imgs/logo-icon.png)' }}
          />
        </ArchitectureCenter>
        <ArcContent className="arc-left-content">
          <SingleArchitecture className="left">
            <ArcIcon
              style={{
                backgroundImage: 'url(static/imgs/Architecture-icon-1.png)'
              }}
            />
            <ArcInfo>
              <ArcTitle>Lorem ipsum</ArcTitle>
              <ArcDesc>
                Usu ad postea fabellas, qui nostro iracundia ei.
              </ArcDesc>
            </ArcInfo>
          </SingleArchitecture>
          <SingleArchitecture className="left">
            <ArcIcon
              style={{
                backgroundImage: 'url(static/imgs/Architecture-icon-2.png)'
              }}
            />
            <ArcInfo>
              <ArcTitle>Brute facer</ArcTitle>
              <ArcDesc>Qui te ipsum dolor sit amet, ea pro amet sed</ArcDesc>
            </ArcInfo>
          </SingleArchitecture>
          <SingleArchitecture className="left">
            <ArcIcon
              style={{
                backgroundImage: 'url(static/imgs/Architecture-icon-3.png)'
              }}
            />
            <ArcInfo>
              <ArcTitle>Mucius strum</ArcTitle>
              <ArcDesc>Id quo munere delenit accusamus id probatus.</ArcDesc>
            </ArcInfo>
          </SingleArchitecture>
          <SingleArchitecture className="left">
            <ArcIcon
              style={{
                backgroundImage: 'url(static/imgs/Architecture-icon-4.png)'
              }}
            />
            <ArcInfo>
              <ArcTitle>Prima cetero</ArcTitle>
              <ArcDesc>
                Prima cetero id eum, ius iriure impetus elit erat.
              </ArcDesc>
            </ArcInfo>
          </SingleArchitecture>
        </ArcContent>
        <ArcContent className="arc-right-content">
          <SingleArchitecture className="right">
            <ArcIcon
              style={{
                backgroundImage: 'url(static/imgs/Architecture-icon-5.png)'
              }}
              className="right"
            />
            <ArcInfo>
              <ArcTitle>Prima cetero</ArcTitle>
              <ArcDesc>
                Prima cetero id eum, ius iriure impetus elit erat
              </ArcDesc>
            </ArcInfo>
          </SingleArchitecture>
          <SingleArchitecture className="right">
            <ArcIcon
              style={{
                backgroundImage: 'url(static/imgs/Architecture-icon-6.png)'
              }}
              className="right"
            />
            <ArcInfo>
              <ArcTitle>Mucius strum</ArcTitle>
              <ArcDesc>Id quo munere delenit accusamus id probatus</ArcDesc>
            </ArcInfo>
          </SingleArchitecture>
          <SingleArchitecture className="right">
            <ArcIcon
              style={{
                backgroundImage: 'url(static/imgs/Architecture-icon-7.png)'
              }}
              className="right"
            />
            <ArcInfo>
              <ArcTitle>Brute facerv</ArcTitle>
              <ArcDesc>Qui te ipsum dolor sit amet, ea pro amet sed.</ArcDesc>
            </ArcInfo>
          </SingleArchitecture>
          <SingleArchitecture className="right">
            <ArcIcon
              style={{
                backgroundImage: 'url(static/imgs/Architecture-icon-8.png)'
              }}
              className="right"
            />
            <ArcInfo>
              <ArcTitle>Lorem ipsum</ArcTitle>
              <ArcDesc>
                Usu ad postea fabellas, qui nostro iracundia ei.
              </ArcDesc>
            </ArcInfo>
          </SingleArchitecture>
        </ArcContent>
      </ArchitectureContent>
    </Container>
  </Wrapper>
);

export default DataArchitecture;
