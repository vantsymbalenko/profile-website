import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from '..';

export default {
	title: 'Link',
	component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});

Default.args = {
	withActiveState: false,
	variant: 'link',
	href: '#',
	to: '/',
	children: 'Link to somewhere',
};
