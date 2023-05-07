import { Outlet } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { useAppSelector } from '~/store/hook';

import HCLoading from '~/components/Loading';

const App = () => {
  const showLoading = useAppSelector((state) => state.loading.show);

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
      <HCLoading show={showLoading} />
    </ConfigProvider>
  );
};

export default App;
