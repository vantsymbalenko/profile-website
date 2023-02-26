import styled from 'styled-components';

export const Wrapper = styled.section`
	padding: 65px 70px;
	background-color: ${(p) => p.theme.background.tetriary};
	border-top: ${(p) => p.theme.border.regular};
	border-bottom: ${(p) => p.theme.border.regular};
	position: relative;
`;

export const SideTitle = styled.div`
	position: absolute;
	top: 0;
	right: 70px;
	margin: 1.33em 0;
`;
