import styled from 'styled-components';

export const CircleIcon = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(p) => p.theme.background.primary};
	color: ${(p) => p.theme.colors.secondary};
	width: 44px;
	height: 44px;
	border-radius: 50%;
	font-size: 28px;
	font-weight: 800;
`;
