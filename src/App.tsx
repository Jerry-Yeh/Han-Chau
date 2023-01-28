import { Outlet } from 'react-router-dom';
import { ConfigProvider } from 'antd';

const App = () => {
  return (
    <ConfigProvider autoInsertSpaceInButton={false}>
      <Outlet />
    </ConfigProvider>
  );
};

export default App;
