import styled, { css } from 'styled-components';

const VARIANTS = {
	'title-secondary': css`
		font-size: ${(p) => p.theme.fontSize.xl};
		line-height: 50px;
		color: ${(p) => p.theme.colors.tetriary};
		font-family: ${(p) => p.theme.fontFamily.primary};
	`,
	'body-primary': css`
		font-size: ${(p) => p.theme.fontSize.m};
		color: ${(p) => p.theme.colors.info};
		font-family: ${(p) => p.theme.fontFamily.primary};
	`,
};

const FONT_STYLE = {
	regular: css`
		font-weight: 400;
	`,
	bold: css`
		font-weight: 600;
	`,
	bolder: css`
		font-weight: 700;
	`,
};

type TypographyProps = {
	variant?: 'title-secondary';
	weight?: 'regular' | 'bold' | 'bolder';
};

export const Typography = styled.p<TypographyProps>`
	${(p) => (p.variant ? VARIANTS[p.variant] : VARIANTS['body-primary'])};
	${(p) => (p.weight ? FONT_STYLE[p.weight] : FONT_STYLE.regular)};
`;
