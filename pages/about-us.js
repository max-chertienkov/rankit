// @flow
import * as React from 'react';
import withData from '../libraries/withData';
import DefaultCon from '../containers/Default';
import Banner from '../components/Banner';
import MeetTeam from '../components/MeetTeam';

export default withData(props => (
  <DefaultCon {...props}>
    <div>
      <Banner
        title="About us"
        description="We’re a biomedical think tank specializing in reinforcement learning of simulations of biological processes."
        subDescription="Lorem ipsum dolor sit amet, ea pro brute facer propriae, nec epicurei senserit pericula cu. Ea graece animal equidem cum ei graece vel.Habeo persius scaevola qui te. Duo eu mucius nostrum. Causae docendi temporibus vel at. Id quo munere his id ei fugit simul sed. Quis vulputate ea pri, essent noluisse sea ex, te nam enim falli."
      />
      <MeetTeam />
    </div>
  </DefaultCon>
));
