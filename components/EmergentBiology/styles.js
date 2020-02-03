import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.section`
  margin-bottom: 100px;
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

export const EmergentBiologyInner = styled.div`
  max-width: 720px;
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
  margin-bottom: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 767px) {
    font-size: 2.1em;
  }
`;

export const SectionDescription = styled.div`
  font-family: 'SofiaPro-Medium';
  font-size: 1.63em;
  line-height: 1.35;
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 767px) {
    font-size: 1.3em;
  }
`;

export const BiologyDescription = styled.div`
  text-align: center;
`;
