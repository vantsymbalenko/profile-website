import styled from 'styled-components';

export const Card = styled.section`
	min-width: 200px;
	min-height: 200px;
	border-radius: 40px;
	box-shadow: ${(props) => props.theme.shadows.primary};
	overflow: hidden;
	background-color: ${(p) => p.theme.background.secondary};
`;
