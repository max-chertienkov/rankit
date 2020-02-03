import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledFooter = styled.footer`
  background-image: url(/static/imgs/footer-bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  padding-top: 300px;
  padding-bottom: 55px;

  @media (max-width: 1199px) {
    padding-top: 180px;
    padding-bottom: 30px;
    margin-top: 0px;
  }

  @media (max-width: 650px) {
    margin-top: 0;
  }

  @media (max-width: 520px) {
    margin-top: 100px;
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

export const FooterTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 100px;

  @media (max-width: 1199px) {
    margin-bottom: 60px;
  }

  @media (max-width: 520px) {
    margin-bottom: 30px;
  }
`;

export const FooterTopInfo = styled.div`
  flex: 1 1 33.333%;
  max-width: calc(33.333% - 90px);
  @media (max-width: 991px) {
    flex: 1 1 100%;
    max-width: 100%;
    margin-bottom: 30px;
  }
`;

export const InfoTitle = styled.h4`
  font-size: 1.19em;
  line-height: 1.53;
  color: #54bce3;
  margin-top: 0;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

export const InfoDesc = styled.div`
  font-family: 'Marmelat-Book';
  font-size: 0.88em;
  line-height: 1.56;
  color: #fff;
  margin-bottom: 15px;
`;

export const SubscribeForm = styled.form`
  position: relative;

  @media (max-width: 991px) {
    max-width: 510px;
  }
`;

export const EmailInput = styled.input`
  font-size: 0.88em;
  line-height: 1.79;
  background-color: #fff;
  border: none;
  border-radius: 3px;
  padding: 12px 50px 12px 15px;
  width: 100%;
`;

export const SubmitButton = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
  background-color: transparent;
  border: none;
  padding: 0;
  height: 16px;
  width: 20px;
  font-size: 0;
  background-image: url(/static/imgs/right-arrow-dark.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: -8px;
  outline: none;
  cursor: pointer;
`;

export const BtnGroups = styled.div`
  display: flex;
  margin: 0 -5px;
`;

export const SocialIcon = styled.a`
  color: #fff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;

  &.facebook {
    background-color: #3c5a99;
  }

  &.twitter {
    background-color: #5fa9dd;
  }

  &.instagram {
    background-color: #6a453b;
  }

  &.linkedin {
    background-color: #067aba;
  }

  &.share {
    background-color: #807f7f;
  }
`;

export const FooterMain = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 50px;
  margin-left: -30px;
  margin-right: -30px;

  @media (max-width: 1199px) {
    margin-bottom: 30px;
  }

  @media (max-width: 991px) {
    justify-content: flex-start;

    & > div {
      flex: 1 1 33.333%;
      max-width: 33.333%;
    }
  }

  @media (max-width: 520px) {
    & > div {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }

  & > div {
    padding: 0 30px;
  }
`;

export const LogoWrapper = styled.div`
  flex: 0 0 auto;
  padding: 10px 0;

  @media (max-width: 1199px) {
    flex: 1 1 auto;
  }

  @media (max-width: 520px) {
    margin-top: 0;
    margin-bottom: 30px;
  }
`;

export const FooterLogo = styled.a`
  display: block;
  max-width: 180px;
`;

export const LogoImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const FooterMenuNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FooterInfo = styled.div``;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  display: block;
  color: inherit;
  padding: 3px 0;

  :hover {
    text-decoration: underline;
  }
`;

export const FooterCopyright = styled.div`
  font-family: 'Marmelat-Book';
  font-size: 0.8em;
  color: #d1d3d4;
  text-align: center;
`;
