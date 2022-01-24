import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DFormManager } from './form-manager';

export default {
  title: 'Example/DFormManager',
  component: DFormManager,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
} as ComponentMeta<typeof DFormManager>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DFormManager> = (args) => <DFormManager {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    size : 'medium'
};

export const Secondary = Template.bind({});
Secondary.args = {
    size : 'small'
};