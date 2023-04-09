import { ReactNode } from 'react';

import { Typography } from '../Typography';

import { Wrapper, TextWrapper } from './styles';

type IconTextProps = {
	title: ReactNode;
	subTitle?: ReactNode;
	icon?: ReactNode;
};

export const IconText = ({ title, subTitle, icon }: IconTextProps) => (
	<Wrapper>
		{icon}
		<TextWrapper>
			<Typography variant="title-info" weight="bold">
				{title}
			</Typography>
			{subTitle && <Typography>{subTitle}</Typography>}
		</TextWrapper>
	</Wrapper>
);

IconText.defaultProps = {
	subTitle: null,
	icon: null,
};
