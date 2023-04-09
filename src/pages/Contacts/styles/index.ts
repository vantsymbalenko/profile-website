import styled from 'styled-components';

import { SectionTitle } from '../../../components/library/components/SectionTitle';

export const ContactDetails = styled.article`
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
	padding: 30px 60px;
`;

export const Icon = styled.span`
	width: 33px;
	height: 33px;
	color: ${(p) => p.theme.background.primary};
`;

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	flex-basis: 35%;
	padding-right: 40px;
`;

export const ContactForm = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FormTitle = styled(SectionTitle)`
	margin-bottom: 30px;
`;

export const FormLeftColumn = styled.div`
	& > *:not(:last-child) {
		margin-bottom: 24px;
	}
`;
