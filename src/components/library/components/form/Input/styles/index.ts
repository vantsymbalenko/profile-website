import styled from 'styled-components';

export const StyledInput = styled.input`
	font-size: ${(p) => p.theme.fontSize.m};
	font-family: ${(p) => p.theme.fontFamily.primary};
	color: ${(p) => p.theme.colors.info};
	padding: 10px 25px 10px 12px;
	border: ${(p) => p.theme.border.regular};
	border-radius: 5px;
	width: 100%;
	outline: none;
	&::placeholder {
		color: ${(p) => p.theme.colors.side};
	}
	&:focus {
		outline: ${(p) => p.theme.background.primary} solid 2px;
	}
`;
