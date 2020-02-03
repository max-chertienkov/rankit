import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.section``;

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

export const CareersAccWrap = styled.div``;

export const SingleCareer = styled.div`
  border-bottom: 1px solid #dededd;
  margin-bottom: 30px;
`;

export const CareerHead = styled.div`
  position: relative;
  padding-right: 110px;
  padding-bottom: 30px;

  @media (max-width: 470px) {
    padding-right: 0;
  }
`;

export const Title = styled.h3`
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 24px;
  line-height: 38px;
  color: #0e1633;
  margin-top: 0;
  margin-bottom: 5px;

  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 34px;
  }

  @media (max-width: 470px) {
    font-size: 16px;
    line-height: 30px;
    padding-right: 95px;
    margin-bottom: 0;
  }
`;

export const HeadMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #939598;

  @media (max-width: 620px) {
    flex-direction: column;
    font-size: 14px;
  }
`;

export const Category = styled.span`
  margin-right: 30px;

  @media (max-width: 620px) {
    margin-right: 0;
  }
`;

export const CategoryLink = styled.a`
  font-family: 'Averta';
  font-weight: bold;
  color: #53bce3;
  text-transform: uppercase;

  @media (max-width: 620px) {
    margin-right: 0;
  }
`;

export const Addr = styled.span`
  margin-right: 0;

  @media (max-width: 620px) {
    margin-right: 0;
  }
`;

export const SeeMore = styled.a`
  position: absolute;
  right: 0;
  top: 0;
  font-family: 'Marmelat-Bold';
  font-size: 17px;
  color: #53bce3;
  cursor: pointer;

  @media (max-width: 470px) {
    font-size: 14px;
  }

  &:hover {
    color: #ec7926;
  }

  &:after {
    content: '+';
    margin-left: 7px;
  }

  &.active:after {
    content: '-';
  }
`;

export const CareerBody = styled.div`
  display: none;

  &.active {
    display: block;
  }
`;

export const BodyInner = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-bottom: 50px;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 1px;
    background-color: #dededd;
  }
`;

export const BodyTxtField = styled.div`
  flex: 1 1 80%;
  max-width: 80%;
  padding-right: 10%;

  @media (max-width: 767px) {
    flex: 1 1 100%;
    max-width: 100%;
    padding-right: 0;
  }
`;

export const SmallTitle = styled.span`
  display: block;
  font-size: 15px;
  color: #808285;
  margin-bottom: 10px;
`;

export const TxtDesc = styled.div``;

export const ApplyLink = styled.a`
  display: block;
  font-family: 'Marmelat-Bold';
  font-size: 17px;
  color: #53bce3;
  margin-top: 15px;
`;

export const BodyImgField = styled.div`
  flex: 1 1 20%;
  max-width: 20%;
  @media (max-width: 767px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-top: -20px;

  @media (max-width: 767px) {
    max-width: 300px;
    margin-top: 20px;
  }
`;

export const ApplicationAction = styled.div`
  margin-top: 100px;
  margin-bottom: 70px;

  @media (max-width: 767px) {
    margin-top: 50px;
    margin-bottom: 30px;
  }
`;

export const StyledButton = styled.a`
  display: block;
  width: 100%;
  max-width: 215px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'SofiaPro-Medium';
  font-size: 1.06em;
  line-height: 1.1;
  color: #fff;
  text-align: center;
  border-radius: 40px;
`;
