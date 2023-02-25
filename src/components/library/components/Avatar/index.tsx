import { FC } from 'react';

import { Wrapper, Content, Image } from './styles';

type AvatarProps = {
	src: string;
	className?: string;
};

export const Avatar: FC<AvatarProps> = ({ src, className }) => (
	<Wrapper>
		<Content>
			<Image src={src} className={className} />
		</Content>
	</Wrapper>
);

Avatar.defaultProps = {
	className: '',
};
