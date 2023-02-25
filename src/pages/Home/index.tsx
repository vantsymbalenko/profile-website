import { Typography } from '../../components/library/components/Typography';
import profileImageSrc from '../../assets/profile.png';

import { Wrapper, MainDescription, AvatarWrapper, AvatarImage } from './styles';

export const Home = () => (
	<Wrapper>
		<MainDescription>
			<Typography variant="title-main" weight="bold">
				Passionate Software Engineer
			</Typography>
			<Typography variant="body-primary">
				Experienced software engineer with expertise in developing innovative software
				solutions, committed to delivering high-quality code for optimized user experiences.
			</Typography>
		</MainDescription>
		<AvatarWrapper>
			<AvatarImage src={profileImageSrc} />
		</AvatarWrapper>
	</Wrapper>
);
