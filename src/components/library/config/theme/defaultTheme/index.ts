import { DefaultTheme } from 'styled-components';

const COLOR_TOKENS = {
	blue50: '#007ced',
	white0: '#ffffff',
	gray50: '#333333',
};

const SHADOWS_TOKENS = {
	black20: '0 0 40px -10px rgb(0 0 0 / 20%)',
};

const TEXT_SIZES = {
	small: '13px',
	regular: '14px',
};

export const defaultTheme: DefaultTheme = {
	colors: {
		primary: COLOR_TOKENS.gray50,
		secondary: COLOR_TOKENS.white0,
	},
	background: {
		primary: COLOR_TOKENS.blue50,
		secondary: COLOR_TOKENS.white0,
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
	},
};
