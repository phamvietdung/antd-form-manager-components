import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DFormManager } from '../components/form-manager';

import viVn from 'antd/es/locale/vi_VN'

import zhCN from 'antd/es/locale/zh_CN';

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
  fields: [
    {
      type : 'input',
      name : 'a',
      label : 'akhahsd',
      required : true
    },
    {
      type : 'password',
      name : 'b',
      label : 'akhahsd'
    },
    {
      type : 'textarea',
      name : 'c',
      label : 'akhahsd'
    }
  ],
  locale : viVn, 
};

export const Secondary = Template.bind({});
Secondary.args = {
  fields: [],
  locale : zhCN
};