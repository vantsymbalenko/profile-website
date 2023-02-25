import styled from 'styled-components';

import { Avatar } from '../../../components/library/components/Avatar';

export const Wrapper = styled.div`
	padding: 3% 10%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 32px;
`;

export const MainDescription = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24x;
	flex: 1;
`;

export const AvatarWrapper = styled.div`
	flex: 1;
	max-width: 100%;
`;

export const AvatarImage = styled(Avatar)`
	background-position: center;
`;
