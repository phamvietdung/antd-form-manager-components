import { Divider, Typography } from 'antd';

const { Title, Text, Link } = Typography;

export default [
  {
    type: 'heading',
    label: <>
      <Title level={3}>Example 1</Title>
      <Text>It's quick and easy.</Text>
      <Divider />
    </>,
    //   align: 'left'
  },
  {
    type: 'input',
    name: 'firstName',
    label: 'First name',
    required: true,
    span: 8,
  },
  {
    type: 'input',
    name: 'surName',
    label: 'Surmame',
    span: 16,
    required: (values: any) => {
      return values.firstName == 'oops' ? true : false;
    },
    validator: (values: any, current: any) => {
      return values.firstName != current ? [true] : [false, "First name and last name cannot be the same!"];
    }
  },
  {
    type: 'password',
    name: 'password',
    label: 'Input your password',
    span: 24,
    disabled: (values: any) => {
      if (values.surName == undefined || values.surName == '') return true;
      return false;
    }
  },
  {
    type: 'password',
    name: 'passwordAgain',
    label: 'And input the password again :)',
    span: 24,
    disabled: (values: any) => {
      if (values == undefined || values.surName == '') return true;
      return false;
    },
    validator : (values : any, current : any) => {
      return current != undefined && current != '' && values.password == current ? [true] : [false, "You must to fill their with the same value!"]
    }
  },
]