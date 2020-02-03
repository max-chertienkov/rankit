// @flow
import * as React from 'react';
import withData from '../libraries/withData';
import DefaultCon from '../containers/Default';
import Banner from '../components/Banner';
import Careers from '../components/Careers';

export default withData(props => (
  <DefaultCon {...props}>
    <div>
      <Banner
        title="Careers"
        description="Lorem ipsum dolor sit amet, ea pro brute facer propriae, nec epicurei senserit pericula animal equidem cum."
      />
      <Careers />
    </div>
  </DefaultCon>
));
