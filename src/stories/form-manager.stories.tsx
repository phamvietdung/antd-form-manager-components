import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DayOfWeek } from '../components/const'

import { DFormManager } from '../components/form-manager';

import viVn from 'antd/es/locale/vi_VN'

import zhCN from 'antd/es/locale/zh_CN';
import { Divider, Typography } from 'antd';
const { Title, Text, Link } = Typography;

export default {
  title: 'Example/DFormManager',
  component: DFormManager,
} as ComponentMeta<typeof DFormManager>;

const Template: ComponentStory<typeof DFormManager> = (args) => <DFormManager {...args} />;

const fields = [
  {
    type: 'heading',
    label: <>
      <Title level={3}>Sign Up</Title>
      <Text>It's quick and easy.</Text>
      <Divider />
    </>,
    align: 'left'
  },
  {
    type: 'input',
    name: 'firstName',
    label: 'First name',
    required: true,
    span: 12
  },
  {
    type: 'input',
    name: 'surName',
    label: 'Surmame',
    required: false,
    span: 12
  },
  {
    type: 'input',
    name: 'mobileOrEmail',
    required: true,
    label: 'Mobile number or email address',
    // span : 6
  },
  {
    type: 'password',
    name: 'password',
    label: 'New password',
    required: true,
  },
  {
    type: 'heading',
    label: <>
      <Text>
        By clicking Sign Up, you agree to our <Link>Terms</Link>, <Link>Data Policy</Link> and <Link>Cookie Policy</Link>. You may receive SMS notifications from us and can opt out at any time.
      </Text>
    </>,
    align: 'left'
  },
  {
    type: 'select',
    name: 'password',
    label: 'Date of birth',
    dataSource: {
      data: DayOfWeek('cn')
    },
    required: true,
    span: 8

  },
  {
    type: 'select',
    name: 'password',
    label: ' ',
    dataSource: {
      data: [{
        id: 1,
        value: 1
      }, {
        id: 2,
        value: 2
      }, {
        id: 3,
        value: 3
      }]
    },
    required: true,
    span: 8

  },
  {
    type: 'select',
    name: 'password',
    label: ' ',
    dataSource: {
      data: [{
        id: 1,
        value: 1
      }, {
        id: 2,
        value: 2
      }, {
        id: 3,
        value: 3
      }]
    },
    required: true,
    span: 8

  },
  // {
  //   type: 'number',
  //   name: 'e',
  //   label: 'akhahsd',
  //   visible : (values : any) => {
  //     if(values.a == 'hehe') return true;
  //     return false;
  //   }
  // },
  // {
  //   type: 'datetime',
  //   name: 'f',
  //   label: 'akhahsd',
  //   visible : (values : any) => {
  //     if(values.a == 'hehe') return true;
  //     return false;
  //   }
  // }
]

export const Primary = Template.bind({});
Primary.args = {
  fields: fields,
  data: {
    a: "hehe",
    b: "bubu",
    c: "123",
    d: 123123.22
  },
  locale: viVn,
  options: {
    layout: 'vertical',
    styles: {
      borderRadius: 10
    }
  },

};

export const Secondary = Template.bind({});
Secondary.args = {
  fields: fields,
  locale: zhCN,
  options: {
    layout: 'horizontal',
    styles: {
      borderRadius: 15
    }
  }
};

export const Third = Template.bind({});
Third.args = {
  fields: fields,
  locale: zhCN,
  options: {
    layout: 'inline',
    styles: {
      borderRadius: 20
    }
  }
};


