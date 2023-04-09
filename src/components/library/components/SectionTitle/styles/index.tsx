import styled from 'styled-components';

import { Typography } from '../../Typography';

export const Title = styled(Typography)`
	margin-bottom: 7px;
	line-height: 1.2;
`;

export const Progress = styled.div<{ percentage?: number }>`
	width: 100%;
	height: 2px;
	background: ${(p) => p.theme.background.aside};
	position: relative;
	&:before {
		display: block;
		content: ' ';
		position: absolute;
		top: 0;
		left: 0;
		width: ${(p) => p.percentage || 20}%;
		height: 2px;
		background: ${(p) => p.theme.background.primary};
	}
`;
