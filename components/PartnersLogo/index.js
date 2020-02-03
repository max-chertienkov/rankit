// @flow
import * as React from 'react';
import {
  Partners,
  Container,
  SectionTitleSec,
  LogosWrap,
  PartnerLogo,
  Img,
  ViewCustomerLink
} from './styles';

const PartnersLogo = () => (
  <Partners>
    <Container>
      <SectionTitleSec>Loved by all, trusted by everyone</SectionTitleSec>
      <LogosWrap>
        <PartnerLogo href="#">
          <Img src="/static/imgs/Cisco.png" alt="Logo" />
        </PartnerLogo>
        <PartnerLogo href="#">
          <Img src="/static/imgs/Amazon.png" alt="Logo" />
        </PartnerLogo>
        <PartnerLogo href="#">
          <Img src="/static/imgs/Forbes.png" alt="Logo" />
        </PartnerLogo>
        <PartnerLogo href="#">
          <Img src="/static/imgs/Cisco.png" alt="Logo" />
        </PartnerLogo>
        <PartnerLogo href="#">
          <Img src="/static/imgs/Amazon.png" alt="Logo" />
        </PartnerLogo>
        <PartnerLogo href="#">
          <Img src="/static/imgs/Forbes.png" alt="Logo" />
        </PartnerLogo>
      </LogosWrap>
      <ViewCustomerLink href="#">View customer stories</ViewCustomerLink>
    </Container>
  </Partners>
);

export default PartnersLogo;
