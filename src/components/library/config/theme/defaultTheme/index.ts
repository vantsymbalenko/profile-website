import { DefaultTheme } from 'styled-components';

const COLOR_TOKENS = {
	blue50: '#007ced',
	white0: '#ffffff',
	gray20: '#fcfcfc',
	gray30: '#f2f2f2',
	gray40: '#eeeeee',
	gray50: '#aaaaaa',
	gray60: '#666666',
	gray70: '#333333',
	gray80: '#222222',
};

const SHADOWS_TOKENS = {
	black20: '0 0 40px -10px rgb(0 0 0 / 20%)',
};

const TEXT_SIZES = {
	small: '13px',
	regular: '14px',
	medium: '16px',
	xLarge: '20px',
	xxLarge: '48px',
};

export const defaultTheme: DefaultTheme = {
	colors: {
		primary: COLOR_TOKENS.gray70,
		secondary: COLOR_TOKENS.white0,
		tetriary: COLOR_TOKENS.gray80,
		info: COLOR_TOKENS.gray60,
		side: COLOR_TOKENS.gray50,
	},
	background: {
		primary: COLOR_TOKENS.blue50,
		secondary: COLOR_TOKENS.white0,
		tetriary: COLOR_TOKENS.gray20,
		aside: COLOR_TOKENS.gray40,
	},
	shadows: {
		primary: SHADOWS_TOKENS.black20,
	},
	breakpoints: {
		tablet: '760px',
	},
	fontSize: {
		s: TEXT_SIZES.small,
		m: TEXT_SIZES.regular,
		ms: TEXT_SIZES.medium,
		xl: TEXT_SIZES.xLarge,
		xxl: TEXT_SIZES.xxLarge,
	},
	fontFamily: {
		primary: "'Poppins', sans-serif",
	},
	border: {
		light: `2px solid ${COLOR_TOKENS.gray30}`,
		regular: `2px solid ${COLOR_TOKENS.gray40}`,
		heavy: `2px solid ${COLOR_TOKENS.gray60}`,
	},
};
