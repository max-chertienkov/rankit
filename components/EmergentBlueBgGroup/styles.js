import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.section`
  position: relative;
  background-color: #362f7e;
  margin-top: 17%;

  :before {
    background-image: url(static/imgs/curve-blue-top.png);
    background-position: center top;
    margin-top: -12%;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    height: 100%;
    left: 0;
    right: 0;
    background-size: contain;
    background-repeat: no-repeat;
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
`;

export const AdvantageInner = styled.div`
  padding-top: 10%;
  margin-bottom: 11%;
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
  text-align: center;
  margin-top: 0;
  color: #fff;
  margin-bottom: 50px;

  @media (max-width: 767px) {
    font-size: 2.1em;
  }
`;

export const SingleAdtList = styled.div``;

export const SingleAdvantage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  margin-bottom: 30px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const TxtBlock = styled.div`
  position: relative;
  flex: 1 1 auto;
  margin-right: 8%;

  @media (max-width: 767px) {
    text-align: center;
    z-index: 10;
    margin-left: 0 !important;
    margin-right: 0 !important;
    margin-bottom: 20px;
  }
`;

export const BlockTitle = styled.h4`
  font-size: 1.81em;
  line-height: 1.31;
  color: inherit;
  margin-top: 0;
  margin-bottom: 15px;

  @media (max-width: 520px) {
    font-size: 1.3em;
  }
`;

export const BlockDesc = styled.div``;

export const ImgBlock = styled.div`
  position: relative;
  max-width: 490px;
  flex: 0 0 auto;

  @media (max-width: 991px) {
    max-width: 380px;
  }
`;

export const Img = styled.img`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  z-index: 10;
`;

export const FeaturedResourcesInner = styled.div`
  position: relative;
  padding-bottom: 13%;
`;

export const ResourceList = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const SingleResource = styled.div`
  flex: 1 1 33.333%;
  max-width: calc(33.333% - 13px);
  color: #fff;
  background-color: #41549d;
  border-radius: 3px;
  padding: 90px 40px 80px;

  @media (max-width: 767px) {
    flex: 1 1 100%;
    max-width: calc(100% - 13px);
    margin-bottom: 13px;
    padding: 40px;
  }
`;

export const ResourceIcon = styled.span`
  display: block;
  width: 87px;
  height: 87px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 25px;
`;

export const ResourceTitle = styled.h3`
  font-size: 1.63em;
  line-height: 1.46;
  color: inherit;
  margin-top: 0;
  margin-bottom: 10px;
`;

export const ResourceDescription = styled.h3``;
