import { mergeObjects } from './helpers';

const themeList = {};

themeList.extend = (themename, newsetting) =>
  mergeObjects(themeList[themename], newsetting);

themeList.main = {
  font: {
    sizes: {
      normal: '14px',
      big: '15px',
      bigger: '16px',
      small: '13px',
      smaller: '12px',
      tiny: '11px'
    },
    family: {
      normal:
        'Helvetica, Tahoma, "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", sansserif'
    }
  },
  spacing: {
    normal: '10px',
    big: '15px',
    bigger: '20px',
    huge: '40px',
    small: '10px',
    smaller: '5px',
    noSpace: '0'
  },
  alignment: {
    horizontalCenter: '0 auto',
    center: 'auto'
  },
  colors: {
    main: '#41c9f0',
    success: '#5cb85c',
    warn: '#ffc067',
    error: '#d9534f',
    background: '#eff4f6',
    text: '#435883',
    textAlt: '#f39b37'
  }
};

themeList.inverted = themeList.extend('main', {
  colors: {
    background: '#000000',
    text: '#ffffff'
  }
});

themeList.eightbit = themeList.extend('inverted', {
  colors: {
    main: '#40337f',
    success: '#1bcb01',
    error: '#722640',
    background: '#000000',
    text: '#ffffff'
  },
  font: {
    family: {
      normal: 'Consolas, monaco, monospace'
    }
  }
});

export default themeList;
