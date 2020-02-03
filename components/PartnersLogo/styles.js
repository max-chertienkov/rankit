import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Partners = styled.section`
  margin-bottom: 80px;
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

export const SectionTitleSec = styled.h3`
  font-family: 'Marmelat-Bold';
  font-size: 1.44em;
  line-height: 1.2;
  color: #a7a9ac;
  text-align: center;
  margin-top: 0;
  margin-bottom: 25px;
`;

export const LogosWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: -35px;
  margin-right: -35px;
  margin-bottom: 0px;

  @media (max-width: 1199px) {
    margin-left: -15px;
    margin-right: -15px;
  }

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const PartnerLogo = styled.a`
  display: block;
  padding: 0 35px;
  margin-bottom: 30px;

  @media (max-width: 1199px) {
    padding: 0 15px;
  }

  @media (max-width: 767px) {
    flex: 1 1 33.333%;
    max-width: 33.333%;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;

  @media (max-width: 1199px) {
    max-width: 150px;
  }

  @media (max-width: 767px) {
    margin: 0 auto;
  }
`;

export const ViewCustomerLink = styled.a`
  display: block;
  font-family: 'Marmelat-Bold';
  font-size: 1.13em;
  text-align: center;
  color: #53bce3;

  :hover {
    color: #ec7926;
  }
`;
