import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Burgers = styled.button`
  display: none;
  font-size: 20px;
  background-color: transparent;
  border: none;
  color: #fff;
  padding: 0;
  margin-left: 20px;
  outline: none;
  cursor: pointer;

  @media (max-width: 1199px) {
    display: block;
  }
`;
