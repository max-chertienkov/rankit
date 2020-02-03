import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.section``;

export const TeamDescription = styled.div`
  position: relative;
  padding-bottom: 25%;
  margin-bottom: 80px;
  @media (max-width: 767px) {
    margin-bottom: 50px;
  }
`;

export const Container = styled.div`
  display: block;
  width: 100%;
  max-width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 100;
  position: relative;
  z-index: 100;
`;

export const MeetTeamInner = styled.div`
  max-width: 680px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const SectionSubTitle = styled.span`
  display: block;
  font-family: 'SofiaPro-Bold';
  font-size: 0.94em;
  color: #53bce3;
  text-align: center;
  margin-bottom: 5px;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  font-size: 2.69em;
  line-height: 1.12;
  color: #0e1534;
  text-align: center;
  margin-top: 0;
  margin-bottom: 30px;

  @media (max-width: 767px) {
    font-size: 2.1em;
  }
`;

export const Description = styled.div`
  margin-bottom: 25px;
`;

export const MembersBg = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url(static/imgs/white-curve-bot.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
  }
`;

export const StyledButton = styled.a`
  display: inline-block;
  font-family: 'SofiaPro-Medium';
  font-size: 1.06em;
  line-height: 1.1;
  color: #fff;
  text-align: center;
  border-radius: 40px;
  width: 100%;
  max-width: 220px;
  @media (max-width: 1199px) {
    padding: 15px 25px;
  }
`;

export const VPMember = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 100px;

  @media (max-width: 991px) {
    align-items: flex-start;
  }

  @media (max-width: 767px) {
    flex-wrap: wrap;
    margin-bottom: 50px;
  }
`;

export const MemberImgWrap = styled.div`
  flex: 1 1 53%;
  max-width: 53%;

  @media (max-width: 767px) {
    margin-bottom: 20px;
    flex: 1 1 100%;
    max-width: 100%;
    padding: 0;
  }
`;

export const MemberImg = styled.span`
  display: block;
  width: 100%;
  height: 0;
  padding-bottom: 66%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
`;

export const MemberInfo = styled.div`
  flex: 1 1 47%;
  max-width: 47%;
  padding-left: 80px;

  @media (max-width: 991px) {
    padding-left: 20px;
  }

  @media (max-width: 767px) {
    flex: 1 1 100%;
    max-width: 100%;
    padding: 0;
  }
`;

export const Name = styled.h3`
  font-size: 30px;
  line-height: 38px;
  color: #0e1633;
  margin-top: 0;
  margin-bottom: 10px;
`;

export const Job = styled.div``;

export const SocialLinks = styled.div`
  font-size: 20px;
  color: #53bce3;
  margin: 5px 0;
`;

export const SocialIcon = styled.a`
  display: inline-block;
  color: inherit;
  margin-right: 5px;
`;

export const MembersList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: -20px;
  margin-right: -20px;
  margin-bottom: 50px;

  @media (max-width: 991px) {
    margin-left: -8px;
    margin-right: -8px;
  }

  @media (max-width: 767px) {
    margin-bottom: 0;
  }
`;

export const SingleMember = styled.div`
  flex: 1 1 25%;
  max-width: 25%;
  padding: 0 20px;
  margin-bottom: 60px;

  @media (max-width: 991px) {
    padding: 0 8px;
    margin-bottom: 30px;
  }

  @media (max-width: 767px) {
    flex: 1 1 50%;
    max-width: 50%;
  }

  @media (max-width: 470px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

export const MemberImgWrap2 = styled.div`
  position: relative;
  margin-bottom: 15px;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.15);
    opacity: 0;
    transition: all 0.25s ease-in-out;
  }
`;

export const MemberImg2 = styled.span`
  display: block;
  width: 100%;
  height: auto;
  padding-bottom: 150%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const MemberLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
