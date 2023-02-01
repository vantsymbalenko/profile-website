import { FC } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { defaultTheme } from '../../config/theme/defaultTheme';

import { ThemeProps } from './types';

export const ThemeProvider: FC<ThemeProps> = ({ theme = defaultTheme, children }) => (
	<StyledThemeProvider theme={theme}>
		<Normalize />
		{children}
	</StyledThemeProvider>
);
