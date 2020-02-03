import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.section`
  position: relative;
  background-color: #362f7e;
  margin-bottom: 170px;

  :after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    height: 100%;
    left: 0;
    right: 0;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(/static/imgs/curve-blue-bottom.png);
    background-position: center bottom;
    margin-top: 170px;
  }

  @media (max-width: 1199px) {
    margin-bottom: 130px;

    :after {
      margin-top: 130px;
    }
  }

  @media (max-width: 550px) {
    margin-bottom: 80px;

    :after {
      margin-top: 80px;
    }
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

export const BlogInner = styled.div`
  position: relative;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

export const SingleBlogPost = styled.div`
  height: 100%;
  background-color: #fff;
  border-left: 1px solid #e4e3e3;
  border-right: 1px solid #e4e3e3;
  outline: none;
`;

export const PostImage = styled.span`
  display: block;
  width: 100%;
  height: 0;
  padding-bottom: 52%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const PostInfo = styled.div`
  padding: 45px 40px 60px;

  @media (max-width: 991px) {
    padding: 25px 30px 30px;
  }
`;

export const PostTitle = styled.h4`
  font-size: 1.63em;
  line-height: 1.27;
  color: #0e1633;
  margin-top: 0;
  margin-bottom: 20px;
`;

export const ReadMore = styled.a`
  display: block;
  font-family: 'Marmelat-Bold';
  font-size: 1.13em;
  line-height: 1.1;
  color: #53bce3;

  :hover {
    color: #ec7926;
  }
`;
