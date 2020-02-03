// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import {
  StyledFooter,
  Container,
  FooterTop,
  FooterTopInfo,
  InfoTitle,
  InfoDesc,
  SubscribeForm,
  EmailInput,
  SubmitButton,
  BtnGroups,
  SocialIcon,
  FooterMain,
  LogoWrapper,
  FooterLogo,
  LogoImg,
  FooterInfo,
  FooterMenuNav,
  NavItem,
  NavLink,
  FooterCopyright
} from './styles';
import { Link } from '../../routes';
import connect from './store';
import menuItems from './menuItems';

type Props = {
  pathname: string
};

const Footer = ({ pathname }: Props) => (
  <StyledFooter>
    <Container>
      <FooterTop>
        <FooterTopInfo name="subscribe-form">
          <InfoTitle>Stay in Touch</InfoTitle>
          <InfoDesc>
            Subscribe to keep up to date on what the team at Emergent Dynamics
            are up to.
          </InfoDesc>
          <SubscribeForm>
            <EmailInput type="email" placeholder="Email Addresss *" />
            <SubmitButton type="submit">
              <i className="fas fa-arrow-right" />
            </SubmitButton>
          </SubscribeForm>
        </FooterTopInfo>
        <FooterTopInfo name="connect-us">
          <InfoTitle>Connect with us</InfoTitle>
          <InfoDesc>
            Join our converstation on our Emergent Dynamics social media
            channels
          </InfoDesc>
          <BtnGroups>
            <SocialIcon href="#" className="facebook">
              <i className="fab fa-facebook-f" />
            </SocialIcon>
            <SocialIcon href="#" className="twitter">
              <i className="fab fa-twitter" />
            </SocialIcon>
            <SocialIcon href="#" className="instagram">
              <i className="fab fa-instagram" />
            </SocialIcon>
            <SocialIcon href="#" className="linkedin">
              <i className="fab fa-linkedin-in" />
            </SocialIcon>
            <SocialIcon href="#" className="share">
              <i className="fas fa-share-alt" />
            </SocialIcon>
          </BtnGroups>
        </FooterTopInfo>
        <FooterTopInfo name="contact-team">
          <InfoTitle>Contact our team</InfoTitle>
          <InfoDesc>
            {/* <span>Telephone: (02) 8886 5800</span> */}
            {/* <span>FAX: (02) 9833 2488</span> */}
            <span>Address: 228 Park Ave S 60684, New York, NY 10003, USA</span>
          </InfoDesc>
        </FooterTopInfo>
      </FooterTop>
      <FooterMain>
        <LogoWrapper>
          <Link prefetch href="/" passHref>
            <FooterLogo href="/">
              <LogoImg src="/static/imgs/logo.png" alt="Emergent" />
            </FooterLogo>
          </Link>
        </LogoWrapper>
        {Object.keys(menuItems).map(menuKey => (
          <FooterInfo key={menuKey}>
            <InfoTitle>{menuKey}</InfoTitle>
            <InfoDesc>
              <FooterMenuNav>
                {menuItems[menuKey].map(menu => (
                  <NavItem key={menu.slug}>
                    <Link prefetch href={`/${menu.slug}`} passHref>
                      <NavLink active={pathname === `/${menu.slug}`}>
                        {menu.caption}
                      </NavLink>
                    </Link>
                  </NavItem>
                ))}
              </FooterMenuNav>
            </InfoDesc>
          </FooterInfo>
        ))}
      </FooterMain>
      <FooterCopyright>
        Copyright © 2019 Emergent Dynamics. All Rights Reserved.
      </FooterCopyright>
    </Container>
  </StyledFooter>
);

Footer.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default connect(Footer);
