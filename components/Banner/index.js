// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import {
  BannerWrapper,
  Container,
  HeroBannerInner,
  BrandLogo,
  Img,
  HeroTitle,
  HeroDescription,
  HeroSubDescription,
  ButtonsGroup,
  StyledButton
} from './styles';

type Props = {
  title: string,
  description: string,
  subDescription: string,
  isButtonGroup: boolean
};

const Banner = ({
  title,
  description,
  subDescription,
  isButtonGroup
}: Props) => (
  <BannerWrapper>
    <Container>
      <HeroBannerInner>
        <BrandLogo href="/">
          <Img src="/static/imgs/brandmark.png" alt="Brand Logo" />
        </BrandLogo>
        <HeroTitle>{title}</HeroTitle>
        <HeroDescription>{description}</HeroDescription>
        {subDescription ? (
          <HeroSubDescription>{subDescription}</HeroSubDescription>
        ) : null}
        {isButtonGroup ? (
          <ButtonsGroup>
            <StyledButton href="/" className="btn-secondary btn-lg">
              Learn More
            </StyledButton>
            <StyledButton href="/" className="btn-primary btn-lg">
              Our Blog
            </StyledButton>
          </ButtonsGroup>
        ) : null}
      </HeroBannerInner>
    </Container>
  </BannerWrapper>
);

Banner.defaultProps = {
  subDescription: '',
  isButtonGroup: false
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subDescription: PropTypes.string,
  isButtonGroup: PropTypes.bool
};

export default Banner;
