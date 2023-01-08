import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  // const [user, setUser] = useState<User | null>(null);

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user: User | null) => {
  //     setUser(user);
  //   });
  // });

  // console.log(user);

  return <Outlet />;
};

export default App;
