import React, { FC } from 'react';

import { Link } from '../../../../../library/components/Link';

import { NavList } from './styles';

export const Navigation: FC = () => (
	<nav>
		<NavList>
			<li>
				<Link withActiveState to="/" variant="nav-link">
					Home
				</Link>
			</li>
			<li>
				<Link withActiveState to="/resume" variant="nav-link">
					Resume
				</Link>
			</li>
			<li>
				<Link withActiveState to="/contacts" variant="nav-link">
					Contacts
				</Link>
			</li>
		</NavList>
	</nav>
);
