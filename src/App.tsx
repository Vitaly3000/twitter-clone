import { Route, Switch } from 'react-router';
import { Home } from './pages/Home/Home';
import {SignIn} from './pages/SignIn/SignIn';

function App() {
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
