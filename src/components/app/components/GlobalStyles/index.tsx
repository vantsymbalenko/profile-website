import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	html,
	body,
	#root {
		min-height: 100vh;
		height: 100%;
	} 

	html,
	body {
		width: 100vw;
		min-height: 100vh;
		background-color: ${(p) => p.theme.background.primary};
	}

	* {
		margin: 0;
		padding: 0;
	}
`;
