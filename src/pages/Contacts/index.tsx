import React, { FC } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { TfiEmail } from 'react-icons/tfi';

import { HeaderSection } from '../../components/library/components/HeaderSection';
import { IconText } from '../../components/library/components/IconText';
import { Input } from '../../components/library/components/form/Input';

import { ContactDetails, Icon, Info, ContactForm, FormTitle, FormLeftColumn } from './styles';

export const Contacts: FC = () => (
	<>
		<HeaderSection sideText="Get in touch">Contacts</HeaderSection>
		<ContactDetails>
			<Info>
				<IconText
					title="London, United Kingdom"
					subTitle="Coding in UK: Exploring the Tech Scene in London"
					icon={<Icon as={IoLocationOutline} />}
				/>
				<IconText
					title="iamtsymbalenko@gmail.com"
					subTitle="Get in Touch with me: From Web Development to Mobile Applications, Bringing Ideas to Life"
					icon={<Icon as={TfiEmail} />}
				/>
			</Info>
			<ContactForm>
				<FormTitle>How Can I Help You?</FormTitle>
				<form>
					<FormLeftColumn>
						<Input placeholder="Full Name" />
						<Input placeholder="Email address" type="email" />
						<Input placeholder="Subject" />
					</FormLeftColumn>
				</form>
			</ContactForm>
		</ContactDetails>
	</>
);
