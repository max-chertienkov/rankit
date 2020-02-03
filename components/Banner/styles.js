import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const BannerWrapper = styled.section`
  background-image: url(/static/imgs/header-bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  text-align: center;
  padding-top: 140px;
  padding-bottom: 12%;
  min-height: 790px;
  margin-bottom: 60px;

  @media (max-width: 1199px) {
    min-height: 670px;
  }

  @media (max-width: 520px) {
    min-height: 700px;
    padding-top: 120px;
    min-height: 620px;
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
`;

export const HeroBannerInner = styled.div`
  max-width: 540px;
  color: #fff;
  margin-left: auto;
  margin-right: auto;
`;

export const BrandLogo = styled.a`
  display: inline-block;
  width: 100%;
  max-width: 50px;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const HeroTitle = styled.h1`
  font-size: 3.13em;
  line-height: 1.12;
  color: inherit;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 1199px) {
    font-size: 2.7em;
  }

  @media (max-width: 520px) {
    font-size: 2em;
  }
`;

export const HeroDescription = styled.h6`
  font-size: 1.25em;
  line-height: 1.5;
  color: inherit;
  margin-top: 0;
  margin-bottom: 25px;

  @media (max-width: 520px) {
    font-size: 1.1em;
  }
`;

export const HeroSubDescription = styled.div`
  font-size: 0.85em;
  line-height: 1.5;
  color: inherit;
  margin-top: 0;
  margin-bottom: 25px;

  @media (max-width: 520px) {
    font-size: 0.6em;
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

export const StyledButton = styled.a`
  font-family: 'SofiaPro-Medium';
  font-size: 1.06em;
  line-height: 1.1;
  color: #fff;
  text-align: center;
  border-radius: 40px;
  display: block;
  width: 100%;
  max-width: 200px;
  margin: 0 11px;

  @media (max-width: 520px) {
    margin-bottom: 15px;
  }
`;
