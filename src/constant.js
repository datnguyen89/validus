// region Website config
export const APP_CLIENT_ID = 5
export const APP_NAME = 'validus'
export const LONG_DATE = 'DD-MM-YYYY HH:mm'
export const PAGES = {
  LOGIN: {
    PATH: '/login',
    NAME: 'login',
  },

  HOME: {
    PATH: '/',
    NAME: 'home',
  },
  ABOUT_US: {
    PATH: '/about-us',
    NAME: 'about-us',
  },
}

export const RESPONSE_CODE = {
  SUCCESS: 1, // Thành công
}

export const THEME = {
  PRIMARY_COLOR: '#765de6',
  COMPONENT_COLOR: '#765de6',
  BORDER_RADIUS: 2,
}
export const DEVICE = {
  MOBILE: 'MOBILE', // width <= 767px
  TABLET: 'TABLET', // 768px <= width <= 1023px
  DESKTOP: 'DESKTOP', // width >= 1024px
}
// endregion
