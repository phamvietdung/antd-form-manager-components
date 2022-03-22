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
        if (values == undefined || values.firstName == 'oops') return true;
        return false;
      }
    },
    {
      type: 'password',
      name: 'password',
      label: 'Surmame',
      span: 24,
      disabled: (values: any) => {
        if (values == undefined || values.surName == '') return true;
        return false;
      }
    },
    {
      type: 'password',
      name: 'passwordAgain',
      label: 'Surmame',
      span: 24,
      disabled: (values: any) => {
        if (values == undefined || values.surName == '') return true;
        return false;
      }
    },
  ]