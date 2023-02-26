import styled from 'styled-components';

import mainBgSrc from '../../../../../../assets/mainBg.png';
import { Card } from '../../../../../library/components/Card';

export const BackgroundImage = styled.div`
	position: absolute;
	width: auto;
	height: auto;
	top: -18px;
	left: -18px;
	right: -18px;
	bottom: -18px;
	background-image: url(${mainBgSrc});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: calc(50%) calc(50%);
	z-index: 1;
`;

export const Container = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 2;
	overflow: auto;
	height: auto;
	min-height: 100vh;
`;

export const Section = styled(Card)`
	max-width: 1320px;
	width: 100%;
	border-radius: 0;
	box-sizing: border-box;
	@media screen and (min-width: ${(p) => p.theme.breakpoints.tablet}) {
		border-radius: 40px;
	}
`;
