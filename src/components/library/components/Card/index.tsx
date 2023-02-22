import styled from 'styled-components';

export const Card = styled.section`
	min-width: 200px;
	min-height: 200px;
	padding: 40px 50px 60px;
	border-radius: 40px;
	box-shadow: ${(props) => props.theme.shadows.primary};
	overflow: hidden;
	background-color: ${(p) => p.theme.background.secondary};
`;
