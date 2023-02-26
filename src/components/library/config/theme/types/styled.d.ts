import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary: string;
			secondary: string;
			tetriary: string;
			info: string;
			side: string;
		};
		background: {
			primary: string;
			secondary: string;
			tetriary: string;
		};
		shadows: {
			primary: string;
		};
		breakpoints: {
			tablet: string;
		};
		fontSize: {
			s: string;
			m: string;
			xl: string;
			xxl: string;
		};
		fontFamily: {
			primary: string;
		};
		border: {
			light: string;
			regular: string;
		};
	}
}
