import { LogoWrapper } from './styles';
import { CircleIcon } from './components/CircleIcon';
import { CompanyName } from './components/CompanyName';

export const Logo = () => (
	<LogoWrapper>
		<CircleIcon>I</CircleIcon>
		<CompanyName />
	</LogoWrapper>
);
