// @flow
import React from 'react';
import {
  Wrapper,
  Container,
  SectionTitle,
  CareersAccWrap,
  SingleCareer,
  CareerHead,
  Title,
  HeadMeta,
  Category,
  CategoryLink,
  Addr,
  SeeMore,
  CareerBody,
  BodyInner,
  BodyTxtField,
  SmallTitle,
  TxtDesc,
  ApplyLink,
  BodyImgField,
  Img,
  ApplicationAction,
  StyledButton
} from './styles';

const careers = [
  {
    id: 1,
    title: 'Content Developer - short contract',
    cateogry: 'Business',
    address: 'Washington DC, United States | Full-time'
  },
  {
    id: 2,
    title: 'Content Developer - short contract',
    cateogry: 'Business',
    address: 'Washington DC, United States | Full-time'
  },
  {
    id: 3,
    title: 'Content Developer - short contract',
    cateogry: 'Business',
    address: 'Washington DC, United States | Full-time'
  },
  {
    id: 4,
    title: 'Content Developer - short contract',
    cateogry: 'Business',
    address: 'Washington DC, United States | Full-time'
  },
  {
    id: 5,
    title: 'Content Developer - short contract',
    cateogry: 'Business',
    address: 'Washington DC, United States | Full-time'
  },
  {
    id: 6,
    title: 'Content Developer - short contract',
    cateogry: 'Business',
    address: 'Washington DC, United States | Full-time'
  }
];

class Careers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openKeys: {}
    };
  }

  toggle(id) {
    const { openKeys } = this.state;
    openKeys[id] = !openKeys[id];
    this.setState({ openKeys });
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <SectionTitle>Available careers</SectionTitle>
          <CareersAccWrap>
            {careers.map(career => (
              <SingleCareer key={career.id}>
                <CareerHead>
                  <Title>{career.title}</Title>
                  <HeadMeta>
                    <Category>
                      Category:{' '}
                      <CategoryLink href="#">{career.cateogry}</CategoryLink>
                    </Category>
                    <Addr>
                      <i className="fas fa-map-marker-alt" /> {career.address}
                    </Addr>
                  </HeadMeta>
                  <SeeMore
                    className={`${
                      this.state.openKeys[career.id] ? 'active' : ''
                    }`}
                    onClick={() => this.toggle(career.id)}
                  >
                    See More
                  </SeeMore>
                </CareerHead>
                <CareerBody
                  className={`${
                    this.state.openKeys[career.id] ? 'active' : ''
                  }`}
                >
                  <BodyInner>
                    <BodyTxtField>
                      <SmallTitle>Junior Position</SmallTitle>
                      <TxtDesc>
                        Lorem ipsum dolor sit amet, ea pro brute facer propriae,
                        nec epicurei senserit pericula cu. Ea graece animal
                        equidem cum ei graece vel. Habeo persius scaevola qui
                        te. Duo eu mucius nostrum. Causae docendi temporibus vel
                        at. Id quo munere his id ei fugit simul sed. Quis
                        vulputate ea pri, essent noluisse sea ex, te nam enim
                        falli.
                      </TxtDesc>
                      <ApplyLink href="#">Apply Now &gt;</ApplyLink>
                    </BodyTxtField>
                    <BodyImgField>
                      <Img
                        src="static/imgs/career-content.png"
                        alt="Content Image"
                      />
                    </BodyImgField>
                  </BodyInner>
                </CareerBody>
              </SingleCareer>
            ))}
          </CareersAccWrap>
        </Container>
        <ApplicationAction>
          <Container>
            <SectionTitle>
              Can&#39;t find anything for you? It&#39;s ok!
            </SectionTitle>
            <StyledButton href="/" className="btn-secondary btn-lg">
              Send Application
            </StyledButton>
          </Container>
        </ApplicationAction>
      </Wrapper>
    );
  }
}

export default Careers;
