// @flow
import * as React from 'react';
import {
  Wrapper,
  TeamDescription,
  Container,
  MeetTeamInner,
  SectionSubTitle,
  SectionTitle,
  Description,
  MembersBg,
  StyledButton,
  VPMember,
  MemberImgWrap,
  MemberImg,
  MemberInfo,
  Name,
  Job,
  SocialLinks,
  SocialIcon,
  MembersList,
  SingleMember,
  MemberImgWrap2,
  MemberImg2,
  MemberLink
} from './styles';

const MeetTeam = () => (
  <Wrapper>
    <TeamDescription>
      <Container>
        <MeetTeamInner>
          <SectionSubTitle>Our Staff</SectionSubTitle>
          <SectionTitle>Meet the team</SectionTitle>
          <Description>
            Pro brute facer propriae, nec epicurei senserit pericula cu. Ea
            graece animal equidem cum ei graece vel. Habeo persius scaevola qui
            te. Duo eu mucius nostrume temporibus vel at. Id quo munere delenit
            accusamus, his id , ei fugit simul sed.
          </Description>
          <StyledButton href="/" className="btn-secondary btn-lg">
            Open Careers
          </StyledButton>
        </MeetTeamInner>
      </Container>
      <MembersBg
        style={{ backgroundImage: 'url(static/imgs/team-member-bg.jpg)' }}
      />
    </TeamDescription>
    <Container>
      <VPMember>
        <MemberImgWrap>
          <MemberImg
            style={{ backgroundImage: 'url(static/imgs/main-member.jpg)' }}
          />
        </MemberImgWrap>
        <MemberInfo>
          <Name>Jim Alecander</Name>
          <Job>VP of Production</Job>
          <SocialLinks>
            <SocialIcon href="#">
              <i className="fab fa-twitter" />
            </SocialIcon>
            <SocialIcon href="#">
              <i className="fab fa-linkedin-in" />
            </SocialIcon>
          </SocialLinks>
          <Description>
            Lorem ipsum dolor sit amet, ea pro brute facer propriae, nec
            epicurei senserit pericula cu. Ea graece animal equidem cum. Ei
            graece omittantur vel. Habeo persius scaevola qui te. Duo eu mucius
            nostrum. Causae docendi temporibus vel at. Lorem ipsum dolor sit
            amet, ea pro brute facer propriae, nec epicurei senserit pericula
            cu.
          </Description>
        </MemberInfo>
      </VPMember>
      <MembersList>
        <SingleMember>
          <MemberImgWrap2>
            <MemberImg2
              style={{ backgroundImage: 'url(static/imgs/team-member.jpg)' }}
            />
            <MemberLink href="/" />
          </MemberImgWrap2>
          <Name>Chris Slaughter</Name>
          <Job>VP of Operations</Job>
          <SocialLinks>
            <SocialIcon href="#">
              <i className="fab fa-twitter" />
            </SocialIcon>
            <SocialIcon href="#">
              <i className="fab fa-linkedin-in" />
            </SocialIcon>
          </SocialLinks>
        </SingleMember>
        <SingleMember>
          <MemberImgWrap2>
            <MemberImg2
              style={{ backgroundImage: 'url(static/imgs/team-member.jpg)' }}
            />
            <MemberLink href="/" />
          </MemberImgWrap2>
          <Name>Chris Slaughter</Name>
          <Job>VP of Operations</Job>
          <SocialLinks>
            <SocialIcon href="#">
              <i className="fab fa-twitter" />
            </SocialIcon>
            <SocialIcon href="#">
              <i className="fab fa-linkedin-in" />
            </SocialIcon>
          </SocialLinks>
        </SingleMember>
        <SingleMember>
          <MemberImgWrap2>
            <MemberImg2
              style={{ backgroundImage: 'url(static/imgs/team-member.jpg)' }}
            />
            <MemberLink href="/" />
          </MemberImgWrap2>
          <Name>Chris Slaughter</Name>
          <Job>VP of Operations</Job>
          <SocialLinks>
            <SocialIcon href="#">
              <i className="fab fa-twitter" />
            </SocialIcon>
            <SocialIcon href="#">
              <i className="fab fa-linkedin-in" />
            </SocialIcon>
          </SocialLinks>
        </SingleMember>
        <SingleMember>
          <MemberImgWrap2>
            <MemberImg2
              style={{ backgroundImage: 'url(static/imgs/team-member.jpg)' }}
            />
            <MemberLink href="/" />
          </MemberImgWrap2>
          <Name>Chris Slaughter</Name>
          <Job>VP of Operations</Job>
          <SocialLinks>
            <SocialIcon href="#">
              <i className="fab fa-twitter" />
            </SocialIcon>
            <SocialIcon href="#">
              <i className="fab fa-linkedin-in" />
            </SocialIcon>
          </SocialLinks>
        </SingleMember>
        <SingleMember>
          <MemberImgWrap2>
            <MemberImg2
              style={{ backgroundImage: 'url(static/imgs/team-member.jpg)' }}
            />
            <MemberLink href="/" />
          </MemberImgWrap2>
          <Name>Chris Slaughter</Name>
          <Job>VP of Operations</Job>
          <SocialLinks>
            <SocialIcon href="#">
              <i className="fab fa-twitter" />
            </SocialIcon>
            <SocialIcon href="#">
              <i className="fab fa-linkedin-in" />
            </SocialIcon>
          </SocialLinks>
        </SingleMember>
        <SingleMember>
          <MemberImgWrap2>
            <MemberImg2
              style={{ backgroundImage: 'url(static/imgs/team-member.jpg)' }}
            />
            <MemberLink href="/" />
          </MemberImgWrap2>
          <Name>Chris Slaughter</Name>
          <Job>VP of Operations</Job>
          <SocialLinks>
            <SocialIcon href="#">
              <i className="fab fa-twitter" />
            </SocialIcon>
            <SocialIcon href="#">
              <i className="fab fa-linkedin-in" />
            </SocialIcon>
          </SocialLinks>
        </SingleMember>
        <SingleMember>
          <MemberImgWrap2>
            <MemberImg2
              style={{ backgroundImage: 'url(static/imgs/team-member.jpg)' }}
            />
            <MemberLink href="/" />
          </MemberImgWrap2>
          <Name>Chris Slaughter</Name>
          <Job>VP of Operations</Job>
          <SocialLinks>
            <SocialIcon href="#">
              <i className="fab fa-twitter" />
            </SocialIcon>
            <SocialIcon href="#">
              <i className="fab fa-linkedin-in" />
            </SocialIcon>
          </SocialLinks>
        </SingleMember>
        <SingleMember>
          <MemberImgWrap2>
            <MemberImg2
              style={{ backgroundImage: 'url(static/imgs/team-member.jpg)' }}
            />
            <MemberLink href="/" />
          </MemberImgWrap2>
          <Name>Chris Slaughter</Name>
          <Job>VP of Operations</Job>
          <SocialLinks>
            <SocialIcon href="#">
              <i className="fab fa-twitter" />
            </SocialIcon>
            <SocialIcon href="#">
              <i className="fab fa-linkedin-in" />
            </SocialIcon>
          </SocialLinks>
        </SingleMember>
      </MembersList>
    </Container>
  </Wrapper>
);

export default MeetTeam;
