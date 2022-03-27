import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { DayOfMonth, DayOfWeek, MonthOfYear, Year, SetStyles, GetStyles } from '../components/const'

import { DFormManager, SetPluginComponent } from '../components';

import viVn from 'antd/es/locale/vi_VN'

import zhCN from 'antd/es/locale/zh_CN';

import { Sample1, Sample2 } from './example'

import { Button, Form, Input } from 'antd';

import { IField } from '../components/interfaces/field';

import { Badge, Card } from 'antd';

const TestComp = (props: { field: IField }) => {
  return (
    <React.Fragment>
      <Form.Item name={props.field.name} label={props.field.label} >
        <Input />
      </Form.Item >
      <Form.Item name={'dafuke'} label={props.field.label} >
        <Input />
      </Form.Item >
    </React.Fragment>

  )
}

SetPluginComponent('comp', TestComp)


export default {
  title: 'Example/DFormManager',
  component: DFormManager,
} as ComponentMeta<typeof DFormManager>;

const Template: ComponentStory<typeof DFormManager> = (args) => {

  const [debug, setDebug] = useState<any>({});

  const [isReady, SetIsReady] = useState<boolean>(true);

  return (
    <React.Fragment>
      <Badge.Ribbon style={{width : '600'}} text={isReady ? 'Ready' : 'Loading'} color={isReady ? 'green' : 'red'}>
        <DFormManager
          getDebugPanel={setDebug}
          getIsReady={SetIsReady}
          width={600} {...args} />
      </Badge.Ribbon>

      {JSON.stringify(debug)}
      {/* <React.Fragment>
        <Button disabled={!isReady} value='Is Sync?'>{isReady ? 'ready' : 'loading'}</Button>
      </React.Fragment> */}

    </React.Fragment>
  )
}

// const simple_form_visible = [
//   {
//     type: 'heading',
//     label: <>
//       <Title level={3}>Just simple form</Title>
//       <Text>It's quick and easy.</Text>
//       <Divider />
//     </>,
//     align: 'left'
//   },
//   {
//     type: 'input',
//     name: 'firstName',
//     label: 'First name',
//     required: true,
//     span: 8,
//   },
//   {
//     type: 'input',
//     name: 'surName',
//     label: 'Surmame',
//     span: 16,
//     required: (values: any) => {
//       if (values.firstName == 'oops') return true;
//       return false;
//     }
//   },
// ]

// const fields = [
//   {
//     type: 'heading',
//     label: <>
//       <Title level={3}>Sign Up</Title>
//       <Text>It's quick and easy.</Text>
//       <Divider />
//     </>,
//     align: 'left'
//   },
//   {
//     type: 'input',
//     name: 'firstName',
//     label: 'First name',
//     required: true,
//     span: 12
//   },
//   {
//     type: 'input',
//     name: 'surName',
//     label: 'Surmame',
//     required: false,
//     span: 12
//   },
//   {
//     type: 'input',
//     name: 'mobileOrEmail',
//     required: true,
//     label: 'Mobile number or email address',
//     // span : 6
//   },
//   {
//     type: 'password',
//     name: 'password',
//     label: 'New password',
//     required: true,
//     span: 12
//   },
//   {
//     type: 'password',
//     name: 'passwordConfirm',
//     label: 'New password again',
//     required: true,
//     span: 12,
//     validator: (values: any, current: any) => {
//       console.log(values.password, current)
//       if (values.password == current) return true;
//       return false;
//     },
//     validatorMessage: "The password do not match"
//   },

//   // {
//   //   type: 'select',
//   //   name: 'day',
//   //   label: 'Day',
//   //   dataSource: {
//   //     data: DayOfMonth()
//   //   },
//   //   required: true,
//   //   span: 8

//   // },
//   // {
//   //   type: 'select',
//   //   name: 'month',
//   //   label: 'Month',
//   //   dataSource: {
//   //     data: MonthOfYear()
//   //   },
//   //   required: true,
//   //   span: 8

//   // },
//   // {
//   //   type: 'select',
//   //   name: 'year',
//   //   label: 'Year',
//   //   dataSource: {
//   //     data: Year()
//   //   },
//   //   required: true,
//   //   span: 8

//   // },
//   {
//     type: 'radio',
//     name: 'gender',
//     label: 'Gender',
//     required: true,

//   },
//   {
//     type: 'datetime-group',
//     name: 'dob',
//     label: 'Date of birth',
//     required: true,

//   },

//   {
//     type: 'editor',
//     name: 'description',
//     label: 'Description about yourself',
//     required : true,
//     visible: (values: any) => {
//       if (values.firstName == 'hehe') return true;
//       return false;
//     }
//   },
//   {
//     type: 'heading',
//     label: <>
//       <Text>
//         By clicking Sign Up, you agree to our <Link>Terms</Link>, <Link>Data Policy</Link> and <Link>Cookie Policy</Link>. You may receive SMS notifications from us and can opt out at any time.
//       </Text>
//     </>,
//     align: 'left'
//   },
//   // {
//   //   type: 'number',
//   //   name: 'e',
//   //   label: 'akhahsd',
//   //   visible : (values : any) => {
//   //     if(values.a == 'hehe') return true;
//   //     return false;
//   //   }
//   // },
//   // {
//   //   type: 'datetime',
//   //   name: 'f',
//   //   label: 'akhahsd',
//   //   visible : (values : any) => {
//   //     if(values.a == 'hehe') return true;
//   //     return false;
//   //   }
//   // }
// ]




export const Sample1Setting = Template.bind({});
Sample1Setting.args = {
  fields: Sample1,
  locale: viVn,
  options: {
    layout: 'horizontal',

  },
  data: {
    firstName: 'oops'
  },
  style: 'default'

};

export const Sample2Setting = Template.bind({});
Sample2Setting.args = {
  fields: Sample2,
  locale: 'en',
  options: {
    layout: 'horizontal',

  },
  style: 'default'

};

// export const DashedSetting = Template.bind({});
// DashedSetting.args = {
//   fields: fields,
//   locale: 'cn',
//   options: {
//     layout: 'horizontal',

//   },
//   style: 'circle'

// };

// export const InlineSetting = Template.bind({});
// InlineSetting.args = {
//   fields: fields,
//   options: {
//     layout: 'horizontal',
//   },
//   style: 'rounded'
// };


