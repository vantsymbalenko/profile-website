import { FC, PropsWithChildren } from 'react';

import { Title, Progress } from './styles';

type SectionTitleProps = {
	percentage?: number;
	className?: string;
};

export const SectionTitle: FC<PropsWithChildren<SectionTitleProps>> = ({
	percentage,
	children,
	className,
}) => (
	<div className={className}>
		<Title variant="title-secondary" weight="bold">
			{children}
		</Title>
		<Progress percentage={percentage} />
	</div>
);

SectionTitle.defaultProps = {
	percentage: 20,
	className: '',
};
