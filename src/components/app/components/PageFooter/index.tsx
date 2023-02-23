import React, { FC } from 'react';

import { Link } from '../../../library/components/Link';

import { Footer, SocialList } from './styles';

export const PageFooter: FC = () => (
	<Footer>
		<div>
			<SocialList>
				<li>
					<Link href="https://www.linkedin.com/in/iamtsymbalenko/">Linkedin</Link>
				</li>
				<li>
					<Link href="https://github.com/vantsymbalenko">Github</Link>
				</li>
			</SocialList>
		</div>
	</Footer>
);
