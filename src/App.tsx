import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router';
import { Home } from './pages/Home/Home';
import { SignIn } from './pages/SignIn';
import { AuthApi } from './services/api/authApi';
import { setUserData } from './store/ducks/user/actionCreators';

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const checkAuth = async () => {
    try {
      const { data } = await AuthApi.getMe();
      dispatch(setUserData(data));
      history.replace('/home');
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    checkAuth();
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={Home} />
      </Switch>
      <footer
        style={{
          textAlign: 'center',
          marginTop: '20px',
        }}>
        <i>Twitter Clone ©2021 Created by Vitaly</i>
      </footer>
    </div>
  );
}

export default App;
