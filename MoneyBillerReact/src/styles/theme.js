const colorsLight = {
  primary: '#127dff',
  secondary: '#ff9800',
  accent: '#9c27b0',
  error: '#f44336',
  warning: '#ffeb3b',
  info: '#2196f3',
  success: '#4caf50',
  black: '#000',
  white: '#fff',
  transparent: 'transparent',
  background: '#ffffff',
  bgCard: 'rgba(130,207,223,0.22)',
  text: '#000000',
  nav: 'rgba(156,232,248,0.43)',
  modal: 'rgba(0, 0, 0, 0.1)',
  bgModal: 'white',
  input: '#F5F5F5',
  shadowInput: 'rgb(224, 224, 224)',
  boxshadow: '1px 5px 10px 10px rgba(0, 0, 0, 0.5)'
};

const colorsDark = {
  ...colorsLight,
  background: '#000000',
  text: '#ffffff',
  bgCard: 'rgba(100, 100, 200, 0.1)',
  nav: 'rgba(0, 0, 0, .5)',
  bgModal: '#161616',
  input: '#161616',
  shadowInput: 'rgb(77, 77, 77)',
  boxshadow: '1px 5px 10px 10px rgba(100, 2, 150, 0.5)'
};

const zIndex = {
  min: -1,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  max: 10,
  nav: 20,
  modal: 30
};

export const themeLight = {
  colors: colorsLight,
  zIndex
};

export const themeDark = {
  ...themeLight,
  colors: colorsDark
};
