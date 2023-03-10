import { Outlet } from 'react-router-dom';
import { ConfigProvider } from 'antd';

const App = () => {
  return (
    <ConfigProvider
      autoInsertSpaceInButton={false}
      theme={{
        token: {
          fontFamily: 'Inter, Noto Sans TC',
        },
        hashed: false,
      }}
    >
      <Outlet />
    </ConfigProvider>
  );
};

export default App;
