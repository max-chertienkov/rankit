// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import color from 'color';
import themeList from '../libraries/theme';
import { App as ThemedApp } from './Theme';

let offlineInstalled = false;

type Props = {
  children: React.Node,
  theme?: string
};

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow-x: hidden;
  }

  body {
    font-family: 'Averta';
    font-size: 16px;
    line-height: 1.8;
    color: #414042;
    margin: 0;
  }

  a {
    text-decoration: none;
    transition: all .25s ease-in-out;
  }

  * {
    box-sizing: border-box;
  }

  img {
    display: block;
    max-width: 100%;
  }

  h1, h2, h3, h4 {
    font-family: 'SofiaPro-Bold';
    font-weight: normal;
  }

  h5, h6 {
    font-family: 'SofiaPro-Medium';
    font-weight: normal;
  }

  @font-face {
    font-family: 'Averta';
    src: url('/static/fonts/Averta.otf')  format('opentype'), url('/static/fonts/Averta.woff')  format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Marmelat-Bold';
    src: url('/static/fonts/Marmelat-Bold.ttf')  format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Marmelat-Book';
    src: url('/static/fonts/Marmelat-Book.ttf')  format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'SofiaPro-Bold';
    src: url('/static/fonts/SofiaPro-Bold.ttf')  format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'SofiaPro-Medium';
    src: url('/static/fonts/SofiaPro-Medium.ttf')  format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  #header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 50px;
    padding-right: 30px;
    flex-wrap: wrap;
    transition: all .25s ease-in-out;
    z-index: 999;
    background-color: #27235e;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .emergent-blog .slick-arrow {
    position: absolute;
    left: 50%;
    top: 100%;
    font-size: 0;
    border: none;
    background-color: transparent;
    width: 34px;
    height: 34px;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 0;
    margin-top: 40px;
    transform: translateX(-50%);
    outline: none;
    cursor: pointer;
  }

  .emergent-blog .slick-prev {
    background-image: url('static/imgs/left-arrow.png');
    margin-left: -28px;
  }

  .emergent-blog .slick-next {
    background-image: url('static/imgs/right-arrow.png');
    margin-left: 28px;
  }

  .slick-slide > div {
    height: 100%;
  }

  .btn-md {
    padding: 17px 20px;
  }

  .btn-lg {
    padding: 21px 25px;
  }

  .btn-primary {
    background-color: #53bce3;
  }

  .btn-primary:hover {
    background-color: #ec7926;
  }

  .btn-secondary {
    background-color: #ec7926;
  }

  .btn-secondary:hover {
    background-color: #53bce3;
  }

  @media (max-width: 1199px) {
    .btn-md {
      padding: 10px 20px;
    }

    .btn-lg {
      padding: 15px 25px;
    }
  }
  
  @media (max-width: 550px) {

    .emergent-blog .slick-arrow {
      margin-top: 20px;
    }
  }
`;

const App = ({ children, theme }: Props) => {
  const themeName = !themeList[theme] ? 'main' : theme;
  if (!themeList[themeName].helper) themeList[themeName].helper = color;

  if (process.env.OFFLINE_SUPPORT && process.browser && !offlineInstalled) {
    const OfflinePlugin = require('offline-plugin/runtime'); // eslint-disable-line global-require

    OfflinePlugin.install({
      onUpdateReady() {
        OfflinePlugin.applyUpdate();
      },
      onUpdated() {
        window.location.reload();
      }
    });
    offlineInstalled = true;
  }

  return (
    <ThemeProvider theme={themeList[themeName]}>
      <ThemedApp>
        <GlobalStyle />
        {children}
      </ThemedApp>
    </ThemeProvider>
  );
};

App.defaultProps = {
  theme: 'main'
};

App.propTypes = {
  children: PropTypes.array.isRequired,
  theme: PropTypes.string
};

export default App;
