// eslint-disable-next-line import/no-unresolved
import Typography from 'typography';


const defaultFonts = [
  '-apple-system',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Fira Sans',
  'Droid Sans',
  'Helvetica Neue',
  'Helvetica',
  'Arial',
  'sans-serif',
];

const caviarDreamsFontFamily = [
  'Caviar Dreams',
  'BlinkMacSystemFont',
  ...defaultFonts,
];


const latoFontFamily = [
  'Lato',
  ...defaultFonts,
];

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  blockMarginBottom: 1,
  headerFontFamily: caviarDreamsFontFamily,
  bodyFontFamily: latoFontFamily,
  googleFonts: [
    {
      name: 'Lato',
      styles: [
        '300',
        '300i',
        '400',
        '400i',
        '600',
        '600i',
      ],
    },
  ],
  overrideStyles: ({ adjustFontSizeTo }) => ({
    h1: {
      ...adjustFontSizeTo('2em'),
    },
    h2: {
      ...adjustFontSizeTo('1.5em'),
    },
    '.fontCaviarDreams': {
      fontFamily: caviarDreamsFontFamily.join(','),
      fontWeight: 'bold',
    },
    '.redButtonTitle': {
      ...adjustFontSizeTo('1.2em'),
      fontFamily: caviarDreamsFontFamily.join(','),
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: 'center',
      padding: '5px',
    },
    'div.pictogramCaption': {
      ...adjustFontSizeTo('1.1em'),
      fontFamily: caviarDreamsFontFamily.join(','),
      textTransform: 'capitalize',
      fontWeight: 'normal',
      textAlign: 'center',
    },
    '.biggerText': {
      ...adjustFontSizeTo('1.3em'),
    },
    '.slightlyBiggerText': {
      ...adjustFontSizeTo('1.1em'),
    },
    '.rightPlaceText': {
      ...adjustFontSizeTo('1.8em'),
      fontWeight: '400',
      fontFamily: caviarDreamsFontFamily.join(','),
      lineHeight: '1.5em',
    },
    '.whatWeDoTitle': {
      wordSpacing: '9999px',
      fontSize: '1.75em',
      fontWeight: '900',

    },
    '.ideaTextWrapper': {
      ...adjustFontSizeTo('2em'),
    },
    'a.menuLink': {
      ...adjustFontSizeTo('1.4em'),
      fontWeight: 'bold',
      textDecoration: 'none',
      textTransform: 'uppercase',
    },
    'div.contactPageRectangle': {
      ...adjustFontSizeTo('1.3em'),
      fontFamily: caviarDreamsFontFamily.join(','),
      fontWeight: 'bold',
      textTransform: 'lowercase',
    },
    footer: {
      fontFamily: caviarDreamsFontFamily.join(','),
      fontWeight: 'bold',
    },
  }),
});

// Back out the below once Typography is upgraded for es6
export default typography;

export const { rhythm } = typography;
export const { scale } = typography;
export const { options } = typography;
