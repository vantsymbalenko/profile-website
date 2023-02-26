import React, { FC, PropsWithChildren } from 'react';

import { Typography } from '../Typography';

import { Wrapper, SideTitle } from './styles';

type HeaderSectionProps = {
	sideText?: string | null;
};

export const HeaderSection: FC<PropsWithChildren<HeaderSectionProps>> = ({
	children,
	sideText,
}) => (
	<Wrapper>
		{sideText && (
			<SideTitle>
				<Typography as="h4" variant="body-secondary">
					{sideText}
				</Typography>
			</SideTitle>
		)}
		<Typography as="h1" variant="title-main" weight="bold">
			{children}
		</Typography>
	</Wrapper>
);

HeaderSection.defaultProps = {
	sideText: null,
};
