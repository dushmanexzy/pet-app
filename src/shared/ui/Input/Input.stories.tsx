import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './Input';

export default {
    title: 'ui/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Placeholder text...',
    value: '12345',
};
