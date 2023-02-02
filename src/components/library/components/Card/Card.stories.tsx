import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '.';

export default {
	title: 'Card',
	component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
	children:
		'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis placeat tempora dolores quisquam doloremque quibusdam quos sint modi vero possimus quia, nemo, blanditiis harum magni eligendi. Neque vitae maxime explicabo.',
};
