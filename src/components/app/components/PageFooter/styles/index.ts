import styled from 'styled-components';

export const Footer = styled.footer`
	display: flex;
	justify-content: space-between;
	border-top: ${(p) => p.theme.border.light};
	background-color: ${(p) => p.theme.background.tetriary};
	padding: 15px 45px;
`;

export const SocialList = styled.ul`
	padding: 0;
	display: flex;
	gap: 25px;
	list-style: none;
`;
