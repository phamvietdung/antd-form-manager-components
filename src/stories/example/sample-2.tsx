import { Divider, Typography } from 'antd';

const { Title, Text, Link } = Typography;

export default [
    {
      type: 'heading',
      label: <>
        <Title level={3}>Just simple form</Title>
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
      span: 8,
    },
    {
      type: 'input',
      name: 'surName',
      label: 'Surmame',
      span: 16,
      required: (values: any) => {
        if (values.firstName == 'oops') return true;
        return false;
      }
    },
  ]