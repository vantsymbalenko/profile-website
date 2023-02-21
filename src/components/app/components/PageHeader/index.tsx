import React, { FC } from 'react';

import { Logo } from '../Logo';

import { Header } from './styles';

export const PageHeader: FC = () => (
	<Header>
		<Logo />
	</Header>
);
