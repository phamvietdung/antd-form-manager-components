import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { DFormManager, SetPluginComponent, DFormManagerProps } from './components';

import { Divider, Typography } from 'antd';

const { Title, Text, Link } = Typography;

const fields : any[] = [

  {
      type: 'heading',
      label: <>
        <Title level={3}>Tạo trường</Title>
        <Text>Điền các thông tin bên dưới để tạo trường tùy chỉnh.</Text>
        <Divider />
      </>,
    },
]

function App() {
  return (
    <div className="App">
       <DFormManager
                    width={600} 
                    fields={fields} />
    </div>
  );
}

export default App;
