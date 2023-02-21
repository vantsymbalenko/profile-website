import { FC, PropsWithChildren } from 'react';

import { PageHeader } from '../../PageHeader';

import { BackgroundImage, Container, Section } from './styles';

export const PageWrapper: FC<PropsWithChildren> = ({ children }) => (
	<>
		<BackgroundImage />
		<Container>
			<Section>
				<PageHeader />
				{children}
			</Section>
		</Container>
	</>
);
