// @flow
import * as React from 'react';
import withData from '../libraries/withData';
import DefaultCon from '../containers/Default';
import Banner from '../components/Banner';
import PartnersLogo from '../components/PartnersLogo';
import EmergentBiology from '../components/EmergentBiology';
import EmergentBlueBgGroup from '../components/EmergentBlueBgGroup';
import EmergentBlog from '../components/EmergentBlog';
import DataArchitecture from '../components/DataArchitecture';

export default withData(props => (
  <DefaultCon {...props}>
    <div>
      <Banner
        title="Dynamics Biomedical Think Tank"
        description="Ei graece omittantur vel.Habeo persius scaevola qui te.Duo eu mucius nostrum."
        isButtonGroup
      />
      <PartnersLogo />
      <EmergentBiology />
      <EmergentBlueBgGroup />
      <EmergentBlog />
      <DataArchitecture />
    </div>
  </DefaultCon>
));
