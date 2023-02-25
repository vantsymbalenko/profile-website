import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	padding-top: 100%;
	position: relative;
`;

export const Content = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	padding: 15px;
	border-radius: 50%;
	box-shadow: 0 0 25px 0 rgb(0 0 0 / 10%);
`;

type ImageProps = {
	src: string;
};

export const Image = styled.div<ImageProps>`
	background-image: url(${(p) => p.src});
	background-size: cover;
	height: auto;
	display: block;
	width: 100%;
	height: 100%;
	border-radius: 50%;
`;
