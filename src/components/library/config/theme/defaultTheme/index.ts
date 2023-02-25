import { DefaultTheme } from 'styled-components';

const COLOR_TOKENS = {
	blue50: '#007ced',
	white0: '#ffffff',
	gray10: '#fcfcfc',
	gray20: '#f2f2f2',
	gray30: '#666666',
	gray50: '#333333',
	gray60: '#222222',
};

const SHADOWS_TOKENS = {
	black20: '0 0 40px -10px rgb(0 0 0 / 20%)',
};

const TEXT_SIZES = {
	small: '13px',
	regular: '14px',
	xLarge: '20px',
	xxLarge: '48px',
};

export const defaultTheme: DefaultTheme = {
	colors: {
		primary: COLOR_TOKENS.gray50,
		secondary: COLOR_TOKENS.white0,
		tetriary: COLOR_TOKENS.gray60,
		info: COLOR_TOKENS.gray30,
	},
	background: {
		primary: COLOR_TOKENS.blue50,
		secondary: COLOR_TOKENS.white0,
		tetriary: COLOR_TOKENS.gray10,
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
		xl: TEXT_SIZES.xLarge,
		xxl: TEXT_SIZES.xxLarge,
	},
	fontFamily: {
		primary: "'Poppins', sans-serif",
	},
	border: {
		light: `2px solid ${COLOR_TOKENS.gray20}`,
	},
};
