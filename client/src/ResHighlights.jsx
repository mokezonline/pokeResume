import React from 'react';
import styled from 'styled-components';

import thumbnail from '../public/assets/thumbnail.jpg';
import carousel from '../public/assets/carousel.gif';
import carouselControls from '../public/assets/carousel-controls.gif';
import similarProducts from '../public/assets/similarProducts.gif';
import seeReviews from '../public/assets/see-reviews.gif';
import writeReview from '../public/assets/write-review.gif';

const LibraFXWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FjordsBanner = styled.img`
  width: 80%;
  height: 25%;
  border-radius: 5px; 
`;

const Bullets = styled.li`
  font-size: 3.5vh;
`;

const GifsWrapper = styled.div`
  display: flex;
  margin-bottom: 1vh;
`;

const Gif = styled.img`
  width: 17vw;
  height: 20vh;
  margin-left: 1vw;
  border-radius: 5px;
`;

const ResHighlights = () => (
  <LibraFXWrapper>
    <h1>Clothing Product Page LibraFX</h1>
    <FjordsBanner src={thumbnail} />
    <ul>
      <Bullets>Utilized React to leverage conditional rendering and styled components to provide a seamless user experience</Bullets>
      <Bullets>Implemented a micro service architecture to allow teammates to update individual services while maintaining application stability</Bullets>
    </ul>
    <GifsWrapper>
      <Gif src={carousel} />
      <Gif src={carouselControls} />
      <Gif src={similarProducts} />
    </GifsWrapper>
    <GifsWrapper>
      <Gif src={seeReviews} />
      <Gif src={writeReview} />
    </GifsWrapper>
  </LibraFXWrapper>
);

export default ResHighlights;