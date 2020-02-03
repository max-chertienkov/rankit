// @flow
import * as React from 'react';
import Slider from 'react-slick';
import {
  Wrapper,
  Container,
  SectionSubTitle,
  SectionTitle,
  BlogInner,
  SingleBlogPost,
  PostImage,
  PostInfo,
  PostTitle,
  ReadMore
} from './styles';

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

const EmergentBlog = () => (
  <Wrapper className="emergent-blog">
    <Container>
      <SectionSubTitle>Learn about us</SectionSubTitle>
      <SectionTitle>From Our Blog</SectionTitle>
    </Container>
    <BlogInner>
      <Slider {...settings}>
        <SingleBlogPost>
          <PostImage
            style={{ backgroundImage: 'url(static/imgs/post3.jpg)' }}
          />
          <PostInfo>
            <PostTitle>
              Quis vulputate ea pri, essent noluisse sea ex, te nam enim falli.
            </PostTitle>
            <ReadMore href="#">Read more</ReadMore>
          </PostInfo>
        </SingleBlogPost>
        <SingleBlogPost>
          <PostImage
            style={{ backgroundImage: 'url(static/imgs/post2.jpg)' }}
          />
          <PostInfo>
            <PostTitle>
              Lorem ipsum dolor sit amet nostro ea pro brute facer propriae,
            </PostTitle>
            <ReadMore href="#">Read more</ReadMore>
          </PostInfo>
        </SingleBlogPost>
        <SingleBlogPost>
          <PostImage
            style={{ backgroundImage: 'url(static/imgs/post1.jpg)' }}
          />
          <PostInfo>
            <PostTitle>
              Quis vulputate ea pri, essent noluisse sea ex, te nam enim falli.
            </PostTitle>
            <ReadMore href="#">Read more</ReadMore>
          </PostInfo>
        </SingleBlogPost>
        <SingleBlogPost>
          <PostImage
            style={{ backgroundImage: 'url(static/imgs/post2.jpg)' }}
          />
          <PostInfo>
            <PostTitle>
              Lorem ipsum dolor sit amet nostro ea pro brute facer propriae,
            </PostTitle>
            <ReadMore href="#">Read more</ReadMore>
          </PostInfo>
        </SingleBlogPost>
        <SingleBlogPost>
          <PostImage
            style={{ backgroundImage: 'url(static/imgs/post1.jpg)' }}
          />
          <PostInfo>
            <PostTitle>
              Quis vulputate ea pri, essent noluisse sea ex, te nam enim falli.
            </PostTitle>
            <ReadMore href="#">Read more</ReadMore>
          </PostInfo>
        </SingleBlogPost>
      </Slider>
    </BlogInner>
  </Wrapper>
);

export default EmergentBlog;
