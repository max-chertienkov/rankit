import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const LogoWrapper = styled.div`
  flex: 0 0 auto;
  padding: 10px 0;
  margin-right: 5.5%;

  @media (max-width: 1199px) {
    flex: 1 1 auto;
  }
`;

export const HeaderLogo = styled.a`
  display: block;
  max-width: 140px;
`;

export const LogoImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;
