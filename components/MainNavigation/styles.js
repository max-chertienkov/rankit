import styled from 'styled-components';

export const Navigation = styled.div`
  @media (max-width: 1199px) {
    display: none;
    flex: 1 1 100%;
    order: 3;
  }

  @media (min-width: 1200px) {
    display: block !important;
  }

  &.show {
    display: block;
  }

  &.hidden {
    display: none;
  }
`;

export const MainNavWrap = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'SofiaPro-Medium';
  font-size: 1.06em;
  line-height: 1.12;
  color: #fff;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 1199px) {
    display: block;
    margin-top: 10px;
    padding-bottom: 10px;
  }
`;

export const NavItem = styled.li`
  padding-left: 13px;
  padding-right: 13px;

  @media (max-width: 1199px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const NavLink = styled.a`
  position: relative;
  display: block;
  color: inherit;
  padding: 6px 0;

  @media (max-width: 1199px) {
    display: inline-block;
  }

  :after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transform: scaleX(0);
    transition: all 0.25s ease-in-out;
  }

  :hover:after {
    transform: scaleX(1);
  }

  &.activeLink:after {
    transform: scaleX(1);
  }
`;

export const ButtonsGroup = styled.div`
  display: none;

  @media (max-width: 542px) {
    display: block;
    margin-top: 20px;
  }
`;

export const ContactUSLink = styled.a`
  margin-right: 20px;
  color: #53bce3;
  display: inline-block;
  font-family: 'SofiaPro-Medium';
  font-size: 1.06em;
  line-height: 1.1;
  text-align: center;
  border-radius: 40px;

  :hover {
    color: #ec7926;
  }

  @media (max-width: 542px) {
    width: auto !important;
  }
`;

export const SignInButton = styled.a`
  display: inline-block;
  font-family: 'SofiaPro-Medium';
  font-size: 1.06em;
  line-height: 1.1;
  color: #fff;
  text-align: center;
  border-radius: 40px;
  padding: 17px 20px;
  background-color: #53bce3;
  width: 100%;
  min-width: 170px;

  @media (max-width: 1199px) {
    min-width: 140px;
    padding: 10px 20px;
  }

  @media (max-width: 542px) {
    width: auto !important;
  }

  :hover {
    background-color: #ec7926;
  }
`;
