import { FC, PropsWithChildren } from 'react';

import { BackgroundImage, Container, Section } from './styles';

export const PageWrapper: FC<PropsWithChildren> = ({ children }) => (
	<>
		<BackgroundImage />
		<Container>
			<Section>{children}</Section>
		</Container>
	</>
);
