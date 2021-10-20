import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Component/App/Home';
import Assujetti from './Component/Assujetti';
import NonAssujetti from './Component/NonAssujetti';

function App() {
  return (
    <div id="container">
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />

          {/* Routes pour les assujetti */}
          <Route exact path='/Assujetti' component={Assujetti} />

          {/* Routes pour les non assujetti */}
          <Route exact path='/non_assujetti' component={NonAssujetti} />

        </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
