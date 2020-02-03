import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;

  @media (max-width: 542px) {
    display: none;
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

  :hover {
    background-color: #ec7926;
  }
`;
