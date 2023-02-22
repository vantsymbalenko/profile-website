import React, { FC } from 'react';

import { Link } from '../../../../../library/components/Link';
import { Typography } from '../../../../../library/components/Typography';

import { NavList } from './styles';

export const Navigation: FC = () => (
	<nav>
		<NavList>
			<li>
				<Link withActiveState to="/">
					<Typography as="span">Home</Typography>
				</Link>
			</li>
			<li>
				<Link withActiveState to="/resume">
					<Typography as="span">Resume</Typography>
				</Link>
			</li>
			<li>
				<Link withActiveState to="/contacts">
					<Typography as="span">Contacts</Typography>
				</Link>
			</li>
		</NavList>
	</nav>
);
