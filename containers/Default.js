// @flow
import * as React from 'react';
import { withRouter } from 'next/router';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import App from '../components/App';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Props = {
  title?: string,
  router: Object,
  children: React.Element<*>
};

const Default = ({ children, title, router }: Props) => (
  <div>
    <App>
      <Helmet>
        <title>
          {title && title !== ''
            ? `${title} :: Generate Tomorrow`
            : 'Generate Tomorrow'}
        </title>
        <link
          href="https://use.fontawesome.com/releases/v5.10.2/css/all.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
      </Helmet>
      <Header pathname={router.url.pathname} />
      {children}
      <Footer pathname={router.url.pathname} />
    </App>
  </div>
);

Default.propTypes = {
  title: PropTypes.string,
  router: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};

Default.defaultProps = {
  title: 'Emergent Dynamics, Inc'
};

export default withRouter(Default);
