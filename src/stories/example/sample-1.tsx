import { Divider, Typography } from 'antd';

const { Title, Text, Link } = Typography;

export default [
  {
    type: 'heading',
    label: <>
      <Title level={3}>Tạo trường</Title>
      <Text>Điền các thông tin bên dưới để tạo trường tùy chỉnh.</Text>
      <Divider />
    </>,
  },
  {
    type: 'input',
    name: 'Label',
    label: 'Tên trường tùy chỉnh',
    required: true,
    span: 12,
  },
  {
    type: 'input',
    name: 'Alias',
    label: 'Alias',
    disabled: true,
    required: true,
    span: 12,
    combinable: (values: any) => {
      return values.Label == undefined ? '' : values.Label.toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');;
    }
    // required: (values: any) => {
    //   return values.firstName == 'oops' ? true : false;
    // },
    // validator: (values: any, current: any) => {
    //   return values.firstName != current ? [true] : [false, "First name and last name cannot be the same!"];
    // }
  },
  {
    type: 'select',
    name: 'type',
    label: 'Loại trường tùy chỉnh',
    dataSource: {
      id : "key",
      value : "value",
      data: [
        {
          key : "text",
          value : "Văn bản"
        },
        {
          key : "multipleText",
          value : "Danh sách văn bản"
        },
        {
          key : "number",
          value : "Số"
        },
        {
          key : "datetime",
          value : "Ngày tháng"
        }
      ]
    },
    required: true,
    span: 8
  },

  {
    type: 'radio',
    name: 'isRequired',
    label: 'Có phải trường bắt buộc hay không ?',
    dataSource: {
      data: [
        {
          id : "text",
          value : "Văn bản"
        },
        {
          id : "multipleText",
          value : "Danh sách văn bản"
        },
        {
          id : "number",
          value : "Số"
        }
      ]
    },
    span: 24,
    // disabled: (values: any) => {
    //   if (values.surName == undefined || values.surName == '') return true;
    //   return false;
    // }
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
    validator: (values: any, current: any) => {
      return current != undefined && current != '' && values.password == current ? [true] : [false, "You must to fill their with the same value!"]
    }
  },
]