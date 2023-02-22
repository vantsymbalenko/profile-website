import React, { FC } from 'react';

import { Logo } from '../Logo';

import { Navigation } from './components/Navigation';
import { Header } from './styles';

export const PageHeader: FC = () => (
	<Header>
		<Logo />
		<Navigation />
	</Header>
);
