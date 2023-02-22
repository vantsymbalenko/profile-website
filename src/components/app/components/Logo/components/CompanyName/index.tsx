import React, { FC } from 'react';

import { Typography } from '../../../../../library/components/Typography';

export const CompanyName: FC = () => (
	<Typography as="div" weight="bold" variant="title-secondary">
		Ivan&nbsp;
		<Typography as="span" variant="title-secondary">
			Tsymbalenko
		</Typography>
	</Typography>
);
