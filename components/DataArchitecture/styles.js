import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.section`
  padding-top: 90px;
  margin-bottom: 120px;

  @media (max-width: 650px) {
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
`;

export const HeadingWrap = styled.div`
  max-width: 660px;
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

export const ArchitectureDescription = styled.div``;

export const ArchitectureContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 70px;

  @media (max-width: 650px) {
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

export const ArchitectureCenter = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 340px;
  height: 370px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: -185px;
  margin-left: -170px;
  z-index: 200;

  @media (max-width: 1190px) {
    display: none;
  }
`;

export const StarIcons = styled.span`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  width: 190px;
  height: 220px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: -110px;
  margin-left: -95px;
`;

export const LogoIcon = styled.span`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: -50px;
  margin-left: -50px;
`;

export const ArcContent = styled.div`
  position: relative;
  flex: 1 1 50%;
  max-width: calc(50% - 30px);
  padding-top: 20px;
  padding-bottom: 20px;

  &.arc-left-content {
    padding-right: 175px;

    :before {
      left: 50px;
      right: 0;
      border-top-right-radius: 140px;
      border-bottom-right-radius: 140px;
      border-top-left-radius: 60px;
      border-bottom-left-radius: 60px;
    }

    :after {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      left: 0;
      width: 100px;
      top: 40px;
      bottom: 40px;
      background-color: #fff;
    }

    @media (max-width: 1199px) {
      padding-right: 0;
    }
  }

  &.arc-right-content {
    padding-left: 175px;

    :before {
      left: 0;
      right: 50px;
      border-top-left-radius: 140px;
      border-bottom-left-radius: 140px;
      border-top-right-radius: 60px;
      border-bottom-right-radius: 60px;
    }

    :after {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      width: 100px;
      top: 40px;
      bottom: 40px;
      background-color: #fff;
    }

    @media (max-width: 1199px) {
      padding-left: 0;
    }

    @media (max-width: 650px) {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }

  :before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    height: 100%;
    border: 2px dotted #373e56;
    box-sizing: border-box;
  }

  @media (max-width: 650px) {
    flex: 1 1 100%;
    max-width: calc(100% - 30px);
  }

  @media (max-width: 1199px) {
    :before {
      content: none !important;
    }
    :after {
      content: none !important;
    }
  }
`;

export const SingleArchitecture = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 55px;
  z-index: 110;

  :nth-child(2):before,
  :nth-child(3):before {
    content: '';
    display: block;
    position: absolute;
    top: -30px;
    bottom: -30px;
    border: 2px dotted #373e56;
    box-sizing: border-box;
  }

  :nth-child(2):before {
    border-bottom: none;
  }

  :nth-child(3):before {
    border-top: none;
  }

  :nth-child(2):after,
  :nth-child(3):after {
    content: '';
    display: block;
    position: absolute;
    width: 100px;
    background-color: #fff;
  }

  :nth-child(2):after {
    top: 40px;
    bottom: -30px;
  }

  :nth-child(3):after {
    top: -30px;
    bottom: 40px;
  }

  &.left {
    :before {
      left: 50px;
      right: -50px;
      border-top-left-radius: 60px;
      border-bottom-left-radius: 60px;
    }

    :after {
      left: 0;
    }
  }

  :last-child {
    margin-bottom: 0;
  }

  &.right {
    flex-direction: row-reverse;
    text-align: right;

    :before {
      right: 50px;
      left: -50px;
      border-top-right-radius: 60px;
      border-bottom-right-radius: 60px;
    }

    @media (max-width: 1199px) {
      flex-direction: row;
      text-align: left;
    }
  }

  @media (max-width: 1199px) {
    :before {
      content: none !important;
    }
    :after {
      content: none !important;
    }
  }

  @media (max-width: 650px) {
    margin-bottom: 30px;
  }
`;

export const ArcIcon = styled.span`
  position: relative;
  display: block;
  width: 95px;
  height: 105px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 30px;
  z-index: 150;
  flex: 0 0 auto;
  &.right {
    margin-left: 30px;
    margin-right: 0;

    @media (max-width: 1199px) {
      margin-left: 0;
      margin-right: 30px;
    }
  }

  @media (max-width: 650px) {
    width: 65px;
    height: 75px;
    margin-right: 20px;
  }
`;

export const ArcInfo = styled.div``;

export const ArcTitle = styled.h4`
  font-size: 1.38em;
  line-height: 1.64;
  margin: 0;
`;

export const ArcDesc = styled.div``;
