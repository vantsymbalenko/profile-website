import styled, { css } from 'styled-components';

const VARIANTS = {
	'nav-link': css`
		font-size: ${(p) => p.theme.fontSize.m};
		opacity: 0.55;
	`,
	link: css`
		font-size: ${(p) => p.theme.fontSize.s};
		opacity: 0.6;
	`,
};

type StyledLinkProps = {
	variant?: keyof typeof VARIANTS;
};

export const StyledLink = styled.a<StyledLinkProps>`
	text-decoration: none;
	line-height: 21px;
	font-style: normal;
	cursor: pointer;
	color: ${(p) => p.theme.colors.primary};
	${(p) => (p.variant ? VARIANTS[p.variant] : VARIANTS.link)};
	transition: all 0.3s ease-in-out;
	&:hover {
		opacity: 1;
	}
`;
