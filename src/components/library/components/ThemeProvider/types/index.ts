import { PropsWithChildren } from 'react';

import { defaultTheme } from '../../../config/theme/defaultTheme';

export type ThemeProps = PropsWithChildren & {
	theme?: typeof defaultTheme;
};
