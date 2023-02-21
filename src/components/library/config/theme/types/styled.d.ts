import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary: string;
			secondary: string;
		};
		background: {
			primary: string;
			secondary: string;
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
		};
	}
}
